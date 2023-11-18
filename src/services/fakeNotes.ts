import { http } from '@/utils/http'

type UpdateInfoParams = {
  flag: number
  date: string
  cause: string
  username: string
  state: number
}

export const putUpdateInfo = (leaveData: UpdateInfoParams) => {
  return http({
    method: 'PUT',
    url: '/cadre/addleave',
    data: leaveData,
  })
}
