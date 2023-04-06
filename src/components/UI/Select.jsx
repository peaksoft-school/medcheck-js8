import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { FormControl, Select } from '@mui/material'
import styled from '@emotion/styled'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ExpandMore } from '@mui/icons-material'

const names = ['Bob', 'Tom', 'Aidai']

export const SelectUi = () => {
   const [personName, setPersonName] = useState('')

   const handleChange = (event) => {
      setPersonName(event.target.value)
   }

   return (
      <FormControl fullWidth>
         <SelectMui
            value={personName}
            label=""
            onChange={handleChange}
            IconComponent={ExpandMore}
         >
            {names.map((name) => (
               <MenuItem key={name} value={name}>
                  {name}
               </MenuItem>
            ))}
         </SelectMui>
      </FormControl>
   )
}

const SelectMui = styled(Select)(() => ({
   width: '490px',
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
