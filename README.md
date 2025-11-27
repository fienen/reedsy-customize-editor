# Reedsy Editor Customizations

A browser userscript/extension that customizes the [Reedsy Editor](https://reedsy.com/) experience by enabling light/dark theme toggling and removing distracting upsell panels.

## Features

- **Theme Enablement**: Removes the modal and allows the dark/light theme toggle button to function as intended. Remembers your previous setting and applies it on future visits or reloads.
- **Remove Upsell Panels**: Hides promotional elements including:
  - "Most used words" panel
  - "Most used phrases" panel
  - Premium ad banner in the sidebar
  - Pinned note button
  - "Unlock history" block

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v24 or higher recommended, likely to work with recent older versions)
- npm (comes with Node.js)

### Setup

**NOTE:** Currently you must build the file to include it in your browser extension. The main branch will soon include a fully compiled verbose and minified versions of script's latest release in the main branch for easier implementation.

1. Clone the repository:
   ```bash
   git clone https://github.com/fienen/reedsy-editor-customizations.git
   cd reedsy-editor-customizations
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Copy contents of `dist/reedsy-editor-customizations.user.js` into your userscript tool.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript compiler and Vite build)
- `npm run preview` - Preview the production build locally

### Tech Stack

- TypeScript
- Vite (Build tool)
- Rollup (Bundler)

## Usage

After building/copying, the script can be used with browser extension managers like:
- [Tampermonkey](https://www.tampermonkey.net/)
- [Greasemonkey](https://www.greasespot.net/)
- [Violentmonkey](https://violentmonkey.github.io/)

Load the built script file into your preferred userscript manager and navigate to the Reedsy Editor.

## How It Works

The script:
1. Detects if there is a previous theme preference and sets it at initialization
2. Uses a MutationObserver to maintain the theme preference (in case navigation or other Reedsy behavior tries to reset it)
3. Removes purely premium feature buttons, promotional panels, and ad banners after the page loads

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Special thanks:

 - saikumarvasa100-hash
