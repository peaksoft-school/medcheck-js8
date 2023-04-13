/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Toast({ type, message }) {
   const toastConfig = {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: true,
   }
   const notify = () => {
      toast[type](
         <StyledSnackbar>
            <SnackbarStatus type={type} />
            {message}
         </StyledSnackbar>,
         toastConfig
      )
   }

   useEffect(() => {
      notify()
   }, [type, message])

   return <Toastify />
}

export default Toast

const Toastify = styled(ToastContainer)(() => ({
   '&': {
      div: {
         borderRadius: '0px',
         marginLeft: '0px',
         padding: '0px',
      },
      svg: {
         display: 'none',
      },
      '& .Toastify__toast-icon': {
         display: 'none',
      },
   },
}))

const StyledSnackbar = styled('div')(() => ({
   '&': {
      width: '387px',
      borderRadius: 0,
      backgroundColor: '#fff',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '4px 0px 8px 0px rgba(34, 60, 80, 0.2)',
   },
}))

const SnackbarStatus = styled('div')(({ type }) => ({
   '&': {
      width: '7px',
      height: '66px',
      backgroundColor: type === 'success' ? 'green' : 'red',
      marginRight: '38px',
   },
}))
