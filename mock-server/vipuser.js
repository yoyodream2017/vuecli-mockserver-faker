const faker = require('faker')
const User = require('./user')
let vipuserId = 1

class VIPUser extends User {
  constructor () {
    super()
    this.id = vipuserId++// if no id provided,then id will continue from user class.
    this.vipLevel = Math.floor(Math.random() * 10 + 1)
  }
  createNew () {
    return Object.assign({}, super.createNew(), { vipLevel: this.vipLevel })
  }
}

module.exports = VIPUser
