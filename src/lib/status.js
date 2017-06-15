import router from '../router'

/**
 * 状态码处理
 * @param res 返回的结果
 * @param fn 成功中执行的回调
 */
export default {
  install (Vue, options) {
    Vue.prototype.$status = function (res, fn, that) {
      if (!res) {
        alert('后台数据没有返回结果')
        return
      }
      if (res.status) {
        switch (res.status) {
          case 500:
            alert('服务器或网络错误')
            break
          case 401:
            alert('无权限')
            break
          case 40317:
            alert('登录超时')
            // 登录超时返回到登录页面
            router.push({ path: '/login' })
            break
          case 404:
            alert('资源未找到')
            break
          case 200:
            // 响应成功
            typeof fn === 'function' && fn(that)
            break
          default:
            // 其他错误
            if (res.data) {
              let err = res.data.message
              if (err) {
                alert(err)
              } else {
                alert('未知错误')
              }
            } else {
              alert('未知错误')
            }
        }
      } else {
        if (res.data) {
          let err = res.data.message
          if (err) {
            alert(err)
          } else {
            alert('未知错误')
          }
        } else {
          alert('未知错误')
        }
      }
    }
  }
}
