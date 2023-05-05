import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'

const Input = forwardRef(
   ({ error, onChange, value, variant, placeholder, ...rest }, ref) => {
      return (
         <StyledInput
            error={Boolean(error)}
            ref={ref}
            variant={variant}
            placeholder={placeholder}
            onChange={onChange}
            classes={{
               root: 'input',
               error: 'invalid',
            }}
            value={value}
            {...rest}
         />
      )
   }
)
export default Input

const StyledInput = styled(TextField)`
   fieldset {
      border-radius: 8px;
      padding: 10px 8px 10px 16px;
   }
   :hover {
      border-radius: 8px;
      border: 1px solid #959595;
   }
   :active {
      border-radius: 8px;
      border: 1px solid #048741;
   }
   :invalid {
      border-radius: 8px;
      border: 1px solid #f91515;
   }
`
