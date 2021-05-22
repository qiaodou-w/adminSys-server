const Students = require('../models/index').getModel('students')
const InfoHistory = require('../models/index').getModel('infoHistory')

const student = {
  /**
   * @Description: 获得学生列表
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async fetchList(queryObj) {
    const { name, studentNumber, counselor } = queryObj
    let list
    if (name) {
      list = await Students.find({ name }).sort({ uuid: 1 })
    } else if (studentNumber) {
      list = await Students.find({ studentNumber }).sort({ uuid: 1 })
    } else if (counselor) {
      list = await Students.find({ counselor }).sort({ uuid: 1 })
    } else {
      list = await Students.find().sort({ uuid: 1 })
    }
    return list
  },
  async add(user) {
    const res = await Students.findOne({ uuid: user.uuid })
    if (res) {
      return false
    } else {
      const student = new Students(user)
      return await student.save()
    }
  },

  async update(user) {
    const { uuid, studentNumber, name, tel, grade, college, room, counselor } = user
    const stu = await Students.findOne({ uuid })
    stu.set({ studentNumber, name, tel, grade, college, room, counselor })

    return await stu.save()
  },

  async delete(user) {
    const { uuid } = user
    return await Students.deleteOne({ uuid })
  },

  async uploadInfo(userData) {
    const { uuid, hasWrong, hasTravel, hasTouch, location, other } = userData
    const time = new Date()
    const owner = await Students.findOne({ uuid })
    const stu = new InfoHistory({
      owner: owner,
      uuid,
      hasWrong,
      hasTravel,
      hasTouch,
      location,
      time,
      other
    })
    return await stu.save()
  },

  async fetchUploadInfo() {
    return await InfoHistory.find().populate('owner').exec()
  },

  async fetchNoUploadInfo() {
    return await InfoHistory.find().populate('owner').exec()
  }

}

module.exports = student
