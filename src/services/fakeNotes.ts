import { http } from '@/utils/http'

type UpdateInfoParams = {
  flag: number
  date: string
  cause: string
  username: string
  state: number
}

export const putUpdateInfo = (data: UpdateInfoParams) => {
  return http({
    method: 'PUT',
    url: '/cadre/addleave', // 替换为实际的 API 地址
    data,
  })
}
