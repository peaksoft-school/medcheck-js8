import { mainApi } from './instanses'

export const getDepartmentRequest = () => {
   return mainApi.get('/api/departments/getAll')
}

export const getDoctorRequest = () => {
   return mainApi.get('/api/doctors')
}
export const getAppointmentRequest = (searchValue) => {
   return mainApi.get('/api/appointments', {
      params: {
         keyWord: searchValue,
      },
   })
}
export const deleteAppointmentRequest = (id) => {
   return mainApi.delete('/api/appointments/delete', {
      data: id,
   })
}

export const postScheduleRequest = (data) => {
   return mainApi.post('/api/schedule/save', data)
}

export const getScheduleRequest = (startDate, endDate) => {
   return mainApi.get('/api/schedule/', {
      params: {
         startDate,
         endDate,
      },
   })
}
