import axios from 'axios'
// import { Message } from 'element-ui'
const axi = axios.create({
  timeout: 60000
})
// axios.defaults.timeout = 5000
// axios.defaults.retry = 5
// axios.defaults.retryDelay = 1000

// let envType = 'test'
// if (envType === 'test') {
//   // 测试环境
//   // Referrer Policy: no-referrer-when-downgrade ; 从http改为https试试
//   axios.defaults.baseURL = 'https://portal.yuansfer.yunkeguan.com'
// } else {
//   // 生产
//   axios.defaults.baseURL = 'https://portal.yuansfer.com'
// }

// http request 拦截器
// axios.interceptors.request.use(
axi.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data)
    // config.headers = {
    //   // 'Content-Type': 'application/x-www-form-urlencoded'
    //   'Content-Type': 'application/json'
    //   // 'Content-Type': 'multipart/form-data'
    // }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
// axios.interceptors.response.use(
axi.interceptors.response.use(
  response => {
    // if (response.data.errCode === 2) {
    //   this.$router.push({
    //     path: '/login',
    //     querry: {redirect: this.$router.currentRoute.fullPath} // 从哪个页面跳转
    //   })
    // }
    return response
  },
  error => {
    // 超时拦截
    if (error.message.includes('timeout')) {
      console.log('网络超时了', error)
      alert('网络超时了')
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
// 重连机制
// axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
//   var config = err.config
//   // If config does not exist or the retry option is not set, reject
//   if (!config || !config.retry) return Promise.reject(err)
//   // Set the variable for keeping track of the retry count
//   config.__retryCount = config.__retryCount || 0
//   // Check if we've maxed out the total number of retries
//   if (config.__retryCount >= config.retry) {
//     // Reject with the error
//     return Promise.reject(err)
//   }
//   // Increase the retry count
//   config.__retryCount += 1
//   // Create new promise to handle exponential backoff
//   var backoff = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve()
//     }, config.retryDelay || 1)
//   })
//   // Return the promise in which recalls axios to retry the request
//   return backoff.then(function () {
//     return axios(config)
//   })
// })

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}, config = {
  // 'timeout': 5000,
  'data': JSON.stringify(data),
  'headers': {
    'Content-Type': 'application/json'
  }}) {
  return new Promise((resolve, reject) => {
    // axios.post(url, data, config)
    axi.post(url, data, config)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function postPic (url, data, config = {
  'headers': {
    'Content-Type': 'multipart/form-data'
  }}) {
  return new Promise((resolve, reject) => {
    let param = new FormData()
    param.append('file', data) // 通过append向form对象添加图片数据
    console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
    axios.post(url, param, config)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
