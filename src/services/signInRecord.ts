import { http } from '@/utils/http'

export const addSignInRecord = (data: any) => {
  return http({
    method: 'PUT',
    url: '/cadre/addrecord',
    data,
  })
}

export const getAllrecord = () => {
  return http({
    method: 'GET',
    url: '/cadre/exportExcel',
  })
}
