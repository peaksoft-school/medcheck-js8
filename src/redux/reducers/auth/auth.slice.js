import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRoles } from '../../../utlis/constants/commons'
import { signIn, signOut, signUp } from './auth.thunk'

const getInitialState = () => {
   const json = localStorage.getItem(STORAGE_KEYS.AUTH)
   if (json) {
      const userData = JSON.parse(json)
      return {
         isAuthorized: true,
         token: userData.token,
         email: userData.email,
         role: userData.role,
      }
   }

   return {
      isAuthorized: false,
      token: '',
      email: '',
      role: UserRoles.GUEST,
      error: '',
   }
}

export const authSlice = createSlice({
   name: 'auth',
   initialState: getInitialState(),
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(signIn.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
      })
      builder.addCase(signUp.fulfilled, (state, { payload }) => {
         state.isAuthorized = true
         state.token = payload.token
         state.email = payload.email
         state.role = payload.role
      })
      builder.addCase(signIn.rejected, (state, { payload }) => {
         state.error = payload
      })
      builder.addCase(signUp.rejected, (state, { payload }) => {
         state.error = payload
      })
      builder.addCase(signOut.fulfilled, (state) => {
         state.isAuthorized = false
         state.token = ''
         state.email = ''
         state.role = UserRoles.GUEST
         state.error = ''
      })
   },
})
export const authActions = authSlice.actions
