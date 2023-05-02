import { createAsyncThunk } from '@reduxjs/toolkit'
import { postApplication } from '../../../api/apllicationsService'

export const postDatas = createAsyncThunk(
   'card/postDatas',
   async (data, { rejectWithValue }) => {
      try {
         const { applications } = await postApplication(data)
         return applications
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
