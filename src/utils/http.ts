import { useMemberStore } from '@/stores'

const baseURL = 'http://localhost:8080'
//添加拦截器
const httpInterceptor = {
  //拦截前
  invoke(options: UniApp.RequestOptions) {
    //地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //时间
    options.timeout = 10000
    //请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.jwt
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Result<T> {
  code: string
  message: string
  data: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Result<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Result<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Result<T>).message || '服务错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
