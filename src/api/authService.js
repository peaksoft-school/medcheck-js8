import { mainApi } from './instanses'

const signIn = (userData) => {
   return mainApi.post('api/auth/signIn', userData)
}
const signUp = (userData) => {
   return mainApi.post('api/auth/signUp', userData)
}
const forgotPassword = ({ email }) => {
   return mainApi.post(
      `/api/user/forgot_password?email=${email}&link=http://localhost:3000/?open=reset-password`
   )
}

export default { signIn, signUp, forgotPassword }
