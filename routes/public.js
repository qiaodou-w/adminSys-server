'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/user/login', controllers.login.login)

router.get('/setting/list', controllers.mySetting.fetchAdminList)

router.post('/setting/addAdmin', controllers.mySetting.addAdmin) // 添加管理员

router.post('/setting/updateAdmin', controllers.mySetting.updateAdmin) // 添加管理员

router.post('/setting/deleteAdmin', controllers.mySetting.deleteAdmin) // 添加管理员

module.exports = router
