import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../../api/authService'
import { STORAGE_KEYS } from '../../../utlis/constants/commons'

export const signIn = createAsyncThunk(
   'auth/signIn',
   async (userData, { rejecWithValue }) => {
      try {
         const { data } = await authService.signIn(userData)
         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         return data
      } catch (error) {
         return rejecWithValue(error.response?.data.message)
      }
   }
)

export const signUp = createAsyncThunk(
   'auth/signUp',
   async (userData, { rejecWithValue }) => {
      try {
         const { data } = await authService.signUp(userData)

         localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(data))
         return data
      } catch (error) {
         return rejecWithValue(error.response?.data.message)
      }
   }
)

export const forgotPassword = createAsyncThunk(
   'auth/forgotPassword',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await authService.forgotPassword(userData)
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data.message)
      }
   }
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
   return localStorage.removeItem(STORAGE_KEYS.AUTH)
})

// export const postAuthGoogle = createAsyncThunk(
//    'auth/postAuthGoogle',
//    async (_, { rejectWithValue }) => {
//       try {
//          const user = await signInWithGoogle()
//          const response = await postAuthGoogleReq(user)
//          console.log('signInWithGoogle', user)

//          const usersData = {
//             id: response.id,
//             role: response.role,
//             email: response.email,
//             firstName: response.firstName,
//             lastName: response.lastName,
//          }
//          console.log('responseee goggle', usersData)
//          return usersData
//       } catch (error) {
//          if (AxiosError(error)) {
//             console.log('rrrrrr', error)
//             return rejectWithValue(error.response?.data.message)
//          }
//       }
//       return rejectWithValue('Something went wrong')
//    }
// )
