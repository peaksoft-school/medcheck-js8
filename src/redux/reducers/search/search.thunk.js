import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchRequest } from '../../../api/searchService'

export const getGlobalSearch = createAsyncThunk(
   'search/getSearch',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await getSearchRequest()
         return data
      } catch (error) {
         if (error.response && error.response.data) {
            return rejectWithValue(error.response.data)
         }
         return rejectWithValue(error.message)
      }
   }
)
