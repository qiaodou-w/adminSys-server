const Students = require('../models/index').getModel('students')

const student = {
  /**
   * @Description: 获得学生列表
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async fetchList(queryObj) {
    return await Students.find()
  },

  async add(user) {
    const student = new Students(user)
    return await student.save()
  },

  async update(user) {
    const { uuid } = user
    const student = Students.findOne({ uuid })
    console.log(student)
    student.set(user)
    return await student.save()
  }

}

module.exports = student
