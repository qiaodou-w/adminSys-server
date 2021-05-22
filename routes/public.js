'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/user/login', controllers.login.login)

router.post('/mp/info/upload', controllers.mp.upload)

router.get('/mp/notice/news', controllers.notice.fetchNewsList)
router.get('/mp/notice/swiper', controllers.notice.fetchSwiperList)
module.exports = router
