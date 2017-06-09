const faker = require('faker')

let userId = 1
class User {
  constructor () {
    this.id = userId++
    this.name = faker.name.findName()
    this.email = faker.internet.email()
    this.website = faker.internet.url()
    this.bio = faker.lorem.sentences()
    this.image = faker.image.avatar()
  }
  createNew () {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      website: this.website,
      bio: this.bio,
      image: this.image
    }
  }
}

module.exports = User