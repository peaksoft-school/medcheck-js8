import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getDoctorsService,
   postAppointmentService,
} from '../../../api/onlineAppointmentService'

export const getDoctors = createAsyncThunk(
   'appointments/free',
   async (department, { rejectWithValue }) => {
      try {
         const { data } = await getDoctorsService(department)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postAppointment = createAsyncThunk(
   'appointments/free',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await postAppointmentService(userData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
