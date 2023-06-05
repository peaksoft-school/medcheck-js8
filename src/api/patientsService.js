import axios from 'axios'
import { mainApi } from './instanses'

export const getPatients = (searchValue) => {
   return mainApi.get('/api/patients', {
      params: {
         word: searchValue,
      },
   })
}
export const deletePatientService = (id) => {
   return mainApi.delete(`/api/patients/?id=${id}`)
}
export const putPatients = (data) => {
   return mainApi.post('/api/results', data)
}
export const uploadFiles = () => {
   return axios.post('http://backend.medcheck.peaksoftprojects.com/api/s3')
}
