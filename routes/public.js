'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/user/login', controllers.login.login)

router.get('/setting/list', controllers.setting.fetchAdminList)

module.exports = router
