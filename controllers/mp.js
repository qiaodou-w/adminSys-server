'use strict'

const infoService = require('../services').infoHistory

const mp = {}

mp.upload = async(ctx, next) => {
  const res = await infoService.upload(ctx.request.body)
  if (res) {
    ctx.result = '添加成功'
    ctx.msg = '上传成功'
  } else {
    ctx.msg = '检查认证码'
    ctx.result = 'failed'
  }
  return next()
}

module.exports = mp
