import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth/auth.slice'
import { appointmentSlice } from '../reducers/appointment/appointment.slice'
import { applicationSlice } from '../reducers/applications/applications.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [appointmentSlice.name]: appointmentSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
   },
})
