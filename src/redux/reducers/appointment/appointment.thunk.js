import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteUserAppointmentsRequest,
   getUserAppointmentRequest,
} from '../../../api/appointmentService'

export const getAppointment = createAsyncThunk(
   'appointment/getAppointment',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = getUserAppointmentRequest()

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteAllUser = createAsyncThunk(
   'allDelete/deleteAllUser',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await deleteUserAppointmentsRequest()
         dispatch(getAppointment())

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
