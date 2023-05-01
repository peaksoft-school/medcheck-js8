import { createSlice } from '@reduxjs/toolkit'
import { postDatas } from './card.thunk'

const initialState = {
   isLoading: false,
   error: '',
}

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postDatas.rejected, (state, action) => {
         state.error = action.payload
      })
   },
})
export const authActions = cardSlice.actions
