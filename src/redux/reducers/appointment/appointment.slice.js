import { createSlice } from '@reduxjs/toolkit'
import { deleteAllUser, getAppointment } from './appointment.thunk'

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
      builder.addCase(getAppointment.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
      builder.addCase(deleteAllUser.fulfilled, (state) => {
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(deleteAllUser.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteAllUser.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
   },
})
