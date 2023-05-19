import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth/auth.slice'
import { appointmentSlice } from '../reducers/appointment/appointment.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [appointmentSlice.name]: appointmentSlice.reducer,
   },
})
