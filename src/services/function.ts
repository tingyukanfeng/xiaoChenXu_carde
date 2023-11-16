import type { PageResult } from '@/types/pages'
import { http } from '@/utils/http'
import type { Approval } from '@/types/home'
export const getApprovalNumberAPI = () => {
  return http({
    method: 'GET',
    url: '/student/approval',
  })
}
export const cadreApproval = () => {
  return http<PageResult<Approval>>({
    method: 'GET',
    data: {
      flag: 0,
      pagenum: 1,
      pagesize: 100,
    },
    url: '/cadre/approval',
  })
}
