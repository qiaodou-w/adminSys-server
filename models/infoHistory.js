'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
module.exports = {
  name: 'infoHistory',
  schema: {
    owner: { type: Schema.Types.ObjectId, ref: 'students' },
    uuid: 'Number',
    temp: 'String',
    location: 'String',
    hasWrong: 'String',
    hasTravel: 'String',
    hasTouch: 'String',
    other: 'String',
    time: 'Date'

  }
}
