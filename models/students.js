'use strict'

module.exports = {
  name: 'students',
  schema: {
    uuid: {
      type: 'Number',
      required: true,
      unique: true
    }, // UUID
    name: {
      type: 'String'
    },
    tel: {
      type: 'Number',
      required: true
    },
    studentNumber: 'Number',
    grade: 'Number',
    college: 'String',
    room: 'String',
    counselor: 'String'
  }
}
