/* eslint-disable func-names */
import axios from 'axios'
import { store } from '../redux/store'

export const mainApi = axios.create({
   baseURL: 'http://ec2-3-76-219-110.eu-central-1.compute.amazonaws.com',
})
mainApi.interceptors.request.use(
   function (config) {
      // add a token in the headers

      config.headers.set('Authorization', store.getState().auth.token)
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
