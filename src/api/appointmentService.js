import { mainApi } from './instanses'

export const getUserAppointmentRequest = () => {
   return mainApi.get('/api/appointments')
}
