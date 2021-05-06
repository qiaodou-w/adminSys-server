'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')
const jwtMiddleware = require('../middlewares/jwt')

const router = new Router()
router.prefix('/api')
router.use(jwtMiddleware)

router.get('/test', controllers.test.test)
router.get('/user/info', controllers.login.info)

router.post('/user/logout', controllers.login.logout)

module.exports = router
