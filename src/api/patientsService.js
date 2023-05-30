import axios from 'axios'
import { mainApi } from './instanses'

export const getPatients = () => {
   return mainApi.get('/api/patients')
}

export const getOnePatientService = (patientId) => {
   return mainApi.get('/api/patients', patientId)
}
export const getResults = () => {
   return mainApi.get('/api/patients/getResult')
}
export const deletePatientService = (id) => {
   return mainApi.delete(`/api/patients/?id=${id}`)
}
export const putPatients = (data) => {
   return mainApi.put('/api/patients', data)
}
export const uploadFiles = () => {
   return axios.post('http://backend.medcheck.peaksoftprojects.com/api/s3')
}
