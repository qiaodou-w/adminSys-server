'use strict'
const mySetting = {}
const Users = require('../models/index').getModel('users')

mySetting.fetchAdminList = async(ctx, next) => {
  const res = []
  let adminList
  const { name, role } = ctx.query
  if (name) {
    adminList = await Users.find({ name })
  } else if (role) {
    adminList = await Users.find({ role })
  } else {
    adminList = await Users.find().sort({ uuid: 1 })
  }
  for (const item of adminList) {
    const { userName, uuid, role, name, tel, password } = item
    res.push({ userName, uuid, role, name, tel, password })
  }
  ctx.result = res
  return next()
}

mySetting.addAdmin = async(ctx, next) => {
  const { userName, password, uuid, name, tel } = ctx.request.body
  const adminUser = new Users({
    uuid,
    password,
    userName,
    name,
    tel
  })
  const user = await Users.findOne({ uuid })
  const userNameRes = await Users.findOne({ userName })
  if (!user && !userNameRes) {
    await adminUser.save().then((res) => {
      console.info(res)
      ctx.msg = '添加成功'
      ctx.result = `添加${userName}成功`
    })
  } else if (userNameRes) {
    ctx.msg = '用户名已存在'
    ctx.result = `${userName}已存在`
  } else {
    ctx.msg = '统一认证码已存在'
    ctx.result = `${adminUser.uuid}用户已存在`
  }
  return next()
}

mySetting.updateAdmin = async(ctx, next) => {
  const { userName, password, uuid, name, tel, role } = ctx.request.body
  const user = await Users.findOne({ uuid })
  user.set({ userName, password, name, tel, role })
  await user.save()
  ctx.msg = '编辑成功'
  ctx.result = `编辑${userName}成功`
  return next()
}

mySetting.deleteAdmin = async(ctx, next) => {
  const { uuid } = ctx.request.body
  Users.deleteOne({ uuid }).then(res => {
    console.log(res)
  })
  ctx.msg = '删除成功'
  ctx.result = `删除${uuid}成功`
  return next()
}

module.exports = mySetting
