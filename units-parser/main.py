import glob
import os
import shutil
import requests
import json
from pathlib import Path
import lupa
from lupa import LuaRuntime
import urllib
from GitHubDownloader import Downloader
import argparse
from slpp import slpp
import logging
from typing import Dict, List, Set, Any, Optional, Union
from PIL import Image, UnidentifiedImageError  # Added for image conversion
from tqdm import tqdm  # Added for progress bar

# =====================
# CONFIG AND SETUP
# =====================

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

# URLs and Paths
NAMES_DETAILS_URL = "https://raw.githubusercontent.com/beyond-all-reason/Beyond-All-Reason/master/language/en/units.json"
BAR_REPO_URL = "https://github.com/beyond-all-reason/Beyond-All-Reason"
UNITS_FOLDER_PATH = "units"
UNITPICS_FOLDER_PATH = "unitpics"  # Added for unit pictures
ICONS_FOLDER_PATH = "icons"  # Added for unit icons
ICONTYPES_LUA_URL = "https://raw.githubusercontent.com/beyond-all-reason/Beyond-All-Reason/master/gamedata/icontypes.lua"  # Added for icon mappings

# Directories
CACHE_DIR = Path("cache")
UNITS_DIR = CACHE_DIR / "units"
UNITPICS_DIR = CACHE_DIR / UNITPICS_FOLDER_PATH  # Added for unit pictures
UNITPICS_WEBP_DIR = CACHE_DIR / "unitpics_webp"  # Added for converted WebP images
ICONS_RAW_DIR = CACHE_DIR / ICONS_FOLDER_PATH  # Added for downloaded PNG icons
ICONS_WEBP_DIR = CACHE_DIR / "unit_icons_webp"  # Added for converted WebP icons
STATIC_DIR = Path("..\\static")  # Added static directory for website assets

# JSON files to maintain in cache initially
JSON_FILES_TO_CACHE = [
    "units_data.json",
    "unit_names_details.json",
    "units_by_faction.json",
    "units_by_type.json",
    "units_by_tech.json",
    "units_by_faction_type_tech.json",
    "factions_list.json",
    "types_with_subtypes.json",
    "all_keywords.json",
    "all_keywords.txt",
    "unit_icon_map.json",  # Added for icon mappings
]

# Files and folders to move to static directory
FILES_TO_MOVE_TO_STATIC = [
    "types_with_subtypes.json",
    "unit_names_details.json",
    "units_by_faction_type_tech.json",
    "units_by_faction.json",
    "units_by_tech.json",
    "units_by_type.json",
    "units_data.json",
    "factions_list.json",
    "unit_icon_map.json",  # Added for icon mappings
]
FOLDERS_TO_MOVE_TO_STATIC = [
    UNITPICS_WEBP_DIR.name,
    ICONS_WEBP_DIR.name,
]  # Updated to list, just folder names

# =====================
# UTILITY FUNCTIONS
# =====================


def ensure_directories_exist() -> None:
    """Ensure all required directories exist."""
    CACHE_DIR.mkdir(exist_ok=True)
    UNITS_DIR.mkdir(exist_ok=True)
    UNITPICS_DIR.mkdir(exist_ok=True)  # Ensure unitpics directory exists
    UNITPICS_WEBP_DIR.mkdir(exist_ok=True)  # Ensure unitpics_webp directory exists
    ICONS_RAW_DIR.mkdir(exist_ok=True)  # Ensure icons_raw directory exists
    ICONS_WEBP_DIR.mkdir(exist_ok=True)  # Ensure icons_webp directory exists
    STATIC_DIR.mkdir(exist_ok=True)  # Ensure static directory exists
    logger.info(
        f"Cache directories created or verified: {CACHE_DIR}, {UNITS_DIR}, {UNITPICS_DIR}, {UNITPICS_WEBP_DIR}, {ICONS_RAW_DIR}, {ICONS_WEBP_DIR}"
    )
    logger.info(f"Static directory for website created or verified: {STATIC_DIR}")


def clean_json_files() -> None:
    """Clean up old JSON files from cache to ensure fresh data."""
    for json_file in JSON_FILES_TO_CACHE:
        file_path = CACHE_DIR / json_file
        if file_path.exists():
            logger.info(f"Removing old cached file: {file_path}")
            file_path.unlink()


def download_file(url: str, save_path: Path) -> None:
    """Downloads a file from a URL to a specified path."""
    logger.info(f"Downloading: {url} to {save_path}")
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(save_path, "wb") as f:
            f.write(response.content)
        logger.info(f"Successfully downloaded: {url}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to download {url}: {e}")
        raise


def clean_cache_directory() -> None:
    """Completely clean the cache directory for a fresh download."""
    logger.info("Cleaning cache directory for update...")
    for filename in os.listdir(CACHE_DIR):
        file_path = os.path.join(CACHE_DIR, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
            logger.debug(f"Removed: {file_path}")
        except Exception as e:
            logger.error(f"Failed to delete {file_path}. Reason: {e}")


def preprocess_lua_content(content: str) -> str:
    """
    Remove everything before the first 'return' and the 'return' keyword itself.
    """
    parts = content.split("return", 1)
    return parts[1].strip() if len(parts) > 1 else content.strip()


def parse_lua_file(file_path: Path) -> Optional[Dict]:
    """
    Parse a Lua file into a Python dictionary using slpp.
    Handles preprocessing to account for typical syntax issues.
    """
    logger.debug(f"Parsing Lua file: {file_path}")
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lua_content = f.read()

        lua_content = preprocess_lua_content(lua_content)
        parsed_data = slpp.decode(lua_content)
        logger.debug(f"Successfully parsed: {file_path}")
        return parsed_data
    except Exception as e:
        logger.error(f"Failed to parse {file_path}: {e}")
        return None


def is_tier_folder(folder_name: str) -> bool:
    """Check if a folder name represents a tier (T1, T2, etc)"""
    return folder_name.lower().startswith("t") and folder_name[1:].isdigit()


def format_subtype(subtype: str) -> str:
    """Format a subtype string into a readable format (camelCase to words)"""
    words = []
    current_word = ""
    for char in subtype:
        if char.isupper() and current_word:
            words.append(current_word)
            current_word = char
        else:
            current_word += char
    if current_word:
        words.append(current_word)

    return " ".join(words)


# =====================
# IMAGE CONVERSION FUNCTION
# =====================


def convert_dds_to_webp(source_dir: Path, target_dir: Path) -> None:
    """
    Converts all DDS images in source_dir (and its subdirectories) to WebP format
    and saves them in target_dir, maintaining the folder structure.
    """
    logger.info(f"Scanning for DDS files in {source_dir}...")
    dds_file_paths = list(source_dir.rglob("*.dds"))

    if not dds_file_paths:
        logger.info(f"No DDS files found in {source_dir}.")
        return

    logger.info(
        f"Found {len(dds_file_paths)} DDS files. Starting conversion to WebP in {target_dir}."
    )
    dds_files_converted = 0
    dds_files_failed = 0

    for dds_file_path in tqdm(
        dds_file_paths, desc="Converting DDS to WebP", unit="file"
    ):
        try:
            # Create corresponding subdirectory structure in target_dir
            relative_path = dds_file_path.relative_to(source_dir)
            webp_file_dir = target_dir / relative_path.parent
            webp_file_dir.mkdir(parents=True, exist_ok=True)

            # Define WebP filename
            webp_file_name = relative_path.stem + ".webp"
            webp_file_path = webp_file_dir / webp_file_name

            # Open DDS and save as WebP
            with Image.open(dds_file_path) as img:
                # Ensure image is in RGBA format before saving to WebP to handle transparency
                if img.mode != "RGBA":
                    img = img.convert("RGBA")
                img.save(webp_file_path, "WEBP", quality=80)  # quality can be adjusted
            logger.debug(f"Successfully converted: {dds_file_path} -> {webp_file_path}")
            dds_files_converted += 1
        except UnidentifiedImageError:
            logger.error(
                f"Failed to identify (or unsupported DDS format) {dds_file_path}. Skipping."
            )
            dds_files_failed += 1
        except Exception as e:
            logger.error(f"Failed to convert {dds_file_path}: {e}")
            dds_files_failed += 1

    logger.info(
        f"DDS to WebP conversion complete. Converted: {dds_files_converted}, Failed: {dds_files_failed}"
    )


def convert_png_to_webp(source_dir: Path, target_dir: Path) -> None:
    """
    Converts all PNG images in source_dir (and its subdirectories) to WebP format
    and saves them in target_dir, maintaining the folder structure.
    """
    logger.info(f"Scanning for PNG files in {source_dir}...")
    png_file_paths = list(source_dir.rglob("*.png"))

    if not png_file_paths:
        logger.info(f"No PNG files found in {source_dir}.")
        return

    logger.info(
        f"Found {len(png_file_paths)} PNG files. Starting conversion to WebP in {target_dir}."
    )
    png_files_converted = 0
    png_files_failed = 0

    for png_file_path in tqdm(
        png_file_paths, desc="Converting PNG to WebP", unit="file"
    ):
        try:
            # Create corresponding subdirectory structure in target_dir
            relative_path = png_file_path.relative_to(source_dir)
            webp_file_dir = target_dir / relative_path.parent
            webp_file_dir.mkdir(parents=True, exist_ok=True)

            # Define WebP filename
            webp_file_name = relative_path.stem + ".webp"
            webp_file_path = webp_file_dir / webp_file_name

            # Open PNG and save as WebP
            with Image.open(png_file_path) as img:
                # Ensure image is in RGBA format before saving to WebP to handle transparency
                if img.mode != "RGBA":
                    img = img.convert("RGBA")
                img.save(webp_file_path, "WEBP", quality=80)  # quality can be adjusted
            logger.debug(f"Successfully converted: {png_file_path} -> {webp_file_path}")
            png_files_converted += 1
        except UnidentifiedImageError:
            logger.error(
                f"Failed to identify (or unsupported PNG format) {png_file_path}. Skipping."
            )
            png_files_failed += 1
        except Exception as e:
            logger.error(f"Failed to convert {png_file_path}: {e}")
            png_files_failed += 1

    logger.info(
        f"PNG to WebP conversion complete. Converted: {png_files_converted}, Failed: {png_files_failed}"
    )


# =====================
# DATA PARSING FUNCTIONS
# =====================


def parse_units_folder(folder: Path, path: List[str] = []) -> Dict[str, Dict]:
    """
    Recursively parses the units folder to extract unit data.
    Returns a dictionary with all unit data.
    """
    global units_data, units_by_faction, units_by_type, units_by_tech, units_by_faction_type_tech
    global factions_list, types_with_subtypes

    for item in folder.iterdir():
        item: Path = item
        if item.is_dir():
            logger.debug(
                f"Entering directory: {item.stem}, current path: {path + [item.stem]}"
            )
            parse_units_folder(item, path + [item.stem])
        elif item.suffix == ".lua":
            unit_data = parse_lua_file(item)
            if unit_data:
                # Default values
                faction = "other"
                unit_type = "other"
                unit_subtype = "none"
                tech_level = 1

                # Determine faction and type from folder structure
                if len(path) > 0:
                    if path[0].startswith("Arm"):
                        faction = "arm"
                        unit_type = path[0][3:].lower()
                        if len(path) > 1 and not is_tier_folder(path[1]):
                            unit_subtype = format_subtype(path[1])
                    elif path[0].startswith("Cor"):
                        faction = "cor"
                        unit_type = path[0][3:].lower()
                        if len(path) > 1 and not is_tier_folder(path[1]):
                            unit_subtype = format_subtype(path[1])

                # Extract tech level if available
                if (
                    isinstance(unit_data, dict)
                    and item.stem in unit_data
                    and "customparams" in unit_data[item.stem]
                    and "techlevel" in unit_data[item.stem]["customparams"]
                ):
                    tech_level = unit_data[item.stem]["customparams"]["techlevel"]

                # Log unit info
                if faction != "other":
                    logger.info(
                        f"Unit: {item.stem.ljust(20)} | "
                        f"Faction: {faction.ljust(10)} | "
                        f"Type: {unit_type.ljust(10)} | "
                        f"Subtype: {unit_subtype.ljust(15)} | "
                        f"Tech: T{str(tech_level)}"
                    )

                # Create unit info object
                unit_info = {
                    "name": item.stem,
                    "faction": faction,
                    "type": unit_type,
                    "subtype": unit_subtype,
                    "tech_level": tech_level,
                    "path": path + [item.stem],
                    "data": unit_data,
                }

                # Store in main data dictionary
                units_data[item.stem] = unit_info

                # Create a reference object without the full data
                unit_ref = {"name": item.stem}

                # Update collection structures

                # Add to factions list
                if faction != "other":
                    factions_list.add(faction)

                # Add to types with subtypes structure
                if unit_type != "other":
                    if unit_type not in types_with_subtypes:
                        types_with_subtypes[unit_type] = set()
                    if unit_subtype != "none":
                        types_with_subtypes[unit_type].add(unit_subtype)

                # Add to faction dictionary
                if faction not in units_by_faction:
                    units_by_faction[faction] = []
                units_by_faction[faction].append(unit_ref)

                # Add to type dictionary with subtypes
                if unit_type not in units_by_type:
                    units_by_type[unit_type] = {}
                    if unit_subtype == "none":
                        units_by_type[unit_type] = []

                if isinstance(units_by_type[unit_type], dict):
                    if unit_subtype not in units_by_type[unit_type]:
                        units_by_type[unit_type][unit_subtype] = []
                    units_by_type[unit_type][unit_subtype].append(unit_ref)
                else:
                    units_by_type[unit_type].append(unit_ref)

                # Add to tech level dictionary
                if tech_level not in units_by_tech:
                    units_by_tech[tech_level] = []
                units_by_tech[tech_level].append(unit_ref)

                # Add to faction/type/tech dictionary
                if faction not in units_by_faction_type_tech:
                    units_by_faction_type_tech[faction] = {}
                if unit_type not in units_by_faction_type_tech[faction]:
                    units_by_faction_type_tech[faction][unit_type] = {}
                if unit_subtype not in units_by_faction_type_tech[faction][unit_type]:
                    units_by_faction_type_tech[faction][unit_type][unit_subtype] = {}
                if (
                    tech_level
                    not in units_by_faction_type_tech[faction][unit_type][unit_subtype]
                ):
                    units_by_faction_type_tech[faction][unit_type][unit_subtype][
                        tech_level
                    ] = []
                units_by_faction_type_tech[faction][unit_type][unit_subtype][
                    tech_level
                ].append(unit_ref)

    return units_data


def analyze_unit_data_structure(units_data: Dict) -> Dict[str, List[str]]:
    """
    Analyze the structure of units data and list all possible fields.
    Returns a dictionary with categorized fields.
    """
    structure = {
        "root_level": set(),  # Fields at the root level of each unit
        "data_level": set(),  # Fields inside the data[unit_name] object
        "customparams": set(),  # Fields inside customparams
        "sfxtypes": set(),  # Fields inside sfxtypes
        "sounds": set(),  # Fields inside sounds
    }

    for unit_name, unit in units_data.items():
        # Analyze root level fields
        structure["root_level"].update(unit.keys())

        # Analyze data level fields
        if "data" in unit and unit_name in unit["data"]:
            unit_data_val = unit["data"][unit_name]  # Renamed to avoid conflict

            if type(unit_data_val) is not dict:
                continue

            structure["data_level"].update(unit_data_val.keys())

            # Analyze customparams
            if "customparams" in unit_data_val:
                structure["customparams"].update(unit_data_val["customparams"].keys())

            # Analyze sfxtypes
            if "sfxtypes" in unit_data_val:
                structure["sfxtypes"].update(unit_data_val["sfxtypes"].keys())

            # Analyze sounds
            if "sounds" in unit_data_val:
                structure["sounds"].update(unit_data_val["sounds"].keys())

    # Convert sets to sorted lists for better readability
    return {k: sorted(str(x) for x in v) for k, v in structure.items()}


def extract_all_keywords(units_data: Dict) -> List[str]:
    """
    Extract all unique keywords from the JSON data that could be stats,
    combat attributes, or resources for LLM formatting.
    """
    all_keywords = set()

    # Process each unit
    for unit_name, unit in units_data.items():
        # Skip non-dict items if any
        if not isinstance(unit, dict) or "data" not in unit:
            continue

        # Extract unit data
        if unit_name in unit["data"]:
            unit_data_val = unit["data"][unit_name]  # Renamed to avoid conflict

            if type(unit_data_val) is not dict:
                continue

            # Add all top-level keys
            all_keywords.update(str(key) for key in unit_data_val.keys())

            # Add all customparams keys
            if "customparams" in unit_data_val and isinstance(
                unit_data_val["customparams"], dict
            ):
                all_keywords.update(
                    str(key) for key in unit_data_val["customparams"].keys()
                )

            # Add weapon keys
            if "weapons" in unit_data_val and isinstance(
                unit_data_val["weapons"], dict
            ):
                for weapon_key, weapon_data in unit_data_val["weapons"].items():
                    if isinstance(weapon_data, dict):
                        all_keywords.update(str(key) for key in weapon_data.keys())

            # Add weapondefs keys if available
            if "weapondefs" in unit_data_val and isinstance(
                unit_data_val["weapondefs"], dict
            ):
                for weapon_key, weapon_data in unit_data_val["weapondefs"].items():
                    if isinstance(weapon_data, dict):
                        all_keywords.update(str(key) for key in weapon_data.keys())

            # Check for any additional nested dictionaries that might contain stats
            for key, value in unit_data_val.items():
                if isinstance(value, dict):
                    all_keywords.update(str(k) for k in value.keys())

    # Add some common calculated terms that might not appear directly in the data
    calculated_terms = {
        "dps",
        "damage_per_cost",
        "range_min",
        "range_max",
        "reload_time",
        "fire_rate",
        "burst_length",
        "salvo_size",
        "shield_power",
        "shield_radius",
        "shield_rate",
        "shield_recharge",
        "armor_class",
        "armor_type",
        "damage_type",
        "weapon_type",
        "impulse_factor",
        "collide_friendly",
    }
    all_keywords.update(calculated_terms)

    # Convert any non-string values to strings and sort
    sorted_keywords = sorted(str(keyword) for keyword in all_keywords)

    return sorted_keywords


def generate_llm_prompt(keywords: List[str]) -> Path:
    """
    Generate a prompt for an LLM to create a mapping from raw keywords to human-readable display names.
    Returns the path to the generated prompt file.
    """
    prompt = [
        "# Unit Statistics Keywords Formatting Task",
        "",
        "I need you to create a mapping from the raw property names used in our game data to human-readable display names for our website interface.",
        "",
        "## Instructions:",
        "1. For each keyword in the list below, provide:",
        "   - The original property name as the key",
        "   - A human-readable, well-formatted display name as the value",
        "",
        "2. Format guidelines:",
        "   - Convert snake_case and camelCase to Title Case",
        "   - Use proper spacing (e.g., 'seismicsignature' → 'Seismic Signature')",
        "   - Use proper capitalization for acronyms (e.g., 'dps' → 'DPS')",
        "   - Ensure consistency in terminology",
        "",
        "3. Output format:",
        "Return a JavaScript object (not a TypeScript enum) where each key is the original property name and each value is the display name.",
        "",
        "## Example:",
        "```javascript",
        "export const propertyToDisplayName = {",
        '  "maxdamage": "Max Health",',
        '  "firerate": "Fire Rate",',
        '  "dps": "DPS",',
        '  "seismicsignature": "Seismic Signature",',
        '  "buildcostenergy": "Energy Cost",',
        '  "buildcostmetal": "Metal Cost"' "};",
        "```",
        "",
        "## Keywords to format:",
        "",
    ]

    # Add all keywords to the prompt
    for keyword in sorted(keywords):
        prompt.append(f"- {keyword}")

    prompt.extend(
        [
            "",
            "Please provide the complete JavaScript object with all keywords mapped to their display names.",
            "This will be used directly in our website to show user-friendly labels for all unit statistics.",
        ]
    )

    # Write to file with UTF-8 encoding
    prompt_path = CACHE_DIR / "llm_prompt.txt"
    with open(prompt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(prompt))
    logger.info(f"LLM prompt saved to: {prompt_path}")

    return prompt_path


def save_keywords_to_files(keywords: List[str]) -> None:
    """Save keywords to both JSON and txt formats for different uses."""
    # Save to JSON file
    keywords_path = CACHE_DIR / "all_keywords.json"
    with open(keywords_path, "w", encoding="utf-8") as f:
        json.dump(keywords, f, indent=4)
    logger.info(f"All unique keywords saved to: {keywords_path}")

    # Also save as plain text for easier copying to LLM
    keywords_txt_path = CACHE_DIR / "all_keywords.txt"
    with open(keywords_txt_path, "w", encoding="utf-8") as f:
        for keyword in keywords:
            f.write(f"{keyword}\n")
    logger.info(f"All unique keywords (plain text) saved to: {keywords_txt_path}")


def parse_icontypes_lua(file_path: Path) -> Optional[Dict[str, str]]:
    """Parse icontypes.lua to extract unit icon mappings."""
    logger.info(f"Parsing icon types Lua file: {file_path}")
    icon_map = {}
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lua_content = f.read()

        # Preprocess to make it valid for slpp (remove 'local icontypes = ' and trailing comma if any)
        # More robust: find the first '{' and the last '}'
        start_index = lua_content.find("{")
        end_index = lua_content.rfind("}")
        if start_index == -1 or end_index == -1:
            logger.error(f"Could not find table content in {file_path}")
            return None

        lua_table_content = lua_content[start_index : end_index + 1]

        parsed_data = slpp.decode(lua_table_content)

        for unit_name, data in parsed_data.items():
            if isinstance(data, dict) and "bitmap" in data:
                original_bitmap_path = data["bitmap"]  # e.g., "icons/some_icon.png"
                # Transform to new webp path, e.g., "unit_icons_webp/some_icon.webp"
                if original_bitmap_path.startswith("icons/"):
                    webp_filename = Path(original_bitmap_path).stem + ".webp"
                    # Correctly join parts for the new path
                    new_path_parts = (
                        [ICONS_WEBP_DIR.name]
                        + list(Path(original_bitmap_path).parent.parts[1:])
                        + [webp_filename]
                    )
                    icon_map[unit_name] = "/".join(new_path_parts)
                else:
                    logger.warning(
                        f"Unexpected bitmap path format for {unit_name}: {original_bitmap_path}"
                    )
            else:
                logger.warning(
                    f"Skipping entry for {unit_name} due to missing bitmap or incorrect format: {data}"
                )

        logger.info(
            f"Successfully parsed {len(icon_map)} icon mappings from: {file_path}"
        )
        return icon_map
    except Exception as e:
        logger.error(f"Failed to parse {file_path}: {e}")
        return None


def save_results_to_json_files() -> None:
    """Save all the collected data to their respective JSON files in the cache."""
    global factions_list, types_with_subtypes
    global unit_icon_map  # Added global for unit_icon_map
    factions_list_sorted = sorted(list(factions_list))
    types_with_subtypes_sorted = {
        type_name: sorted(list(subtypes))
        for type_name, subtypes in types_with_subtypes.items()
    }

    # Define paths to cache
    file_data_map = {
        "units_data.json": units_data,
        "unit_names_details.json": unit_names_details,
        "units_by_faction.json": units_by_faction,
        "units_by_type.json": units_by_type,
        "units_by_tech.json": units_by_tech,
        "units_by_faction_type_tech.json": units_by_faction_type_tech,
        "factions_list.json": factions_list_sorted,
        "types_with_subtypes.json": types_with_subtypes_sorted,
        "unit_icon_map.json": unit_icon_map,  # Added unit_icon_map
    }

    for filename, data_to_save in file_data_map.items():  # Renamed data to data_to_save
        if (
            filename in JSON_FILES_TO_CACHE
        ):  # Ensure we only save files meant for caching initially
            path = CACHE_DIR / filename
            with open(path, "w", encoding="utf-8") as f:
                json.dump(data_to_save, f, indent=4)
            logger.info(f"Data for {filename} saved to cache: {path}")


def print_structure_summary(structure):
    """Print a nicely formatted summary of the data structure."""
    print("\n" + "=" * 60)
    print(" UNIT DATA STRUCTURE SUMMARY ")
    print("=" * 60)

    for section, fields in structure.items():
        print(f"\n{section.upper()}:")
        print("-" * 40)

        # Print in multiple columns if there are many fields
        if len(fields) > 20:
            # Calculate columns and rows
            col_width = 25
            num_cols = 3
            fields_per_col = (len(fields) + num_cols - 1) // num_cols

            for i in range(0, fields_per_col):
                row = []
                for col in range(num_cols):
                    idx = i + col * fields_per_col
                    if idx < len(fields):
                        row.append(fields[idx].ljust(col_width))
                    else:
                        row.append("".ljust(col_width))
                print("  " + "".join(row))
        else:
            # Single column for fewer fields
            for field in fields:
                print(f"  - {field}")


# =====================
# FILE MOVEMENT FUNCTION
# =====================


def move_generated_files_to_static(
    files_to_copy: List[str], folders_to_copy_names: List[str]
) -> None:
    """Deletes specified files and folders from the static directory if they exist,
    then copies them from the cache to the static directory."""
    logger.info(
        f"Refreshing files and folders in static directory: {STATIC_DIR} from cache."
    )
    copied_files_count = 0
    copied_folders_count = 0

    # Delete existing individual JSON files from static directory
    for filename in files_to_copy:
        destination_path = STATIC_DIR / filename
        if destination_path.exists():
            try:
                destination_path.unlink()
                logger.info(f"Deleted existing file from static: {destination_path}")
            except Exception as e:
                logger.error(
                    f"Failed to delete existing file {destination_path} from static: {e}"
                )

    # Delete existing specified folders from static directory
    for folder_name in folders_to_copy_names:
        destination_folder_path = STATIC_DIR / folder_name
        if destination_folder_path.exists() and destination_folder_path.is_dir():
            try:
                shutil.rmtree(destination_folder_path)
                logger.info(
                    f"Deleted existing folder from static: {destination_folder_path}"
                )
            except Exception as e:
                logger.error(
                    f"Failed to delete existing folder {destination_folder_path} from static: {e}"
                )

    # Copy individual JSON files from cache to static
    for filename in files_to_copy:
        source_path = CACHE_DIR / filename
        destination_path = STATIC_DIR / filename
        try:
            if source_path.exists():
                shutil.copy2(str(source_path), str(destination_path))
                logger.info(f"Copied file: {source_path} -> {destination_path}")
                copied_files_count += 1
            else:
                logger.warning(f"File not found in cache, cannot copy: {source_path}")
        except Exception as e:
            logger.error(
                f"Failed to copy file {source_path} to {destination_path}: {e}"
            )

    # Copy the specified folders from cache to static
    for folder_name in folders_to_copy_names:
        source_folder_path = CACHE_DIR / folder_name
        final_destination_folder_path = STATIC_DIR / folder_name
        try:
            if source_folder_path.exists() and source_folder_path.is_dir():
                shutil.copytree(
                    str(source_folder_path), str(final_destination_folder_path)
                )
                logger.info(
                    f"Copied folder: {source_folder_path} -> {final_destination_folder_path}"
                )
                copied_folders_count += 1
            else:
                logger.warning(
                    f"Folder not found in cache or is not a directory, cannot copy: {source_folder_path}"
                )
        except Exception as e:
            logger.error(
                f"Failed to copy folder {source_folder_path} to {final_destination_folder_path}: {e}"
            )

    logger.info(
        f"File and folder copying to static directory complete. Files copied: {copied_files_count}. Folders copied: {copied_folders_count}"
    )


# =====================
# MAIN EXECUTION FLOW
# =====================


def main():
    global units_data, unit_names_details, units_by_faction, units_by_type
    global units_by_tech, units_by_faction_type_tech, factions_list, types_with_subtypes
    global unit_icon_map  # Added global for unit_icon_map

    # Parse command-line arguments
    parser = argparse.ArgumentParser(
        description="Download and parse Beyond All Reason unit files."
    )
    parser.add_argument(
        "--update-files",
        action="store_true",
        help="Force update and redownload all files.",
    )
    parser.add_argument(
        "--verbose", action="store_true", help="Enable verbose logging."
    )
    args = parser.parse_args()

    # Set logging level based on verbosity flag
    if args.verbose:
        logger.setLevel(logging.DEBUG)
        logger.debug("Verbose logging enabled")

    print("\n" + "=" * 60)
    print(" BEYOND ALL REASON UNIT DATA PARSER ")
    print("=" * 60)

    # Initialize empty data structures
    units_data = {}
    unit_names_details = {}
    units_by_faction = {}
    units_by_type = {}
    units_by_tech = {}
    units_by_faction_type_tech = {}
    factions_list = set()
    types_with_subtypes = {}
    unit_icon_map = {}  # Initialize unit_icon_map

    # Step 1: Ensure directories exist and clean files if needed
    ensure_directories_exist()

    if args.update_files:
        clean_cache_directory()  # This also cleans UNITPICS_DIR and UNITPICS_WEBP_DIR if they exist under CACHE_DIR
    # Always clean JSON files from cache that are defined in JSON_FILES_TO_CACHE
    clean_json_files()

    # Step 2: Download unit names/details JSON
    names_details_path = (
        CACHE_DIR / "units.json"
    )  # This is a temporary name, will be unit_names_details.json after loading
    if (
        args.update_files or not (CACHE_DIR / "unit_names_details.json").exists()
    ):  # Check for the final named file
        download_file(
            NAMES_DETAILS_URL, names_details_path
        )  # Download to temporary name
    else:
        logger.info(
            f"Using cached unit names details from: {CACHE_DIR / 'unit_names_details.json'}"
        )

    # Step 2b: Download icontypes.lua for icon mapping
    icontypes_lua_path = CACHE_DIR / "icontypes.lua"
    if args.update_files or not icontypes_lua_path.exists():
        download_file(ICONTYPES_LUA_URL, icontypes_lua_path)
    else:
        logger.info(f"Using cached icontypes.lua from: {icontypes_lua_path}")

    # Initialize downloader early if needed for multiple downloads
    if (
        args.update_files
        or not UNITS_DIR.exists()
        or not any(UNITS_DIR.iterdir())
        or not UNITPICS_DIR.exists()
        or not any(UNITPICS_DIR.iterdir())
        or not ICONS_RAW_DIR.exists()
        or not any(ICONS_RAW_DIR.iterdir())
    ):
        downloader = Downloader(BAR_REPO_URL, "master")

    # Step 3: Download the units folder
    if args.update_files or not UNITS_DIR.exists() or not any(UNITS_DIR.iterdir()):
        logger.info(f"Downloading units folder from {BAR_REPO_URL}")
        if "downloader" not in locals():
            downloader = Downloader(
                BAR_REPO_URL, "master"
            )  # Ensure downloader is initialized
        downloader.download(CACHE_DIR, UNITS_FOLDER_PATH, True)
        logger.info(f"Units folder downloaded to: {UNITS_DIR}")
    else:
        logger.info(f"Using cached units folder: {UNITS_DIR}")

    # Step 3b: Download the unitpics folder
    if (
        args.update_files
        or not UNITPICS_DIR.exists()
        or not any(UNITPICS_DIR.iterdir())
    ):
        logger.info(f"Downloading unitpics folder from {BAR_REPO_URL}")
        if "downloader" not in locals():
            downloader = Downloader(BAR_REPO_URL, "master")
        downloader.download(CACHE_DIR, UNITPICS_FOLDER_PATH, True)
        logger.info(f"Unitpics folder downloaded to: {UNITPICS_DIR}")
        # Convert DDS images immediately after download if updating/downloading fresh
        logger.info(
            f"Converting DDS images in {UNITPICS_DIR} to WebP format in {UNITPICS_WEBP_DIR}"
        )
        convert_dds_to_webp(UNITPICS_DIR, UNITPICS_WEBP_DIR)
    else:
        logger.info(f"Using cached unitpics folder: {UNITPICS_DIR}")
        # Optionally, convert even if using cache, if webp dir is empty or needs update
        if not UNITPICS_WEBP_DIR.exists() or not any(UNITPICS_WEBP_DIR.iterdir()):
            logger.info(
                f"Cached unitpics found, but WebP directory is empty or missing. Converting now."
            )
            convert_dds_to_webp(UNITPICS_DIR, UNITPICS_WEBP_DIR)
        else:
            logger.info(f"Using cached WebP images from: {UNITPICS_WEBP_DIR}")

    # Step 3c: Download the icons folder
    if (
        args.update_files
        or not ICONS_RAW_DIR.exists()
        or not any(ICONS_RAW_DIR.iterdir())
    ):
        logger.info(f"Downloading icons folder from {BAR_REPO_URL}")
        if "downloader" not in locals():
            downloader = Downloader(BAR_REPO_URL, "master")
        downloader.download(CACHE_DIR, ICONS_FOLDER_PATH, True)
        logger.info(f"Icons folder downloaded to: {ICONS_RAW_DIR}")
        # Convert PNG icons immediately after download
        logger.info(
            f"Converting PNG images in {ICONS_RAW_DIR} to WebP format in {ICONS_WEBP_DIR}"
        )
        convert_png_to_webp(ICONS_RAW_DIR, ICONS_WEBP_DIR)
    else:
        logger.info(f"Using cached icons folder: {ICONS_RAW_DIR}")
        if not ICONS_WEBP_DIR.exists() or not any(ICONS_WEBP_DIR.iterdir()):
            logger.info(
                f"Cached icons found, but WebP directory for icons is empty or missing. Converting now."
            )
            convert_png_to_webp(ICONS_RAW_DIR, ICONS_WEBP_DIR)
        else:
            logger.info(f"Using cached WebP icons from: {ICONS_WEBP_DIR}")

    # Step 4: Load names and details JSON
    if (CACHE_DIR / "unit_names_details.json").exists():
        with open(CACHE_DIR / "unit_names_details.json", "r", encoding="utf-8") as f:
            unit_names_details = json.load(f)
        logger.info(
            f"Loaded unit names and details from: {CACHE_DIR / 'unit_names_details.json'}"
        )
    elif (
        names_details_path.exists()
    ):  # Fallback if it was just downloaded as units.json
        with open(names_details_path, "r", encoding="utf-8") as f:
            unit_names_details = json.load(f)
        logger.info(
            f"Loaded unit names and details from temporary download: {names_details_path}"
        )
        # This data will be saved as unit_names_details.json by save_results_to_json_files
    else:
        logger.error("Unit names details JSON not found after download/cache check.")
        # Handle error or exit

    # Step 4b: Parse icontypes.lua
    if icontypes_lua_path.exists():
        unit_icon_map = parse_icontypes_lua(icontypes_lua_path)
        if not unit_icon_map:  # If parsing failed, unit_icon_map might be None or empty
            unit_icon_map = {}  # Ensure it's a dict for save_results_to_json_files
            logger.warning("Failed to parse icontypes.lua, icon map will be empty.")
    else:
        logger.error("icontypes.lua not found, cannot create icon map.")
        unit_icon_map = {}  # Ensure it's a dict

    # Step 5: Parse units folder
    print("\n" + "=" * 60)
    print(" PARSING UNIT DATA ")
    print("=" * 60)
    logger.info(f"Starting parsing of units folder: {UNITS_DIR}")
    parse_units_folder(UNITS_DIR)
    logger.info(f"Finished parsing units folder. Found {len(units_data)} units.")

    # Step 6: Save all results to JSON files (in cache)
    print("\n" + "=" * 60)
    print(" SAVING RESULTS ")
    print("=" * 60)
    save_results_to_json_files()

    # Step 7: Analyze the structure of units data
    structure = analyze_unit_data_structure(units_data)
    print_structure_summary(structure)

    # Step 8: Extract all keywords
    print("\n" + "=" * 60)
    print(" EXTRACTING KEYWORDS FOR LLM FORMATTING ")
    print("=" * 60)
    logger.info("Extracting all unique keywords for display name mapping...")
    all_keywords = extract_all_keywords(units_data)
    logger.info(f"Found {len(all_keywords)} unique keywords")

    # Step 9: Save keywords to files (all_keywords.json and all_keywords.txt in cache)
    save_keywords_to_files(all_keywords)

    # Step 10: Generate LLM prompt (llm_prompt.txt in cache)
    prompt_path = generate_llm_prompt(all_keywords)

    print("\n" + "=" * 60)
    print(" DATA PROCESSING AND IMAGE CONVERSION COMPLETE ")
    if UNITPICS_WEBP_DIR.exists():
        print(f"WebP unit pictures generated in: {UNITPICS_WEBP_DIR}")
    if ICONS_WEBP_DIR.exists():
        print(f"WebP unit icons generated in: {ICONS_WEBP_DIR}")
    print(f"Unit icon map generated: {CACHE_DIR / 'unit_icon_map.json'}")
    print(f"LLM prompt saved to: {CACHE_DIR / 'llm_prompt.txt'}")
    print("=" * 60)

    # Step 11: Move necessary files to src/static
    move_generated_files_to_static(FILES_TO_MOVE_TO_STATIC, FOLDERS_TO_MOVE_TO_STATIC)

    print("\n" + "=" * 60)
    print(" SCRIPT COMPLETE ")
    print(f"Essential files moved to: {STATIC_DIR}")
    print("Next steps for LLM prompt (if generated):")
    print(
        f"1. Submit the contents of {CACHE_DIR / 'llm_prompt.txt'} to ChatGPT or similar LLM"
    )
    print("2. Have the LLM convert raw property names to user-friendly display names")
    print("3. Add the resulting JavaScript object in src/lib/keywords_map.js")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    main()
