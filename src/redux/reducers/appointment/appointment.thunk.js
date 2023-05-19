import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAppointmentRequest } from '../../../api/appointmentService'

export const getAppointment = createAsyncThunk(
   'appointment/getAppointment',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = getUserAppointmentRequest()
         console.log('🚀 ~ data:', data)

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
