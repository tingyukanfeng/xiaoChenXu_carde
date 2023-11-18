import type { PageResult } from '@/types/pages'
import { http } from '@/utils/http'
import type { Approval } from '@/types/home'
import type { carde } from '@/types/login'
import type { LoginResult } from '@/types/member'
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
export const CadreLogin = (formData: carde) => {
  return http({
    method: 'POST',
    data: formData,
    url: '/cadre/login',
  })
}
export const cadreFeatApproval = (username: string, state: string) => {
  return http({
    method: 'PUT',
    data: {
      username: username,
      state: state,
    },
    url: '/cadre/approval',
  })
}
