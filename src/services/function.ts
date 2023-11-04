import { http } from '@/utils/http'

export const getApprovalNumberAPI = () => {
  return http({
    method: 'GET',
    url: '/student/approval',
  })
}
