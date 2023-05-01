/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-52-57-150-68.eu-central-1.compute.amazonaws.com',
})
mainApi.interceptors.request.use(
   function (config) {
      // add a token in the headers

      config.headers.set(
         'Authorization',
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODI5MTg1ODUsImV4cCI6MTY4MjkyMDAyNX0.1lrjXFwt78ztJu2RSxsefiWTk4zG2VeLOYBMFS2i3UU'
      )
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
