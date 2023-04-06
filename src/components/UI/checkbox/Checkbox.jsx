import React from 'react'
import Checkbox from '@mui/material/Checkbox'

const CheckboxApp = ({ checked, color, onChange, ...rest }) => {
   return (
      <Checkbox color={color} checked={checked} onChange={onChange} {...rest} />
   )
}

export default CheckboxApp
