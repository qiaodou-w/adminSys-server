'use strict'
const setting = {}
const User = require('../models/index').getModel('users')

setting.fetchAdminList = async(ctx, next) => {
  ctx.result = '123'
  return next()
}

setting.addAdmin = async(ctx, next) => {
  User.create()
  return next()
}

setting.updateAdmin = async(ctx, next) => {
  return next()
}

module.exports = setting
