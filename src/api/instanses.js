/* eslint-disable func-names */

import axios from 'axios'
import { store } from '../redux/store'

export const mainApi = axios.create({
 feature/applications
   baseURL: 'http://medcheck.peaksoftprojects.com',



mainApi.interceptors.request.use(
   function (config) {
      const { token } = store.getState().auth
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
      }
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
