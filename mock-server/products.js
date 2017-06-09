const faker = require('faker')

let productId = 1
class Products {
  constructor () {
    this.id = productId++
    this.adjective = faker.commerce.productAdjective()
    this.email = faker.internet.email()
    this.name = faker.commerce.productName()
    this.price = faker.commerce.price()
  }

  createNew () {
    return {
      id: this.id,
      adjective: this.adjective,
      email: this.email,
      name: this.name,
      price: this.price
    }
  }
}

module.exports = Products