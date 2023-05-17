import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../reducers/auth/auth.slice'
import { specialist } from '../reducers/specialist/specialist.slice'
// import { addSpecialist } from '../reducers/specialist/addSpecialist'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [specialist.name]: specialist.reducer,
      // [addSpecialist.name]: addSpecialist.reducer,
   },
})
