/* eslint-disable func-names */
import axios from 'axios'

export const mainApi = axios.create({
   baseURL: 'http://ec2-3-76-219-110.eu-central-1.compute.amazonaws.com',
})
mainApi.interceptors.request.use(
   function (config) {
      // add a token in the headers

      // config.headers.set('Authorization', store.getState().auth.token)
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
      // when the token dies it is thrown into signout

      //   if (error.response.status === 401) {
      //      store.dispatch(signOut())
      //   }
      return Promise.reject(error)
   }
)
