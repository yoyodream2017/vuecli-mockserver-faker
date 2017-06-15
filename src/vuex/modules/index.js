const files = require.context('.', false, /\.js$/)
// files是一个函数，可以再调用keys()
// console.log(files)
const modules = {}
// console.log(files.keys())// 返回map["./index.js", "./products.js", "./user.js"]
// 下面提到的key理解为value更好
files.keys().forEach((key) => {
//  console.log(files(key))
  if (key === './index.js') return
  // 找到不是./index.js的部分,去掉前面的./和后面的.js作为modules的key
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
// console.log(modules) //Object {products: Object, user: Object}
export default modules
