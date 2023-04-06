import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'

const Input = forwardRef(
   ({ color, size, variant, placeholder, ...rest }, ref) => {
      return (
         <StyledInput
            ref={ref}
            color={color}
            size={size}
            variant={variant}
            placeholder={placeholder}
            {...rest}
         />
      )
   }
)
export default Input

const StyledInput = styled(TextField)({
   borderRadius: 8,
   '&:hover': {
      outline: '1px solid #959595',
   },

   '&:active': {
      outline: '1px solid #048741',
   },
})
