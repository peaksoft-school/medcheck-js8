import { mainApi } from './instanses'

export const getSearchRequest = () => {
   mainApi.get('/api/search')
}
