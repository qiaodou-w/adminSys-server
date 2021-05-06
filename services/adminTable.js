const User = require('../models/index').getModel('users')

const adminTable = {
  /**
   * @Description: 管理员
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async login(userData) {
    const result = await User.findOne(userData)
    console.log(result)
    return result
  }
}

module.exports = adminTable
