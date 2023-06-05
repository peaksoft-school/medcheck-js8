import { createSlice } from '@reduxjs/toolkit'
import { putDatas } from './patient.thunk'

const initialState = () => {
   const json = localStorage.getItem('patient')
   if (json) {
      const userData = JSON.parse(json)
      return {
         error: userData.error,
         isLoading: userData.isLoading,
         allDatas: userData.allDatas,
      }
   }
   return { allDatas: [], error: '', isLoading: '' }
}
const patientSlice = createSlice({
   name: 'patient',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(putDatas.rejected, (state, action) => {
         state.error = action.error
         state.isLoading = false
      })
      builder.addCase(putDatas.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(putDatas.fulfilled, (state, actions) => {
         state.isLoading = false
         state.allDatas = actions.payload
      })
   },
})
export const patientActions = patientSlice.actions
export default patientSlice
