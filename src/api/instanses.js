/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-52-57-150-68.eu-central-1.compute.amazonaws.com',
})

mainApi.interceptors.request.use(
   function (config) {
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODMwNTkzNTksImV4cCI6MTY4MzA2MDc5OX0.xcVldoj6z6Rg3AhG7e6XUce8p0AECn-k5bc7_drvomg'
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
