import { fileInstance, mainApi } from './instanses'

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
export const uploadFiles = (body) => {
   return fileInstance.post('/api/s3', body)
}
