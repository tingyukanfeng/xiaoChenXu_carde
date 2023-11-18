/**
 * 小程序登录信息
 */
type BaseProfile = {
  account: string //账号
  name: string //姓名
  number: int //次数
}

export type LoginResult = BaseProfile & {
  jwt: string
  username: string
  major: string
  name: string
}

export type ProfileDetail = BaseProfile & {
  email: string
}

export type ProfileParams = {
  email: string
}
export type LoginResult2 = {
  jwt: string
  username: string
  major: string
  name: string
}
