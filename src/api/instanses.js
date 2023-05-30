import axios from 'axios'
// import { store } from '../redux/store'

export const mainApi = axios.create({
   baseURL: 'http://backend.medcheck.peaksoftprojects.com',
})

mainApi.interceptors.request.use(
   function (config) {
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODU0MzIwNzcsImV4cCI6MTY4NTQzMzUxN30.nVBSsgKGKPXuC8K8jZzon0Kfl-SSTFuKb4NkVGyKSDU'

      config.headers.Authorization = `Bearer ${token}`
      return config
   },

   function (error) {
      return Promise.reject(error)
   }
)
mainApi.interceptors.response.use(
   function (response) {
      return response
   },
   function (error) {
      if (error.response && error.response.status === 401) {
         throw new Error('401 unauthorized')
      }
      return Promise.reject(error)
   }
)

export const getSpecialists = () => {
   return mainApi.get('/api/doctors')
}
