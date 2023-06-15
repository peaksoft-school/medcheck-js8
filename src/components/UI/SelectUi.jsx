import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { FormControl, Select, styled } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const SelectUi = ({
   items,
   label,
   value,
   onChange,
   placeholder,
   icon,
   ...rest
}) => {
   return (
      <FormControl fullWidth>
         <Icon>{icon}</Icon>
         <SelectMui
            value={value}
            label={label}
            onChange={onChange}
            IconComponent={KeyboardArrowDownIcon}
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
            {...rest}
         >
            <MenuItem disabled value="" style={{ display: 'none' }}>
               {placeholder}
            </MenuItem>
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

const Icon = styled('span')(() => ({
   position: 'absolute',
   top: 25,
   left: 15,
   zIndex: '10',
}))

// const Placeholder = styled('p')(() => ({
//    position: 'absolute',
//    top: 0,
//    left: '0',
//    width: '45p%',
//    height: '100%',
//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'space-between',
//    color: '#222222',
//    fontSize: '16px',
//    fontWeight: '500',
// }))
