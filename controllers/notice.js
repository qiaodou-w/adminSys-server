'use strict'

const notice = {}
const News = require('../models/index').getModel('news')
const Swiper = require('../models/index').getModel('swiper')
notice.newsUpload = async(ctx, next) => {
  const { title, date, content, url } = ctx.request.body
  const news = new News({
    title,
    date,
    content,
    url
  })
  await news.save().then(() => {
    ctx.msg = '添加成功'
    ctx.result = `添加成功`
  })
  return next()
}

notice.fetchNewsList = async(ctx, next) => {
  ctx.result = await News.find()
  return next()
}

notice.swiperUpload = async(ctx, next) => {
  const { title, power, url } = ctx.request.body
  const swiper = new Swiper({
    title,
    url,
    power
  })
  await swiper.save().then(() => {
    ctx.msg = '添加成功'
    ctx.result = `添加成功`
  })
  return next()
}

notice.fetchSwiperList = async(ctx, next) => {
  ctx.result = await Swiper.find()
  return next()
}

module.exports = notice
