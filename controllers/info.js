'use strict'
const info = {}

info.info = async(ctx, next) => {
  ctx.result = ctx.jwtData
  return next()
}

module.exports = info
