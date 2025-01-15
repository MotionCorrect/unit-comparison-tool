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

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Lua parser setup
lua = LuaRuntime(unpack_returned_tuples=True)

# URLs
NAMES_DETAILS_URL = "https://raw.githubusercontent.com/beyond-all-reason/Beyond-All-Reason/master/language/en/units.json"
BAR_REPO_URL = "https://github.com/beyond-all-reason/Beyond-All-Reason"
UNITS_FOLDER_PATH = "units"

# Directories
CACHE_DIR = Path("cache")
UNITS_DIR = CACHE_DIR / "units"

# Ensure cache directories exist
CACHE_DIR.mkdir(exist_ok=True)
UNITS_DIR.mkdir(exist_ok=True)
logging.info(f"Cache directories created or already exist: {CACHE_DIR}, {UNITS_DIR}")

# List of JSON files to clean up before each run
JSON_FILES = [
    "units_data.json",
    "unit_names_details.json",
    "units_by_faction.json",
    "units_by_type.json",
    "units_by_tech.json",
    "units_by_faction_type_tech.json",
    "factions_list.json",
    "types_with_subtypes.json"
]

# Clean up old JSON files
for json_file in JSON_FILES:
    file_path = CACHE_DIR / json_file
    if file_path.exists():
        logging.info(f"Removing old file: {file_path}")
        file_path.unlink()

# Function to download a file
def download_file(url, save_path):
    """Downloads a file from a URL to a specified path."""
    logging.info(f"Downloading: {url} to {save_path}")
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        with open(save_path, "wb") as f:
            f.write(response.content)
        logging.info(f"Successfully downloaded: {url}")
    except requests.exceptions.RequestException as e:
        logging.error(f"Failed to download {url}: {e}")
        raise


# Command-line argument parsing
parser = argparse.ArgumentParser(
    description="Download and parse Beyond All Reason unit files."
)
parser.add_argument(
    "--update-files", action="store_true", help="Force update and redownload all files."
)
args = parser.parse_args()

# Handle --update-files argument
if args.update_files:
    logging.info("Update files flag is set. Cleaning cache directory.")
    for filename in os.listdir(CACHE_DIR):
        file_path = os.path.join(CACHE_DIR, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
            logging.debug(f"Removed: {file_path}")
        except Exception as e:
            logging.error(f"Failed to delete {file_path}. Reason: {e}")
    names_details_path = CACHE_DIR / "units.json"
    if names_details_path.exists():
        logging.info(f"Removing old file: {names_details_path}")
        names_details_path.unlink()

# Download units.json
names_details_path = CACHE_DIR / "units.json"
if args.update_files or not names_details_path.exists():
    download_file(NAMES_DETAILS_URL, names_details_path)
else:
    logging.info(f"Using cached file: {names_details_path}")

# Download the units folder
if args.update_files or len(os.listdir(UNITS_DIR)) == 0:
    logging.info(f"Downloading units folder from {BAR_REPO_URL}")
    downloader = Downloader(BAR_REPO_URL, "master")
    downloader.download(CACHE_DIR, UNITS_FOLDER_PATH, True)
    logging.info(f"Units folder downloaded to: {UNITS_DIR}")
else:
    logging.info(f"Using cached folder: {UNITS_DIR}")


def preprocess_lua_content(content):
    """
    Remove everything before the first 'return' and the 'return' keyword itself.
    """
    # Split the content at the first occurrence of 'return'
    parts = content.split("return", 1)

    # If 'return' exists, return the content after it; otherwise, return the original content
    return parts[1].strip() if len(parts) > 1 else content.strip()


def parse_lua_file(file_path):
    """
    Parse a Lua file into a Python dictionary using slpp.
    Handles preprocessing to account for typical syntax issues.
    """
    logging.debug(f"Parsing Lua file: {file_path}")
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lua_content = f.read()

        # Preprocess the Lua content
        lua_content = preprocess_lua_content(lua_content)
        # Parse the Lua content
        parsed_data = slpp.decode(lua_content)
        logging.debug(f"Successfully parsed: {file_path}")
        return parsed_data
    except Exception as e:
        logging.error(f"Failed to parse {file_path}: {e}")
        return None


# Collect all units data
units_data = {}  # Will store unit data by name
unit_names_details = {}

# Initialize categorized dictionaries
units_by_faction = {}
units_by_type = {}
units_by_tech = {}
units_by_faction_type_tech = {}

# Load names and details JSON
with open(names_details_path, "r") as f:
    unit_names_details = json.load(f)
logging.info(f"Loaded unit names and details from: {names_details_path}")

# Add new dictionaries to store the lists
factions_list = set()
types_with_subtypes = {}

def is_tier_folder(folder_name: str) -> bool:
    """Check if a folder name represents a tier (T1, T2, etc)"""
    return folder_name.lower().startswith('t') and folder_name[1:].isdigit()


def format_subtype(subtype: str) -> str:
    """Format a subtype string into a readable format"""
    # Split camelCase into words
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


# Recursive function to parse Lua files and build tree
def parse_units_folder(folder, path: list[str] = []):
    """Recursively parses the units folder to extract unit data."""
    for item in folder.iterdir():
        item: Path = item
        if item.is_dir():
            logging.debug(f"Entering directory: {item.stem}, current path: {path + [item.stem]}")
            parse_units_folder(item, path + [item.stem])
        elif item.suffix == ".lua":
            unit_data = parse_lua_file(item)
            if unit_data:
                faction = "other"
                unit_type = "other"
                unit_subtype = "none"
                tech_level = 1

                if len(path) > 0:
                    if path[0].startswith("Arm"):
                        faction = "arm"
                        unit_type = path[0][3:].lower()
                        # Check for subtype in subfolder
                        if len(path) > 1 and not is_tier_folder(path[1]):
                            unit_subtype = format_subtype(path[1])
                    elif path[0].startswith("Cor"):
                        faction = "cor"
                        unit_type = path[0][3:].lower()
                        # Check for subtype in subfolder
                        if len(path) > 1 and not is_tier_folder(path[1]):
                            unit_subtype = format_subtype(path[1])
                    # elif path[0] == "Legion":
                    #     faction = "leg"
                    #     type = path[1].lower()

                if (
                    type(unit_data) is dict
                    and item.stem in unit_data
                    and "techlevel" in unit_data[item.stem]["customparams"]
                ):
                    tech_level = unit_data[item.stem]["customparams"]["techlevel"]

                if faction != "other":
                    logging.info(
                        f"[{str(item.stem).center(20)}]   [{str(faction).center(10)}]   [{str(unit_type).center(10)}]   [{str(unit_subtype).center(15)}]   [T{str(tech_level).center(10)}]"
                    )

                unit_info = {
                    "name": item.stem,
                    "faction": faction,
                    "type": unit_type,
                    "subtype": unit_subtype,
                    "tech_level": tech_level,
                    "path": path + [item.stem],
                    "data": unit_data,
                }

                # Store complete unit data in units_data dictionary
                units_data[item.stem] = unit_info

                # Create a reference object without the full data
                unit_ref = {
                    "name": item.stem,
                    # "faction": faction,
                    # "type": unit_type,
                    # "subtype": unit_subtype,
                    # "tech_level": tech_level
                }

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

                # Modify how units are added to units_by_type
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
                if tech_level not in units_by_faction_type_tech[faction][unit_type][unit_subtype]:
                    units_by_faction_type_tech[faction][unit_type][unit_subtype][tech_level] = []
                units_by_faction_type_tech[faction][unit_type][unit_subtype][tech_level].append(unit_ref)


# Parse the units folder
logging.info(f"Starting parsing of units folder: {UNITS_DIR}")
parse_units_folder(UNITS_DIR)
logging.info("Finished parsing units folder.")

# Convert sets to lists for JSON serialization
factions_list = sorted(list(factions_list))
types_with_subtypes = {
    type_name: sorted(list(subtypes))
    for type_name, subtypes in types_with_subtypes.items()
}

# Add new paths for the additional JSON files
factions_list_path = CACHE_DIR / "factions_list.json"
types_with_subtypes_path = CACHE_DIR / "types_with_subtypes.json"

# Save the new JSON files
with open(factions_list_path, "w") as f:
    json.dump(factions_list, f, indent=4)
logging.info(f"Factions list saved to: {factions_list_path}")

with open(types_with_subtypes_path, "w") as f:
    json.dump(types_with_subtypes, f, indent=4)
logging.info(f"Types with subtypes saved to: {types_with_subtypes_path}")

# Save results
units_data_path = CACHE_DIR / "units_data.json"
unit_names_path = CACHE_DIR / "unit_names_details.json"
units_by_faction_path = CACHE_DIR / "units_by_faction.json"
units_by_type_path = CACHE_DIR / "units_by_type.json"
units_by_tech_path = CACHE_DIR / "units_by_tech.json"
units_by_faction_type_tech_path = CACHE_DIR / "units_by_faction_type_tech.json"

with open(units_data_path, "w") as f:
    json.dump(units_data, f, indent=4)
logging.info(f"Units data saved to: {units_data_path}")

with open(unit_names_path, "w") as f:
    json.dump(unit_names_details, f, indent=4)
logging.info(f"Unit names and details saved to: {unit_names_path}")

with open(units_by_faction_path, "w") as f:
    json.dump(units_by_faction, f, indent=4)
logging.info(f"Units by faction saved to: {units_by_faction_path}")

with open(units_by_type_path, "w") as f:
    json.dump(units_by_type, f, indent=4)
logging.info(f"Units by type saved to: {units_by_type_path}")

with open(units_by_tech_path, "w") as f:
    json.dump(units_by_tech, f, indent=4)
logging.info(f"Units by tech level saved to: {units_by_tech_path}")

with open(units_by_faction_type_tech_path, "w") as f:
    json.dump(units_by_faction_type_tech, f, indent=4)
logging.info(f"Units by faction/type/tech saved to: {units_by_faction_type_tech_path}")

logging.info("All data processing and saving complete.")

def analyze_unit_data_structure(units_data):
    """Analyze the structure of units data and list all possible fields."""
    structure = {
        'root_level': set(),  # Fields at the root level of each unit
        'data_level': set(),  # Fields inside the data[unit_name] object
        'customparams': set(),  # Fields inside customparams
        'sfxtypes': set(),     # Fields inside sfxtypes
        'sounds': set(),       # Fields inside sounds
    }
    
    for unit_name, unit in units_data.items():
        # Analyze root level fields
        structure['root_level'].update(unit.keys())
        
        # Analyze data level fields
        if 'data' in unit and unit_name in unit['data']:
            unit_data = unit['data'][unit_name]
            structure['data_level'].update(unit_data.keys())
            
            # Analyze customparams
            if 'customparams' in unit_data:
                structure['customparams'].update(unit_data['customparams'].keys())
            
            # Analyze sfxtypes
            if 'sfxtypes' in unit_data:
                structure['sfxtypes'].update(unit_data['sfxtypes'].keys())
            
            # Analyze sounds
            if 'sounds' in unit_data:
                structure['sounds'].update(unit_data['sounds'].keys())

    # Convert sets to sorted lists for better readability
    return {k: sorted(str(x) for x in v) for k, v in structure.items()}

# Add this after parsing all units
structure = analyze_unit_data_structure(units_data)
print("\nUnit Data Structure:")
for section, fields in structure.items():
    print(f"\n{section.upper()}:")
    for field in fields:
        print(f"  - {field}")
