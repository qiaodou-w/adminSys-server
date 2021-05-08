'use strict'

const studentsService = require('../services').students
const management = {}

management.fetchList = async(ctx, next) => {
  const list = await studentsService.fetchList()
  ctx.result = list
  return next()
}

management.addStu = async(ctx, next) => {
  const user = ctx.request.body
  await studentsService.add(user)
  ctx.result = 'success'
  ctx.msg = '添加成功'
  return next()
}

management.update = async(ctx, next) => {
  const user = ctx.request.body
  await studentsService.update(user)
  ctx.result = 'success'
  ctx.msg = `编辑${user.name}成功`
  return next()
}

module.exports = management
