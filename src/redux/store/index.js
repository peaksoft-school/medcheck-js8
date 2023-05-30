import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth/auth.slice'
import patientSlice from '../reducers/patient/patient.slice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [patientSlice.name]: patientSlice.reducer,
   },
})
