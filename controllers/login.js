'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const userServices = require('../services').user
const { InvalidQueryError } = require('../lib/error')
const login = {}
login.login = async(ctx, next) => {
  console.log(userServices)
  const { userName, password } = ctx.request.body
  if (!userName || !password) {
    throw new InvalidQueryError()
  }
  const user = await userServices.login({
    userName: userName,
    password: password
  })
  if (!user) {
    ctx.result = ''
    ctx.code = 203
    ctx.msg = '检查用户名或密码'
  } else {
    const payload = {
      data: {
        _id: user._id,
        role: user.role,
        userName
      },
      // 设置 token 过期时间
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 60 seconds * 60 minutes = 1 hour
    }
    ctx.result = {
      token: 'Bearer ' + jwt.sign(payload, config.secret)
    }
  }
  return next()
}

login.logout = async(ctx, next) => {
  ctx.result = '退出成功'
  return next()
}

login.info = async(ctx, next) => {
  ctx.result = ctx.jwtData
  return next()
}

module.exports = login
