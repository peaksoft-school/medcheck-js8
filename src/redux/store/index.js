import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth/auth.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
   },
})
