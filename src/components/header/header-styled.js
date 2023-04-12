import { styled as styledMui } from '@mui/material/styles'
import {
   AppBar,
   Button,
   Divider,
   Grid,
   IconButton,
   MenuItem,
   Popover,
} from '@mui/material'

export const HeaderStyled = styledMui(AppBar)(() => ({
   '&': {
      background: '#FFFFFF',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
   },
}))
export const StyledHeaderGlobalContainer = styledMui(Grid)({
   margin: '0 auto',
   padding: '510x 120px 10px 120px',
   maxWidth: '100%',
})

export const StyledPhoneIconButton = styledMui(IconButton)({
   marginTop: '-11px',
})

export const Box = styledMui(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '12.25px',
      margin: '17px 0 0 10px',
   },
}))

export const ProfileButtonStyled = styledMui(Button)(() => ({
   '&': {
      width: '28px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
      background: 'none',
   },
   '&:hover': {
      background: 'none',
   },
}))
export const MenuItemStyled = styledMui(MenuItem)(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
   },
   '&:active': {
      color: '#048741',
   },
   '&:hover': {
      color: '#048741',
   },
}))
export const SecondBox = styledMui(Grid)(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
}))

export const Container = styledMui(Grid)(() => ({
   '&': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

export const IconBox = styledMui(Grid)(() => ({
   '&': {
      display: 'flex',
      marginRight: '30px',
      alignItems: 'end',
   },
}))
export const ContactsBox = styledMui(Grid)(() => ({
   '&': {
      display: 'flex',
   },
}))
export const PhoneBox = styledMui(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '8.5px',
      alignItems: 'flex-start',
      paddingTop: '22px',
      p: {
         width: '147px',
         height: '22px',
         fontFamily: 'Manrope',
         fontWeight: '400',
         fontSize: '16px',
         lineHeight: '22px',
      },
   },
}))
export const GeoIconStyled = styledMui('img')(() => ({
   '&': {
      width: '8.75px',
      height: '14px',
   },
}))
export const TimeIconStyled = styledMui('img')(() => ({
   '&': {
      width: '14px',
      height: '14px',
   },
}))

export const SearchInputBox = styledMui('div')(() => ({
   '&': {
      width: '367px',
      padding: '8px 20px',
      display: 'flex',
      alignItems: 'end',
   },
}))
export const AddressTitle = styledMui('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
      width: '270px',
   },
}))
export const TimeTitle = styledMui('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
      span: {
         color: '#009344',
      },
   },
}))
export const NumberTitle1 = styledMui('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
      marginTop: '-3px',
   },
}))
export const NumberTitle2 = styledMui('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
   },
}))

export const Line = styledMui(Divider)(() => ({
   '&': {
      marginTop: '8px',
      width: '100%',
      border: '1px solid #D9D9D9',
   },
}))
export const MainIconStyled = styledMui('img')(() => ({
   '&': {
      width: '67.45px',
      height: '73.16px',
      margin: '8px 12px 5px 0',
   },
}))
export const MedcheckIconStyled = styledMui('img')(() => ({
   '&': {
      width: '136px',
      height: '27px',
      fontFamily: 'Montserrat',
      fontWeight: '600',
      fontSize: '22px',
      lineHeight: '27px',
      marginBottom: '25px',
   },
}))
export const InfoBox = styledMui('ul')(() => ({
   '&': {
      display: 'flex',
      gap: '36px',
      listStyle: 'none',
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
      margin: '0 auto',
      cursor: 'pointer',
   },
}))

export const OutlinedButtonStyled = styledMui(Button)(() => ({
   '&': {
      borderRadius: '24px',
      padding: '12px 20px',
      border: '1px solid #048741',
      color: '#048741',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Manrope',
      background: 'none',
   },
   '&:hover': {
      background: 'none',
      border: '1px solid #048741',
      color: '#048741',
   },
}))
export const ContainedButtonStyled = styledMui(Button)(() => ({
   '&': {
      borderRadius: '24px',
      padding: '12px 20px',
      color: '#FFFFFF',
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Manrope',
      marginLeft: '16px',
   },
}))

export const PopoverStyled = styledMui(Popover)(() => ({
   '&': {
      position: 'absolute',
      top: '13px',
      margin: '0',
      padding: '30px',
      div: {
         width: '560px',
         padding: '10px 30px 30px 30px ',
         div: {
            width: '100%',
            margin: 0,
            padding: 0,
         },
      },
   },
}))
export const ServiceButtonStyled = styledMui('button')(() => ({
   '&': {
      color: '#222222',
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
   },
}))

export const DataContainer = styledMui('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
      div: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'start',
      },
      a: {
         display: 'inline-block',
         fontFamily: 'Manrope',
         fontWeight: '400',
         fontSize: '14px',
         lineHeight: '19px',
         marginTop: '20px',
         textDecoration: 'none',
         color: '#222222',
      },
   },
}))

export const ProfileBox = styledMui(Grid)(() => ({
   '&': {
      width: '42px',
      marginTop: '8px',
   },
}))
