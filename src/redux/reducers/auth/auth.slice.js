import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase()
   },
})
export const authActions = authSlice.actions
