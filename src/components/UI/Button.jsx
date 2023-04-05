import styled from '@emotion/styled'
import { Button as ReusableButton } from '@mui/material'
import React from 'react'

const Button = ({
   disabled,
   type,
   children,
   padding,
   borderStyle = 'squared',
   ...rest
}) => {
   return (
      <StyledButton
         disabled={!disabled}
         type={type}
         padding={padding}
         borderStyle={borderStyle}
         {...rest}
      >
         {children}
      </StyledButton>
   )
}

export default Button

const getBackgroundColor = (type) => {
   return type === 'transparent' || type === 'outlined' ? '#fff' : '#048741'
}

const getTextColor = (type) => {
   if (type === 'transparent') {
      return '#959595'
   }
   if (type === 'outlined') {
      return '#048741'
   }
   return '#fff'
}

const getBorder = (type) => {
   return type === 'outlined' || type === 'contained'
      ? '1px solid #048741'
      : '1px solid #959595'
}
const getBorderRadius = (borderStyle) => {
   return borderStyle === 'rounded' ? '24px' : '10px'
}
const getBackgroundHover = (type) => {
   if (type === 'transparent') {
      return '#F5F5F5'
   }
   return '#027B44'
}
const getColorHover = (type) => {
   if (type === 'transparent') {
      return '#959595'
   }
   return '#FFFFFF'
}
const getDisabledColor = (type) => {
   return type === 'contained' ? '#ffff' : '#D9D9D9'
}
const getDisabledBackground = (type) => {
   if (type === 'contained') {
      return '#D3D3D3'
   }
   if (type === 'transparent') {
      return '#F5F5F5'
   }
   return type === 'contained' ? '#D3D3D3' : '1px solid #F5F5F5'
}
const getDisabledBorder = (type) => {
   return type === 'outlined' ? '1px solid #D3D3D3' : 'none'
}

const StyledButton = styled(ReusableButton, {
   shouldForwardProp: (propName) => propName !== 'borderStyle',
})(({ padding, borderStyle, type }) => ({
   '&': {
      background: getBackgroundColor(type),
      border: getBorder(type),
      borderRadius: getBorderRadius(borderStyle),
      padding,
      cursor: 'pointer',
      color: getTextColor(type),

      '&:hover': {
         background: getBackgroundHover(type),
         color: getColorHover(type),
      },
      '&:active': {
         background: getBackgroundHover(type),
         color: getColorHover(type),
      },
      '&:disabled': {
         background: getDisabledBackground(type),
         color: getDisabledColor(type),
         border: getDisabledBorder(type),
      },
   },
}))
