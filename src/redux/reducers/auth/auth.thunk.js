import { createAsyncThunk } from '@reduxjs/toolkit'
import { STORAGE_KEYS } from '../../../utlis/constants/commons'
import { signInRequest, signUpRequest } from '../../../api/authService'

export const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ values, notify }, { rejecWithValue }) => {
      try {
         const { data } = await signInRequest(values)
         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         notify('success', 'You have successfuly signed in!')
         return data
      } catch (error) {
         // notify('error', error.response?.data.message)
         return rejecWithValue(error.response?.data.message)
      }
   }
)

export const signUp = createAsyncThunk(
   'auth/signUp',
   async ({ values, notify }, { rejecWithValue }) => {
      try {
         const { data } = await signUpRequest(values)

         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         notify('success', 'You have successfuly signed up!')
         return data
      } catch (error) {
         return rejecWithValue(error.response?.data.message)
      }
   }
)

// export const forgotPassword = createAsyncThunk(
//    'auth/forgotPassword',
//    async (userData, { rejectWithValue }) => {
//       try {
//          const { data } = await authService.forgotPassword(userData)
//          console.log(data)
//          return data
//       } catch (error) {
//          return rejectWithValue(error.response?.data.message)
//       }
//    }
// )

export const signOut = createAsyncThunk('auth/signOut', async (notify) => {
   notify('success', 'You have been logged out!')

   return localStorage.removeItem(STORAGE_KEYS.AUTH)
})
