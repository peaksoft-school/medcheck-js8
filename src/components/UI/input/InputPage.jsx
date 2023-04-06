import React from 'react'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'

const InputPage = ({ color, size, variant, placeholder, ...rest }) => {
   return (
      <StyledInput
         color={color}
         size={size}
         variant={variant}
         placeholder={placeholder}
         {...rest}
      />
   )
}

export default InputPage

const StyledInput = styled(TextField)({
   borderRadius: 8,
   '&:hover': {
      outline: '1px solid #959595',
   },

   '&:Active': {
      outline: '1px solid #048741',
   },
   '&:error': { outline: '1px solid #F91515' },
})
