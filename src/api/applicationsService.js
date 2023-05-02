import { mainApi } from './instanses'

export const getApplicatonRequest = () => {
   return mainApi.get('/api/applications/getAll')
}
