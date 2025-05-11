# Contributing to the Unit Comparison Tool

Thank you for considering contributing to the Unit Comparison Tool! This document outlines the process for contributing to the project.

## Code of Conduct

Please be respectful and considerate to all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported by searching the [Issues](https://github.com/MotionCorrect/unit-comparison-tool/issues).
2. If the bug hasn't been reported, create a new issue using the Bug Report template.
3. Provide as much detail as possible, including steps to reproduce, expected behavior, and screenshots if applicable.

### Requesting Features

1. Check if the feature has already been requested by searching the [Issues](https://github.com/MotionCorrect/unit-comparison-tool/issues).
2. If the feature hasn't been requested, create a new issue using the Feature Request template.
3. Clearly describe the feature and the problem it would solve.

### Reporting Unit Data Issues

1. If you find incorrect unit data or calculations, create a new issue using the Unit Data Issue template.
2. Provide the correct values and reference sources if possible.

### Pull Requests

1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Run tests to ensure your changes don't break existing functionality.
5. Commit your changes (`git commit -m 'Add some feature'`).
6. Push to the branch (`git push origin feature/your-feature-name`).
7. Create a new Pull Request using the provided template.

## Development Process

### Setting Up the Development Environment

1. Clone the repository:

   ```
   git clone https://github.com/MotionCorrect/unit-comparison-tool.git
   cd unit-comparison-tool
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up Python environment for data parsing:

   ```
   cd units-parser
   python -m venv .venv
   .venv\Scripts\activate  # On Windows
   # OR
   source .venv/bin/activate  # On macOS/Linux
   pip install -r requirements.txt
   cd ..
   ```

4. Run the development server:
   ```
   pnpm run dev
   ```

### Code Style

- Follow the existing code style in the project.
- Use meaningful variable and function names.
- Include comments where necessary.

### Testing

- Run existing tests before submitting a pull request.
- Add tests for new features or bug fixes.

## Building for Production

To build the project for production:

```
pnpm run build
```

## Questions?

If you have any questions, please create a new discussion in the repository's Discussions tab.

Thank you for contributing!
