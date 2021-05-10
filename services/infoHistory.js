const InfoHistory = require('../models/index').getModel('infoHistory')
// const InfoHistory = require('../models/index').getModel('infoHistory')

const info = {
  /**
   * @Description: ��¼
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async upload(userData) {
    const { uuid, hasWrong, hasTravel, hasTouch, location, other } = userData
    const time = new Date()
    const stu = new InfoHistory({
      uuid,
      hasWrong,
      hasTravel,
      hasTouch,
      location,
      time,
      other
    })
    return await stu.save()
  }
}

module.exports = info
