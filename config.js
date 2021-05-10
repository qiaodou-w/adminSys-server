'use strict'

const path = require('path')

module.exports = {
  port: '3000',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'campus',
    username: 'adroot',
    password: 'adroot',
    host: '127.0.0.1',
    port: 27017
  }
}
