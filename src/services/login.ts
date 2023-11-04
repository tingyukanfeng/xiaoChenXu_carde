import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginParams = {
  username: string
  password: string
}

export const postLoginWeixin = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/student/login',
    data,
  })
}
