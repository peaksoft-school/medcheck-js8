import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
   deleteAllCheckedRequest,
   deleteCheckedRequest,
   getApplicatonRequest,
   getSearchRequest,
} from '../../../api/applicationsService'

export const getApplication = createAsyncThunk(
   'application/getApplication',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getApplicatonRequest()

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const getGlobalSearch = createAsyncThunk(
   'search/getSearch',
   async (name, { rejectWithValue }) => {
      try {
         const { data } = await getSearchRequest(name)
         return data
      } catch (error) {
         if (error.response && error.response.data) {
            return rejectWithValue(error.response.data)
         }
         return rejectWithValue(error.message)
      }
   }
)
export const deleteChecked = createAsyncThunk(
   'checked/deleteChecked',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await deleteCheckedRequest(id)
         dispatch(getApplication())
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const deleteAllChecked = createAsyncThunk(
   'allChecked/allDeleteChecked',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await deleteAllCheckedRequest(id)
         dispatch(getApplication())
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
