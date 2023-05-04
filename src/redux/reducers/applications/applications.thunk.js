import { createAsyncThunk } from '@reduxjs/toolkit'
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
   async (id, { rejectWithValue }) => {
      console.log('delete', id)
      try {
         const { data } = await deleteCheckedRequest(id)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const deleteAllChecked = createAsyncThunk(
   'allChecked/allDeleteChecked',
   async (id, { rejectWithValue }) => {
      console.log('alldelete', id)
      try {
         const { data } = await deleteAllCheckedRequest(id)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
