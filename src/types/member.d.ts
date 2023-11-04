/**
 * 小程序登录信息
 */
type BaseProfile = {
  account: string //账号
  name: string //姓名
  number: int //次数
}

export type LoginResult = BaseProfile & {
  token: string
}

export type ProfileDetail = BaseProfile & {
  email: string
}

export type ProfileParams = {
  email: string
}
