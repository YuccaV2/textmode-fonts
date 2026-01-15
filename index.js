const path = require('path');

module.exports = {
  ursa: {
    regular: path.join(__dirname, 'fonts/UrsaFont/UrsaFont.woff2'),
    ansi: path.join(__dirname, 'fonts/UrsaFont/UrsaFont-ANSI.woff2')
  },
  atascii: {
    regular: path.join(__dirname, 'fonts/atascii/atascii.woff2')
  },
  bescii: {
    regular: path.join(__dirname, 'fonts/bescii/Bescii-Basic.woff2'),
    mono: path.join(__dirname, 'fonts/bescii/Bescii-Mono.woff2')
  },
  cpc464: {
    regular: path.join(__dirname, 'fonts/cpc464/cpc464.woff2')
  }
 };