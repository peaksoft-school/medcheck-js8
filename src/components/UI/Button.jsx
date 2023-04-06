import { Button as ReusableButton } from '@mui/material'
import React from 'react'

const Button = ({ children, variant, disabled, onClick, ...rest }) => {
   return (
      <ReusableButton
         disabled={disabled}
         variant={variant}
         onClick={onClick}
         {...rest}
      >
         {children}
      </ReusableButton>
   )
}

export default Button
