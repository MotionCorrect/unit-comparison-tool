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


# Function to download a file
def download_file(url, save_path):
    print(f"Downloading: {url}")
    response = requests.get(url)
    response.raise_for_status()
    with open(save_path, "wb") as f:
        f.write(response.content)


# Command-line argument parsing
parser = argparse.ArgumentParser(
    description="Download and parse Beyond All Reason unit files."
)
parser.add_argument(
    "--update-files", action="store_true", help="Force update and redownload all files."
)
args = parser.parse_args()

if args.update_files:
    for filename in os.listdir(CACHE_DIR):
        file_path = os.path.join(CACHE_DIR, filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print("Failed to delete %s. Reason: %s" % (file_path, e))

# Download units.json
names_details_path = CACHE_DIR / "units.json"
if args.update_files or not names_details_path.exists():
    download_file(NAMES_DETAILS_URL, names_details_path)
else:
    print(f"Using cached file: {names_details_path}")

# Download the units folder
if args.update_files or len(os.listdir(UNITS_DIR)) == 0:
    downloader = Downloader(BAR_REPO_URL, "master")
    downloader.download(CACHE_DIR, UNITS_FOLDER_PATH, True)
else:
    print(f"Using cached folder: {UNITS_DIR}")


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
    Parse a Lua file into a Python dictionary using lupa.LuaRuntime.
    Handles preprocessing to account for typical syntax issues.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        lua_content = f.read()

    try:
        # Preprocess the Lua content
        lua_content = preprocess_lua_content(lua_content)
        # Parse the Lua content
        a = slpp.decode(lua_content)
        # a = lua.eval(lua_content)
        # print(Path(file_path).name[:-4])
        # print(dict(a[Path(file_path).name[:-4]]))
        return a
    except Exception as e:
        print(f"Failed to parse {file_path}: {e}")
        return None


# Collect all units data
units_data = []
unit_names_details = {}

# Load names and details JSON
with open(names_details_path, "r") as f:
    unit_names_details = json.load(f)


# Recursive function to parse Lua files and build tree
def parse_units_folder(folder, path: list[str] = []):
    for item in folder.iterdir():
        item: Path = item
        if item.is_dir():
            print(path + [item.stem])
            parse_units_folder(item, path + [item.stem])
        elif item.suffix == ".lua":
            unit_data = parse_lua_file(item)
            if unit_data:
                faction = "other"
                unit_type = "other"
                tech_level = 1

                if len(path) > 0 and path[0].startswith("Arm"):
                    faction = "arm"
                    unit_type = path[0][3:].lower()
                elif len(path) > 0 and path[0].startswith("Cor"):
                    faction = "cor"
                    unit_type = path[0][3:].lower()
                # elif path[0] == "Legion":
                #     faction = "leg"
                #     type = path[1].lower()

                # print(item.stem)
                if (
                    type(unit_data) is dict
                    and item.stem in unit_data
                    and "techlevel" in unit_data[item.stem]["customparams"]
                ):
                    tech_level = unit_data[item.stem]["customparams"]["techlevel"]

                if faction is not "other":
                    print(
                        "["
                        + str(item.stem).center(20)
                        + "]   ["
                        + str(faction).center(10)
                        + "]   ["
                        + str(unit_type).center(10)
                        + "]   [T"
                        + str(tech_level).center(10)
                        + "]"
                    )

                units_data.append(
                    {
                        "name": item.stem,
                        "faction": faction,
                        "type": unit_type,
                        "tech_level": tech_level,
                        "path": path + [item.stem],
                        "data": unit_data,
                    }
                )


# Parse the units folder
parse_units_folder(UNITS_DIR)

# Save results
units_data_path = CACHE_DIR / "units_data.json"
unit_names_path = CACHE_DIR / "unit_names_details.json"

with open(units_data_path, "w") as f:
    json.dump(units_data, f, indent=4)

with open(unit_names_path, "w") as f:
    json.dump(unit_names_details, f, indent=4)

print(f"Units data saved to: {units_data_path}")
print(f"Unit names and details saved to: {unit_names_path}")
