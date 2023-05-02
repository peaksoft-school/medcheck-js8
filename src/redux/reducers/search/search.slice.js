import { createSlice } from '@reduxjs/toolkit'
import { getGlobalSearch } from './search.thunk'

const initialState = {
   search: [],
   error: '',
   isLoading: false,
}

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getGlobalSearch.fulfilled, (state, { payload }) => {
         state.search = payload
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
   },
})
