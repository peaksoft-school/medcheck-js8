export const getStatusTitleChangeHandler = (statusTitle) => {
   if (statusTitle === 'Cancelled') {
      return 'Отменён'
   }
   if (statusTitle === 'Confirmed') {
      return 'Подтверждён'
   }
   if (statusTitle === 'Completed') {
      return 'Завершён'
   }
   return null
}
