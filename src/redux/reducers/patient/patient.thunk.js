import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   // deletePatientService,
   putPatients,
   // getPatients,
   // getResults,
} from '../../../api/patientsService'
// import { mainApi } from '../../../api/instanses'

export const putDatas = createAsyncThunk(
   'patient/putDatas',
   async (datasOfPatient, { rejectWithValue }) => {
      try {
         const { data } = await putPatients(datasOfPatient)
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
// export const getAllpatientsResults = createAsyncThunk(
//    'results/getAllpatientsResults',
//    async (_, { rejectWithValue }) => {
//       try {
//          const { data } = await getResults()
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
// export const getAllpatientsThunk = createAsyncThunk(
//    'allPatients/getAllpatientsThunk',
//    async (_, { rejectWithValue }) => {
//       try {
//          const { data } = await getPatients()
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
// export const removePatientRequest = createAsyncThunk(
//    'removePatient/removePatientRequest',
//    async (id, { rejectWithValue, dispatch }) => {
//       try {
//          const { data } = await deletePatientService(`user/${id}`)
//          dispatch(getAllpatientsThunk())
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
