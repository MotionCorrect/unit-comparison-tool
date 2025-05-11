# Beyond All Reason - Unit Comparison Tool

This web application allows users to browse, compare, and explore unit statistics from the game [Beyond All Reason](https://www.beyondallreason.info/) (BAR). It fetches data directly from the BAR GitHub repository, processes it, and presents it through an interactive SvelteKit interface.

## Features

- **Unit Browser:** Filter and sort units based on faction, type, tech level, and various stats. View key stats in a table format.
- **Unit Comparison:** Select multiple units for a side-by-side comparison of all their properties, grouped by category (General, Stats, Movement, Combat, Resources). Expandable sections for complex data like weapons and build options.
- **Unit Detail Page:** View comprehensive details for a single unit, including all its stats, weapon breakdowns, build options, and custom parameters.
- **Unit Explorer:** An interactive force-directed graph (using D3.js) visualizing the relationships between factions, unit types, subtypes, tech levels, and individual units. Hover for details, click units to navigate to their detail page.
- **Image Previews:** See unit build pictures when hovering over unit names/nodes in the Explorer and Compare views, and statically displayed on the Unit Detail page.
- **Data Parsing:** Includes a Python script (`units-parser/main.py`) to:
  - Download the latest unit data (Lua files, unit names JSON) from the BAR GitHub repository.
  - Download unit pictures (`.dds` files).
  - Convert `.dds` images to `.webp` format for web use (preserving transparency).
  - Parse Lua files and structure the data into various JSON files optimized for the frontend.
  - Copy the processed JSON data and WebP images to the `static` directory for use by the SvelteKit app.

## Technology Stack

- **Frontend:** SvelteKit
- **Styling:** Tailwind CSS
- **Data Visualization:** D3.js (for the Unit Explorer graph)
- **Data Parsing:** Python 3
  - Libraries: `requests`, `slpp`, `Pillow`, `tqdm`, `python-lupa` (via requirements.txt)
- **Language:** JavaScript, Python

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd unit-comparison-tool
    ```

2.  **Install Frontend Dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up Python Environment (for Parser):**
    - Ensure you have Python 3 installed.
    - It's recommended to use a virtual environment:
      ```bash
      cd units-parser
      python -m venv .venv
      # Activate the virtual environment
      # Windows (Command Prompt):
      # .venv\Scripts\activate.bat
      # Windows (PowerShell):
      # .venv\Scripts\Activate.ps1
      # macOS/Linux:
      # source .venv/bin/activate
      ```
    - Install Python dependencies:
      ```bash
      pip install -r requirements.txt
      ```

## Running the Application

1.  **Run the Data Parser:**

    - Navigate to the parser directory (if not already there): `cd units-parser`
    - (Ensure your Python virtual environment is activated)
    - Run the script. This will download game data/images, parse Lua files, convert images, and place necessary JSON/WebP files into the `static` directory.
      ```bash
      python main.py
      ```
    - Use the `--update-files` flag to force a redownload of all data from GitHub:
      ```bash
      python main.py --update-files
      ```
    - Use `--verbose` for detailed logging during parsing.

2.  **Run the SvelteKit Development Server:**
    - Navigate back to the project root directory: `cd ..`
    - Start the dev server:
      ```bash
      pnpm run dev
      ```
    - Open your browser to `http://localhost:5173` (or the address provided).

## Building for Production

1.  Ensure the parser has been run to populate the `static` directory.
2.  Build the SvelteKit application:
    ```bash
    # Windows:
    set MANUAL_BUILD=true && pnpm run build
    # macOS/Linux:
    MANUAL_BUILD=true pnpm run build
    ```
3.  You can preview the production build using:
    ```bash
    pnpm run preview
    ```
    _(Note: The default build uses `adapter-auto`. For specific deployment targets like static hosting, you might need to configure `adapter-static` in `svelte.config.js` and rebuild.)_

## Data Source

Unit data (Lua files, `units.json`) and images (`unitpics`) are sourced directly from the official [Beyond All Reason GitHub repository](https://github.com/beyond-all-reason/Beyond-All-Reason). The Python parser handles downloading, processing, and structuring this data for the application.
