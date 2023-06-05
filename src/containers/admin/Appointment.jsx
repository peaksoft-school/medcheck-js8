import React from 'react'
import useToast from '../../hooks/useToast'

const Appointment = () => {
   const { ToastContainer } = useToast()

   return (
      <>
         <h1>Онлайн Запись</h1>
         {ToastContainer}
      </>
   )
}

export default Appointment
