'use strict'

const fs = require('fs')

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

const controllers = {}
for (const file of files) {
  if (file.toLowerCase().endsWith('js')) {
    controllers[`${file.replace(/\.js/, '')}`] = require(`./${file}`)
  }
}

module.exports = controllers
