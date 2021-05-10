'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/user/login', controllers.login.login)

router.get('/setting/list', controllers.mySetting.fetchAdminList)
router.post('/setting/addAdmin', controllers.mySetting.addAdmin) // 添加管理员
router.post('/setting/updateAdmin', controllers.mySetting.updateAdmin) // 跟新管理员
router.post('/setting/deleteAdmin', controllers.mySetting.deleteAdmin) // 删除管理员

router.get('/management/list/fetch', controllers.management.fetchList) // 学生列表
router.post('/management/add', controllers.management.addStu) // 添加学生
router.post('/management/update', controllers.management.update) // 添加学生

router.post('/mp/info/upload', controllers.mp.upload)
module.exports = router
