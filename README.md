# @yuccav2/textmode-fonts

A collection of CC0 / Public Domain textmode fonts for retro rendering, dithering effects, ASCII / ANSI art, and pixel aesthetics.

This package exposes absolute paths to font files so they can be easily used in Node.js, bundlers, or frontend projects.

## Installation

```bash
npm install @yuccav2/textmode-fonts
```

or
```bash
pnpm add @yuccav2/textmode-fonts
```

## Usage

Node.js / bundlers

```js
const fonts = require('@yuccav2/textmode-fonts');
console.log(fonts.ursa.regular);
// absolute path to UrsaFont.woff2
```

Example with CSS

```css
@font-face {
font-family: "UrsaFont";
src: url("node_modules/@yuccav2/textmode-fonts/fonts/ursaFont/UrsaFont.woff2") format("woff2");
}
```

Dynamic injection (JS)

```js
const { ursa } = require('@yuccav2/textmode-fonts');

const style = document.createElement('style');
style.textContent = `
@font-face {
font-family: 'UrsaFont';
src: url("${ursa.regular}") format('woff2');
}
`;
document.head.appendChild(style);
```

## Included Fonts

UrsaFont
Author: Ursafrank
License: CC0 / Public Domain
https://ursafrank.itch.io/ursafont

atascii
Author: Damian V
License: CC0 / Public Domain
https://codeberg.org/Dmian/font-atascii

bescii
Author: Damian V
License: CC0 / Public Domain
https://codeberg.org/Dmian/font-bescii

cpc464
Author: Damian V
License: CC0 / Public Domain
https://codeberg.org/Dmian/font-cpc464

## Licence
All fonts included in this package are released under CC0 1.0 (Public Domain).
You are free to use them for any purpose, commercial or non-commercial, without attribution.