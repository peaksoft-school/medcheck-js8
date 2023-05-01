import { createAsyncThunk } from '@reduxjs/toolkit'
import { postApplication } from '../../../api/apllicationsService'

export const postDatas = createAsyncThunk(
   'card/postDatas',
   async (data, { rejectWithValue }) => {
      try {
         await postApplication(data)
      } catch (error) {
         return rejectWithValue(error)
      }
      return data
   }
)
