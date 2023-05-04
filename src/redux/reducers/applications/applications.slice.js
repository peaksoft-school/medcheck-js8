import { createSlice } from '@reduxjs/toolkit'
import {
   deleteChecked,
   getApplication,
   getGlobalSearch,
} from './applications.thunk'

const initialState = {
   application: [],
   error: '',
   isLoading: false,
}

export const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getApplication.fulfilled, (state, action) => {
         state.application = action.payload
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(getApplication.pending, (state) => {
         state.isLoading = true
         state.error = ''
      })
      builder.addCase(getApplication.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.error
      })
      builder.addCase(getGlobalSearch.fulfilled, (state, action) => {
         state.application = action.payload
         state.isLoading = false
         state.error = ''
      })
      builder.addCase(getGlobalSearch.pending, (state) => {
         state.isLoading = true
         state.error = ''
      })
      builder.addCase(getGlobalSearch.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.error
      })
      builder.addCase(deleteChecked.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(deleteChecked.fulfilled, (state, action) => {
         state.isLoading = false
         state.application = action.payload
         state.error = ''
      })
      builder.addCase(deleteChecked.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
   },
})
