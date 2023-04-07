import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { FormControl, Select } from '@mui/material'
import styled from '@emotion/styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const SelectUi = (props) => {
   const [name, setName] = useState('')

   const { items, label } = props

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <FormControl fullWidth>
         <SelectMui
            value={name}
            label={label}
            onChange={handleChange}
            IconComponent={KeyboardArrowDownIcon}
         >
            {items &&
               items.map((item) => (
                  <MenuItem key={item.id} value={item.title}>
                     {item.title}
                  </MenuItem>
               ))}
         </SelectMui>
      </FormControl>
   )
}

const SelectMui = styled(Select)(() => ({
   maxWidth: '100%',
   height: '38px',
   border: '1px solid #D9D9D9',
   borderRadius: '6px',
   fontFamily: 'Manrope',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '21.86px',
   color: '#4D4E51',

   '&:hover': {
      '&& fieldset': {
         border: '1px solid #959595',
         color: '#4D4E51',
      },
   },
   '&:active': {
      '&& fieldset': {
         border: '1px solid rgba(4, 135, 65, 0.8)',
         color: '#4D4E51',
      },
   },
   '&:disabled': {
      '&& fieldset': {
         border: '1px solid #959595',
         color: '#4D4E51',
      },
   },
}))
