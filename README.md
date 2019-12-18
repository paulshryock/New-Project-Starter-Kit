# New Project Starter Kit

[![Netlify Status][deploy-status]][deploys]
[![JavaScript Style Guide][standard-badge)][standard]

Fork this repository to start a new project with Eleventy, Netlify CMS, Gulp, Babel, PostCSS, and the following workflow: linting, Sass and modern CSS transpiling, ES2015+ compiling, concatenation, minification, beautification, source maps, bundling fonts, images, and favicons, serving files, watching for changes, and live reloading. Includes common accessible HTML, CSS, and JS components, and continuous deployment configurations for Netlify and Zeit Now.

This is an open source project which uses the [The Hippocratic License][license].

[NewProjectStarterKit.com][npsk]

## Quick Start

### Requirements

1. Node
  - Check if Node is installed: `node --version`
  - If you see a version number, such as `v11.6.0`, proceed to [Get Started](#get-started)
  - If Node isn't installed, [download][node-download] and install it, then proceed to [Get Started](#get-started)

### Get Started

Fork or clone this repo, install dev dependencies, and start:

```bash
git clone https://github.com/paulshryock/New-Project-Starter-Kit.git
cd New-Project-Starter-Kit
npm i
npm start
```

Then find and replace the package name (`New-Project-Starter-Kit`) and author name (`Paul Shryock`) in [`LICENSE`][license], [`package.json`][pkg], and `README.md`.

## CLI

- `npm start`: Builds website for production
- `npm run build`: Builds website for production 
- `npm run develop`: Builds website for development
- `npm run watch`: Builds markup and watches for changes
- `npm run serve`: Builds website for development, serves to `localhost:8080`, and watches for changes to assets

<!-- ## Documentation -->

<!-- [Project documentation][docs] files are in the `_docs` directory. -->

## ASPIRE

Great websites should [aspire][aspire] to be:

- **Accessible** to folks with varying cognitive and physical abilities and disabilities
- **Secure** and reliable for storing, manipulating, and transferring information
- **Performant** on average devices and in constrained or unreliable network conditions
- **Inclusive** to diverse audiences and produced by diverse teams to create better experiences
- **Responsive** in adapting the user interface contextually to any screen
- **Ethical** in how users’ preferences and data are handled

## Ideals

1. We will prefer server-generated HTML
2. The HTML on a page can be swapped out and replaced on a whim
3. We will favor the use of native Browser APIs

## Components

TODO (paulshryock): Select which elements from the following list will be included in this starter kit. Numbers indicate how many (out of 7) popular design systems these are included in.

- [x] Accordion (4)
- [ ] Action List (1)
- [x] Activity Timeline (1)
- [x] Alert/Flag Messages (3)
- [ ] App Launcher (1)
- [ ] Arrow Toggle (1)
- [x] Avatar (3)
- [ ] Badges (4)
- [x] Banners (2)
- [ ] Billboard (1)
- [ ] Boombox (1)
- [ ] Brand Band (1)
- [x] Breadcrumb (3)
- [ ] Builder Header (1)
- [x] Button Groups (3)
- [ ] Button Icons (1)
- [x] Buttons (7)
- [ ] Callout Cards (1)
- [x] Caption (1)
- [x] Cards (3)
- [x] Carousel (1)
- [ ] Chat (1)
- [x] Checkbox (6)
- [ ] Checkbox Buttons Group (1)
- [x] Checkbox Toggle (1)
- [ ] Checkbox (1)
- [x] Code Snippet (1)
- [ ] Color Picker (3)
- [ ] Combobox (1)
- [ ] Context Switcher (1)
- [x] Data table (3)
- [ ] Data vis (1)
- [ ] Date Picker (5)
- [ ] Datetime Picker (2)
- [x] Description List (1)
- [ ] Dividers (1)
- [ ] Docked Composer (1)
- [ ] Docked Form Footer (1)
- [ ] Docked Utility Bar (1)
- [ ] Drawers (1)
- [x] Dropdown (2)
- [ ] Drop Zone (1)
- [ ] Dueling Picklist (1)
- [ ] Dynamic Icons (1)
- [ ] Dynamic Menu (1)
- [ ] Empty State (1)
- [ ] End of Flow Confirmation (1)
- [ ] Expandable Section (1)
- [ ] Exception List
- [ ] Explanation (1)
- [ ] Featurebox (1)
- [ ] Feeds (1)
- [x] File Selector/Uploader (2)
- [ ] Files (1)
- [ ] Flag (1)
- [ ] Flyout (1)
- [ ] Footers (2)
- [x] Form (6)
- [x] Global Header (3)
- [x] Global Navigation (1)
- [ ] Grids (1)
- [x] Headings (2)
- [ ] Icons (2)
- [ ] Illustration (1)
- [ ] Info Link (1)
- [x] Labels (1)
- [x] Link (3)
- [x] List (3)
- [ ] List Builder (1)
- [ ] Loading/Spinners (5)
- [ ] Logos in Product (1)
- [ ] Lookups (1)
- [ ] Lozenges (1)
- [ ] Map (1)
- [ ] Menus (2)
- [x] Modal (5)
- [ ] Multi-select (1)
- [ ] Notification (3)
- [ ] Overflow Menu (1)
- [ ] Page Headers (1)
- [ ] Pagination (3)
- [ ] Panels (1)
- [ ] Path (1)
- [ ] Picklist (1)
- [ ] Pills (1)
- [ ] Popovers (3)
- [ ] Progress Bar (4)
- [ ] Progress Indicator (2)
- [ ] Progress Ring (2)
- [ ] Progress Toggle (2)
- [ ] Promo Banner (1)
- [ ] Prompt (1)
- [ ] Publishers (1)
- [ ] Quiz Progress Nav (1)
- [ ] Range Slider (1)
- [ ] Radio button/Choice List (5)
- [ ] Resource List
- [ ] Ribbons (1)
- [ ] Rich Text Editor (1)
- [ ] Scoped Notifications (1)
- [ ] Scoped Tabs (1)
- [ ] Search (2)
- [ ] Select (4)
- [ ] Setup Assistant (1)
- [ ] Signpost (1)
- [ ] Slider (2)
- [ ] Split View (1)
- [ ] Spotlight (1)
- [ ] Step Number (1)
- [ ] Structured List (1)
- [ ] Summary Detail (1)
- [ ] Tabs (5)
- [ ] Tables (4)
- [ ] Tag (3)
- [ ] Testimonial (1)
- [ ] Textarea (3)
- [ ] Text Input (5)
- [ ] Thumbnail (1)
- [ ] Tile (2)
- [ ] Timestamp (1)
- [ ] Timepicker (1)
- [ ] Toast (1)
- [ ] Toggle/Switch (4)
- [ ] Tooltip (5)
- [ ] Trees (1)
- [ ] Trial Bar (1)
- [ ] Trowser (1)
- [ ] Typeahead (2)
- [ ] Vertical Navigation/Side Navigation (2)
- [ ] Vertical Tabs (1)
- [ ] Video (1)
- [ ] Visual Picker (1)
- [ ] Welcome Mat (1)

## Contributing

If you'd like to contribute, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

[deploy-status]: https://api.netlify.com/api/v1/badges/a1031bfd-6642-45fe-9547-2438c4bc0de4/deploy-status
[deploys]: https://app.netlify.com/sites/npsk/deploys
[standard-badge]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard]: https://standardjs.com
[license]: https://firstdonoharm.dev/
[pkg]: package.json
[npsk]: https://newprojectstarterkit.com/
[node-download]: https://nodejs.org/en/download/
[docs]: https://docs.newprojectstarterkit.com/
[aspire]: https://www.filamentgroup.com/lab/aspire/
[code-of-conduct]: blob/master/CODE_OF_CONDUCT.md
[contributing]: blob/master/CONTRIBUTING.md