import { http } from '@/utils/http'
export const CadreSchedule = (formData: any) => {
  return http({
    method: 'POST',
    data: formData,
    url: '/cadre/Schedule',
  })
}
