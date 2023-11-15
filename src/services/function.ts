import { http } from '@/utils/http'

export const getApprovalNumberAPI = () => {
  return http({
    method: 'GET',
    url: '/student/approval',
  })
}
export const cadreApproval = () => {
  return http({
    method: 'GET',
    data: {
      flag: 0,
      pagenum: 1,
      pagesize: 10,
    },
    url: '/cadre/approval',
  })
}
