const faker = require('faker')
const User = require('./user')
const Products = require('./products')
const VIPUser = require('./vipuser') 

// 默认的数量为5个，可以在调用时修改
function createObject (classType = '', count = 5) {
  if (typeof classType !== 'function') {
    console.error('请输入正确的类')
    return []
  }
  let result = []
  for (let i = 0; i < count; i++) {
    const type = new classType()
    result.push(type.createNew())
  }
  return result
}

module.exports = function () {
  let data = { 
    user: {
      data: [],
      code: 200,
      msg: 'good'
    },
    products: [],
    vipuser: []
  }
  // 修改下面的数字，指定返回数组的长度
  data.user.data = createObject(User)
  data.products = createObject(Products)
  data.vipuser = createObject(VIPUser)
  return data
}
