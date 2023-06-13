// import { createAsyncThunk } from '@reduxjs/toolkit'
// import {
//    getDoctorsService,
//    getDoctorsServiceANESTHESIOLOGY,
//    getDoctorsServiceVACCINATION,
// } from '../../../api/doctors'

// export const doctorsThunkALLERGOLOGY = createAsyncThunk(
//    'doctors/get',
//    async (_, { rejectWidthValue }) => {
//       try {
//          const { data } = await getDoctorsService()
//          return data
//       } catch (error) {
//          return rejectWidthValue(error)
//       }
//    }
// )

// export const doctorsThunkANESTHESIOLOGY = createAsyncThunk(
//    'doctorsANESTHESIOLOGY.get',
//    async (_, { rejectWidthValue }) => {
//       try {
//          const { data } = await getDoctorsServiceANESTHESIOLOGY()
//          return data
//       } catch (error) {
//          return rejectWidthValue(error)
//       }
//    }
// )

// export const doctorsThunkVACCINATION = createAsyncThunk(
//    'doctorsVACCINATION.get',
//    async (_, { rejectWidthValue }) => {
//       try {
//          const { data } = await getDoctorsServiceVACCINATION()
//          return data
//       } catch (error) {
//          return rejectWidthValue(error)
//       }
//    }
// )
