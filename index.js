'use strict'

const alpha = require('color-alpha')

const black = '#878787'
const blue = '#6699cc'
const cyan = '#5fb3b3'
const green = '#99c794'
const magenta = '#c594c5'
const red = '#e15a60'
const white = '#d4d4d4'
const yellow = '#fac863'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: '#252b2e',
    borderColor: '#394347',
    colors: {
      black: black,
      red: red,
      green: green,
      yellow: yellow,
      blue: blue,
      magenta: magenta,
      cyan: cyan,
      white: white,
      lightBlack: black,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white,
    },
    cursorColor: alpha(white, 0.8),
    foregroundColor: white,
  })
}
