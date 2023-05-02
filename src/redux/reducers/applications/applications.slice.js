import { createSlice } from '@reduxjs/toolkit'
import { getApplication } from './applications.thunk'

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
      builder.addCase(getApplication.fulfilled, (state, { payload }) => {
         state.application = payload
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
   },
})
