/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-52-57-150-68.eu-central-1.compute.amazonaws.com',
})

mainApi.interceptors.request.use(
   function (config) {
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODMyMTA2NjksImV4cCI6MTY4MzIxMjEwOX0.qWc35G4hw-sty3md38NgTecB7cjtdn_t5uwKEV-Aj80'
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
