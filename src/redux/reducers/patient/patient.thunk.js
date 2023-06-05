import { createAsyncThunk } from '@reduxjs/toolkit'
import { putPatients } from '../../../api/patientsService'

export const putDatas = createAsyncThunk(
   'patient/putDatas',
   async (datasOfPatient, { rejectWithValue }) => {
      try {
         const { data } = await putPatients(datasOfPatient)
         localStorage.setItem('patient', JSON.stringify(data))
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
