'use strict'

const studentsService = require('../services').students
const management = {}
const dateFormat = require('../lib/date').dateFormat

management.fetchList = async(ctx, next) => {
  const list = await studentsService.fetchList(ctx.query)
  ctx.result = list
  return next()
}

management.addStu = async(ctx, next) => {
  const user = ctx.request.body
  const res = await studentsService.add(user)
  if (!res) {
    ctx.msg = '统一认证码已存在'
    ctx.result = `${user.uuid}用户已存在`
  } else {
    ctx.result = 'success'
    ctx.msg = '添加成功'
  }
  return next()
}

management.update = async(ctx, next) => {
  const user = ctx.request.body
  await studentsService.update(user)
  ctx.result = 'success'
  ctx.msg = `编辑${user.name}成功`
  return next()
}

management.delete = async(ctx, next) => {
  const user = ctx.request.body
  await studentsService.delete(user)
  ctx.result = 'success'
  ctx.msg = `删除${user.uuid}成功`
  return next()
}

management.fetchUploadInfo = async(ctx, next) => {
  const list = await studentsService.fetchUploadInfo()
  // const stuList = await studentsService.fetchList({})
  // const notUpload = []

  const today = dateFormat('YYYY-mm-dd', new Date())
  const res = []
  for (const obj of list) {
    if (dateFormat('YYYY-mm-dd', obj.time).includes(today)) {
      if (obj.owner.counselor === ctx.query.counselor || ctx.query.role === 'superAdmin') {
        res.push(obj)
      }
    }
  }
  // for (const obj of res) {
  //   for (const stu of stuList) {
  //     if (stu.uuid === obj.owner.uuid) {
  //       break
  //     } else {
  //       notUpload.push(stu)
  //     }
  //   }
  // }
  // console.log(notUpload)
  // if (ctx.query.status === 'true') {
  //
  // }
  ctx.result = res
  return next()
}

module.exports = management
