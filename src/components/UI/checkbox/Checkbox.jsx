import React from 'react'
import Checkbox from '@mui/material/Checkbox'

const CheckboxApp = ({ checked, color, onChange }) => {
   return <Checkbox color={color} checked={checked} onChange={onChange} />
}

export default CheckboxApp
