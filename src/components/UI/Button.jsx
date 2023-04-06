import { Button as ReusableButton } from '@mui/material'
import React from 'react'

const Button = ({ children, variant, disabled, onClick }) => {
   return (
      <ReusableButton disabled={disabled} variant={variant} onClick={onClick}>
         {children}
      </ReusableButton>
   )
}

export default Button
