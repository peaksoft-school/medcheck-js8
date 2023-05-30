import { createSlice } from '@reduxjs/toolkit'
import {
   putDatas,
   // getAllpatientsThunk,
   // getAllpatientsResults,
   // removePatientRequest,
} from './patient.thunk'

const initialState = {
   allPatients: [],
   error: '',
   isLoading: '',
   result: '',
}
const patientSlice = createSlice({
   name: 'patient',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(putDatas.rejected, (state, action) => {
         console.log(action)
         // state.name = action.payload.name
         // state.dateOfRes = action.payload.date
      })
      builder.addCase(putDatas.pending, (state) => {
         state.isLoading = true
         // state.name = action.payload.name
         // state.dateOfRes = action.payload.date
      })
      // builder.addCase(getAllpatientsResults.fulfilled, (state, action) => {
      //    state.result = action.payload
      //    state.error = ''
      // })
      // builder.addCase(getAllpatientsThunk.fulfilled, (state, action) => {
      //    console.log(action)
      //    state.allPatients = action.payload
      //    state.isLoading = false
      //    state.error = ''
      // })

      // builder.addCase(getAllpatientsThunk.pending, (state) => {
      //    state.isLoading = true
      // })

      // builder.addCase(getAllpatientsThunk.rejected, (state, action) => {
      //    state.isLoading = false
      //    state.error = action.payload
      // })
      // builder.addCase(removePatientRequest.fulfilled, (state) => {
      //    state.isLoading = false
      //    state.error = ''
      // })
      // builder.addCase(removePatientRequest.pending, (state) => {
      //    state.isLoading = true
      // })
      // builder.addCase(removePatientRequest.rejected, (state, action) => {
      //    state.isLoading = false
      //    state.error = action.payload
      // })
   },
})
export const patientActions = patientSlice.actions
export default patientSlice.reducer
