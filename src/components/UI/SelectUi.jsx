import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { FormControl, Select } from '@mui/material'
import styled from '@emotion/styled'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const menuProps = {
   PaperProps: {
      style: {
         maxHeight: 292,
      },
   },
}

export const SelectUi = ({
   items,
   label,
   value,
   onChange,
   placeholder,
   ...rest
}) => {
   return (
      <FormControl fullWidth>
         <SelectMui
            value={value}
            label={label}
            onChange={onChange}
            IconComponent={KeyboardArrowDownIcon}
            inputProps={{ 'aria-label': 'Without label' }}
            MenuProps={menuProps}
            displayEmpty
            {...rest}
         >
            <MenuItem disabled value="" style={{ display: 'none' }}>
               {placeholder}
            </MenuItem>
            {items &&
               items.map((item) => (
                  <MenuItemStyle key={item.id} value={item.title}>
                     {item.title}
                  </MenuItemStyle>
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
const MenuItemStyle = styled(MenuItem)(() => ({
   color: '#222222',
   fontFamily: 'Manrope',
   '&:hover': {
      background: '#DBF0E5',
   },
   '&:active': {
      background: '#DBF0E5',
   },
}))
