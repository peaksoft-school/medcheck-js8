/* eslint-disable func-names */
import axios from 'axios'

const BASE_URL = 'http://ec2-52-59-249-63.eu-central-1.compute.amazonaws.com'

export const mainApi = axios.create({
   baseURL: BASE_URL,
})

mainApi.interceptors.request.use(
   function (config) {
      const updateConfig = { ...config }
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQzMzM1NzcsImV4cCI6MTY4NDMzNTAxN30.myTxYJcqHPdI0zoQlxSJwYUXNHtkj-jqeP6ivB9cAvw'
      updateConfig.headers.Authorization = `Bearer ${token}`
      return updateConfig
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

export const fileInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'multipart/form-data',
   },
})

fileInstance.interceptors.request.use(
   function (config) {
      const updateConfig = { ...config }
      const token =
         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODQzMzM1NzcsImV4cCI6MTY4NDMzNTAxN30.myTxYJcqHPdI0zoQlxSJwYUXNHtkj-jqeP6ivB9cAvw'
      updateConfig.headers.Authorization = `Bearer ${token}`
      return updateConfig
   },

   function (error) {
      return Promise.reject(error)
   }
)
fileInstance.interceptors.response.use(
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
