'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/user/login', controllers.login.login)

router.post('/mp/info/upload', controllers.mp.upload)
module.exports = router
