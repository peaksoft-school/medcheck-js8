import { createAsyncThunk } from '@reduxjs/toolkit'
import { getApplicatonRequest } from '../../../api/applicationsService'

export const getApplication = createAsyncThunk(
   'application/getApplication',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getApplicatonRequest()

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
