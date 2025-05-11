# Beyond All Reason - Unit Comparison Tool

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![D3.js](https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)](https://d3js.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

An interactive web application for browsing, comparing, and exploring unit statistics from the game [Beyond All Reason](https://www.beyondallreason.info/) (BAR). The tool fetches data directly from the BAR GitHub repository and presents it through a responsive user interface.

## 📑 Table of Contents

- [Beyond All Reason - Unit Comparison Tool](#beyond-all-reason---unit-comparison-tool)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [📂 Project Structure](#-project-structure)
  - [🏗️ Architecture](#️-architecture)
    - [Data Flow](#data-flow)
  - [🔧 Technology Stack](#-technology-stack)
    - [Backend (Data Processing)](#backend-data-processing)
    - [Frontend](#frontend)
  - [🚀 Setup](#-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [📋 Usage](#-usage)
    - [Data Processing](#data-processing)
    - [Running the Application](#running-the-application)
  - [🚀 Deployment](#-deployment)
    - [Development Workflow](#development-workflow)
    - [CI/CD Pipelines](#cicd-pipelines)
  - [👥 Contributing](#-contributing)
    - [Development Guidelines](#development-guidelines)
  - [❓ Troubleshooting](#-troubleshooting)
    - [Common Issues](#common-issues)
    - [Getting Help](#getting-help)
  - [📄 License](#-license)
  - [🙏 Acknowledgements](#-acknowledgements)

## ✨ Features

- **Unit Browser:** Filter and sort units by faction, type, tech level, and customizable properties
- **Unit Comparison:** Side-by-side comparison of units with categorized properties
- **Unit Detail Page:** Comprehensive view of a single unit's statistics and capabilities
- **Unit Explorer:** Interactive force-directed graph visualizing unit relationships
- **Automatic Data Processing:** Python scripts for downloading and processing game data
- **Image Conversion:** Automated DDS to WebP conversion for optimal web performance
- **Automated Deployment:** GitHub Actions workflow for continuous deployment

## 📂 Project Structure

```
unit-comparison-tool/
├── .github/workflows/            # GitHub Actions workflows
│   └── deploy.yml                # Automated deployment workflow
│
├── src/                          # SvelteKit frontend application
│   ├── lib/                      # Shared library code
│   │   ├── components/           # Reusable UI components
│   │   ├── data.js               # Data loading and state management
│   │   ├── dpsCalculations.js    # Combat statistics calculations
│   │   └── propertyDisplay.js    # Formatting for unit properties
│   │
│   ├── routes/                   # SvelteKit routes (pages)
│   │   ├── compare/+page.svelte  # Unit comparison page
│   │   ├── explore/+page.svelte  # Force-directed graph explorer
│   │   ├── unit/+page.svelte     # Individual unit details page
│   │   └── +error.svelte         # Custom 404/error page
│   │
│   └── app.html                  # SvelteKit app template
│
├── static/                       # Static assets (processed data and images)
│   ├── unitpics_webp/            # Converted unit images
│   ├── unit_icons_webp/          # Converted unit icons
│   └── *.json                    # Processed game data files
│
├── units-parser/                 # Python data processing scripts
│   ├── main.py                   # Main parser script handling all processing
│   ├── GitHubDownloader.py       # GitHub repository download utility
│   └── requirements.txt          # Python dependencies
│
├── package.json                  # Frontend dependencies and scripts
├── svelte.config.js              # SvelteKit configuration
└── README.md                     # This documentation
```

## 🏗️ Architecture

The application follows a two-part architecture:

1. **Data Processing (Python)**

   - Downloads game data and assets from BAR GitHub repository
   - Parses Lua files into structured JSON
   - Converts DDS images to WebP format
   - Generates keyword mappings for display names
   - Places processed data in the `static` directory

2. **Web Application (SvelteKit)**
   - Loads processed data from static files
   - Provides interactive UI for exploring unit data
   - Implements comparison logic and visualization
   - Features responsive design for various devices

### Data Flow

```
BAR GitHub Repository → Python Parser → Processed JSON/WebP → SvelteKit Frontend → User Interface
```

## 🔧 Technology Stack

### Backend (Data Processing)

- **Python 3.8+**
- **Libraries:**
  - `requests`: HTTP operations
  - `slpp`: Lua parsing
  - `Pillow`: Image processing
  - `lupa`: Lua runtime integration
  - `tqdm`: Progress visualization

### Frontend

- **SvelteKit**: Framework
- **Tailwind CSS**: Styling
- **D3.js**: Data visualization
- **JavaScript**: ES6+

## 🚀 Setup

### Prerequisites

- Node.js 16+ and pnpm (v8+)
- Python 3.8+
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MotionCorrect/unit-comparison-tool.git
   cd unit-comparison-tool
   ```

2. **Set up the development branch:**

   ```bash
   # Switch to the development branch
   git checkout -b development origin/development
   ```

3. **Install frontend dependencies:**

   ```bash
   # Install pnpm if you don't have it
   npm install -g pnpm

   # Install dependencies with pnpm
   pnpm install
   ```

4. **Set up Python environment:**

   ```bash
   cd units-parser
   python -m venv .venv

   # Activate the virtual environment:
   # Windows (PowerShell):
   .venv\Scripts\Activate.ps1
   # Windows (Command Prompt):
   .venv\Scripts\activate.bat
   # macOS/Linux:
   source .venv/bin/activate

   # Install dependencies:
   pip install -r requirements.txt
   ```

## 📋 Usage

### Data Processing

1. **Run the data parser:**

   ```bash
      cd units-parser
      python main.py
   ```

   **Options:**

   - `--update-files`: Force redownload all data
   - `--verbose`: Show detailed logging

2. **LLM Prompt for Display Names** (Optional)
   - After running the parser, a file `cache/llm_prompt.txt` is generated
   - Submit this prompt to a language model (like Gemini or GPT-4) to generate display name mappings
   - Add the resulting JavaScript object to `src/lib/keywords_map.js`

### Running the Application

1. **Start the development server:**

   ```bash
   pnpm run dev
   ```

2. **Access the application:**
   - Open your browser to `http://localhost:5173`

## 🚀 Deployment

### Development Workflow

This project follows a structured workflow for development and deployment:

1. **Development Branch (`development`)**

   - All new features and changes should be developed on the `development` branch
   - When you push to `development`, GitHub Actions will build and test the site without deploying
   - Pull requests should target the `development` branch for code review

2. **Production Deployment (`main`)**
   - The `main` branch contains the production-ready code
   - To deploy to GitHub Pages, create a pull request from `development` to `main`
   - Merging the PR to `main` automatically triggers the deployment workflow
   - The site will be built and deployed to GitHub Pages

### CI/CD Pipelines

The project uses GitHub Actions for continuous integration and deployment:

1. **CI Workflow** (`ci.yml`):

   - Runs automatically on pushes to both `development` and `main` branches
   - Tests that the site builds correctly using pnpm
   - Does not deploy the site

2. **Deployment Workflow** (`deploy.yml`):
   - Runs only when pull requests to `main` are merged
   - Builds the site with pnpm and the correct base path
   - Deploys to GitHub Pages

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**

2. **Clone your fork:**

   ```bash
   git clone https://github.com/MotionCorrect/unit-comparison-tool.git
   cd unit-comparison-tool
   ```

3. **Create a feature branch from development:**

```bash
   # First, make sure you have the latest development branch
   git checkout development
   git pull origin development

   # Then create your feature branch
   git checkout -b feature/your-feature-name
```

4. **Make your changes and commit them:**

   ```bash
   git commit -m "Description of your changes"
   ```

5. **Push to your branch:**

```bash
   git push origin feature/your-feature-name
```

6. **Create a Pull Request to the development branch (not main)**

   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select the development branch as the base branch
   - Provide a clear description of your changes

7. **Wait for code review and approval**
   - Once approved, your changes will be merged into the development branch
   - When a new release is ready, a PR from development to main will deploy the site

### Development Guidelines

- Follow existing coding style and patterns
- Document new functions and components
- Update the README if adding major features
- Always create PRs against the development branch, not main
- Run the build locally before submitting your PR to ensure it works

## ❓ Troubleshooting

### Common Issues

- **"No module named 'lupa'"**: Install the Python dependencies with `pip install -r requirements.txt`
- **Image conversion errors**: Ensure Pillow is correctly installed and you have required system libraries
- **"Failed to load data"**: Check that the parser has been run and data exists in the `static` directory
- **Slow graph visualization**: Reduce the number of displayed nodes or increase system resources
- **Base path issues**: Ensure the `BASE_PATH` environment variable is set correctly during build

### Getting Help

If you encounter issues not covered here, please open an issue on the GitHub repository with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- System information (OS, browser, Node.js version)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Beyond All Reason](https://www.beyondallreason.info/) team for the game data
- All contributors and users of this tool
