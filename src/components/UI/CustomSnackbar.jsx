import { Snackbar, styled } from '@mui/material'
import React from 'react'

const CustomSnackbar = ({ open, type, message, onClose }) => {
   return (
      <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
         <StyledSnackbar>
            <SnackbarStatus type={type} />
            {message}
         </StyledSnackbar>
      </Snackbar>
   )
}

export default CustomSnackbar

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
