// import { createSlice } from '@reduxjs/toolkit'
// import {
//    doctorsThunkALLERGOLOGY,
//    doctorsThunkANESTHESIOLOGY,
//    doctorsThunkVACCINATION,
// } from './doctors.thunk'

// const initialState = {
//    // doctorsALLERGOLOGY: [],
//    // doctorsVACCINATION: [],
//    // doctorsANESTHESIOLOGY: [],
//    error: '',
//    isLoading: false,
//    doctors: {
//       ALLERGOLOGY: [],
//       VACCINATION: [],
//       ANESTHESIOLOGY: [],
//    },
// }

// export const doctorsSlice = createSlice({
//    name: 'doctors',
//    initialState,
//    reducers: {},
//    extraReducers: (builder) => {
//       builder.addCase(doctorsThunkALLERGOLOGY.fulfilled, (state, action) => {
//          state.doctors.ALLERGOLOGY = action.payload
//          console.log(action.payload)
//          state.error = ''
//          state.isLoading = false
//       })
//       builder.addCase(doctorsThunkANESTHESIOLOGY.fulfilled, (state, action) => {
//          state.doctors.ANESTHESIOLOGY = action.payload
//          console.log(action.payload)
//          state.error = ''
//          state.isLoading = false
//       })
//       builder.addCase(doctorsThunkVACCINATION.fulfilled, (state, action) => {
//          state.doctors.VACCINATION = action.payload
//          console.log(action.payload)
//          state.error = ''
//          state.isLoading = false
//       })
//    },
// })
