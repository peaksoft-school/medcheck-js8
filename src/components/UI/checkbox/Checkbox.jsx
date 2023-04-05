import React from 'react'
import Checkbox from '@mui/material/Checkbox'

const CheckboxApp = ({ checked, color }) => {
   return <Checkbox color={color} checked={checked} />
}

export default CheckboxApp
