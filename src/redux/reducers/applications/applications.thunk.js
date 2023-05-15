// eslint-disable-next-line import/no-cycle

import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   deleteAllCheckedRequest,
   deleteCheckedRequest,
   getApplicatonRequest,
} from '../../../api/applicationService'

export const getApplication = createAsyncThunk(
   'application/getApplication',
   async (searchValue, { rejectWithValue }) => {
      try {
         const { data } = await getApplicatonRequest(searchValue)
         return data
      } catch (error) {
         return rejectWithValue(error)
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
