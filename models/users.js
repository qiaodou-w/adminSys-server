'use strict'

module.exports = {
  name: 'users',
  schema: {
    uuid: {
      type: 'Number',
      required: true,
      unique: true
    }, // UUID
    userName: {
      type: 'String',
      required: true,
      unique: true
    }, // 用户名
    password: {
      type: 'String',
      required: true
    }, // 密码
    role: {
      type: 'String',
      default: 'admin'
    }, // 角色
    name: {
      type: 'String'
    },
    tel: {
      type: 'Number',
      required: true
    }
  }
}
