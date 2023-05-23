import { mainApi } from './instanses'

export const getResultRequest = () => {
   return mainApi.get('/api/results')
}
