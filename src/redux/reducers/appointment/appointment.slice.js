import { createSlice } from '@reduxjs/toolkit'
import { getAppointment } from './appointment.thunk'

const initialState = {
   appointment: [],
   error: '',
   isLoading: false,
}

export const appointmentSlice = createSlice({
   name: 'appointment',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAppointment.fulfilled, (state, { payload }) => {
         state.appointment = payload
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(getAppointment.pending, (state) => {
         state.isLoading = true
         state.error = ''
      })
      builder.addCase(getAppointment.rejected, (state, { payload }) => {
         state.isLoading = false
         state.error = payload.error
      })
   },
})
