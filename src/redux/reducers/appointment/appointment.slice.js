import { createSlice } from '@reduxjs/toolkit'
import { getDoctors } from './appointment.thunk'

const initialState = {
   doctors: [],
}

const appointmentSlice = createSlice({
   name: 'appointment',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getDoctors.fulfilled, (state, { payload }) => {
         state.doctors = payload
      })
   },
})

export const appointmentActions = appointmentSlice.actions
export default appointmentSlice
