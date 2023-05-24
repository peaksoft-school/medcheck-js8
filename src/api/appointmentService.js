import { mainApi } from './instanses'

export const getUserAppointmentRequest = () => {
   return mainApi.get('/api/appointments/myAppointments')
}

export const deleteUserAppointmentsRequest = () => {
   return mainApi.delete('/api/appointments/delete')
}

// export const postUserAppointmentsRequest = () => {
//   return mainApi.post('/api/appointments')
// }

// export const postUserFreeTimeAppointmentsRequest = () => {
//   return mainApi.post('/api/appointments/free')
// }

// export const postUserCanceledAppointmentsRequest = (appointmentId) => {
//   return mainApi.post(`/api/appointments/canceled=${appointmentId}`)
// }
