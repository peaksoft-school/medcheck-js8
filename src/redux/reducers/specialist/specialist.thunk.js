import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   // deleteSpecialistService,
   // getOneSpecialistService,
   // getSpecialists,
   imageSpecialistService,
   // postSpecialistIsActiveReq,
   // postSpecialistsService,
   // updateSpecialistService,
} from '../../../api/specialistService'

// export const getAllspecialistThunk = createAsyncThunk(
//    'specialist/getAll',
//    async (queryParams, { rejectWithValue }) => {
//       try {
//          const { data } = await getSpecialists(queryParams)
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const postSpecialist = createAsyncThunk(
//    'specialist/post',
//    async (dataSpecialist, { rejectWithValue, dispatch }) => {
//       try {
//          await postSpecialistsService(dataSpecialist)
//          return dispatch(getAllspecialistThunk())
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const postSpecialistIsActive = createAsyncThunk(
//    'isActiveSpecialist/post',
//    async ({ id, isActive }, { rejectWithValue, dispatch }) => {
//       try {
//          await postSpecialistIsActiveReq(id, isActive)
//          return dispatch(getAllspecialistThunk(''))
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const deleteSpecialist = createAsyncThunk(
//    'specialist/delete',
//    async ({ id }, { rejectWithValue, dispatch }) => {
//       try {
//          await deleteSpecialistService(id)
//          return dispatch(getAllspecialistThunk(''))
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const getOneSpecialist = createAsyncThunk(
//    'specialist/get',
//    async (id, { rejectWithValue }) => {
//       try {
//          const { data } = await getOneSpecialistService(id)
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const updateSpecialist = createAsyncThunk(
//    'specialist/put',
//    async (putSpecialist, { rejectWithValue }) => {
//       try {
//          return await updateSpecialistService(putSpecialist)
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const searchSpecialt = createAsyncThunk(
//    'searchSpecialist/get',
//    async (queryParams, { rejectWithValue }) => {
//       try {
//          const { data } = await searchSpecialistService(queryParams)
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )
export const uploadFile = createAsyncThunk(
   'specialist/put',
   async (payload, { rejectWithValue }) => {
      try {
         const data = await imageSpecialistService(payload)
         console.log(data.data.link)
         return data.data.link
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
