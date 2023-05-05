// eslint-disable-next-line import/no-cycle
import { mainApi } from './instanses'

export const getApplicatonRequest = () => {
   return mainApi.get('/api/applications/getAll')
}
export const getSearchRequest = (name) => {
   return mainApi.get(`/api/applications/getAll?word=${name}`)
}
export const deleteCheckedRequest = (id) => {
   return mainApi.delete(`/api/applications`, {
      data: [id],
   })
}
export const deleteAllCheckedRequest = (id) => {
   return mainApi.delete(`/api/applications`, {
      data: id,
   })
}
