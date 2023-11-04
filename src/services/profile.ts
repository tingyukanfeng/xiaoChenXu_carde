import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

//获取个人信息
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/student/information',
  })
}

//修改邮箱
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/student/email',
    data,
  })
}
