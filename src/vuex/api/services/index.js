const files = require.context('.', false, /\.js$/)
const services = {}
files.keys().forEach((key) => {
  if (key === './index.js') return
  services[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default services
