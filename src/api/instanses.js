/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-52-59-249-63.eu-central-1.compute.amazonaws.com',
})

mainApi.interceptors.request.use(
   function (config) {
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQxNjY2ODEsImV4cCI6MTY4NDE2ODEyMX0.ZuY4FtXyR4BphdZoO2yXCSY40v9d1d2jo6wVVlFlyGg'
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
