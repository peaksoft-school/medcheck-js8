/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-52-57-150-68.eu-central-1.compute.amazonaws.com',
})

mainApi.interceptors.request.use(
   function (config) {
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc3hha0BnbWFpbC5jb20iLCJpYXQiOjE2ODMxMDI3NzIsImV4cCI6MTY4MzEwNDIxMn0.a7HNmLZFL5sx9K3zU0t8b-gdfmVyaTCKjn2cxS_KFII'

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
