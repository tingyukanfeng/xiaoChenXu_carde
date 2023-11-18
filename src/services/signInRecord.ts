import { http } from '@/utils/http'

export const addSignInRecord = (data) => {
  console.log(111 + data)
  return http({
    method: 'PUT',
    url: '/cadre/addrecord',
    data,
  })
}
