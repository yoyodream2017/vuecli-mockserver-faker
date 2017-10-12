const faker = require('faker')
const User = require('./user')
let userId = 1
class VIPUser extends User {
  constructor () {
    super()
    this.Id = userId++
    this.vipLevel = Math.floor(Math.random() * 10 + 1)
  }
  createNew () {
    return Object.assign({}, super.createNew(), { vipLevel: this.vipLevel })
  }
}

module.exports = VIPUser