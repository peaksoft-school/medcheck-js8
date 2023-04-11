import { styled } from '@mui/material/styles'
import {
   AppBar,
   Button,
   Divider,
   Grid,
   IconButton,
   Popover,
   TextField,
} from '@mui/material'

export const HeaderStyled = styled(AppBar)(() => ({
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
export const StyledHeaderGlobalContainer = styled(Grid)({
   margin: '0 auto',
   padding: '510x 120px 10px 120px',
   maxWidth: '100%',
})

export const StyledPhoneIconButton = styled(IconButton)({
   marginTop: '-15px',
})

export const Box = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '12.25px',
      margin: '17px 0 0 10px',
   },
}))

export const ProfileButtonStyled = styled(Button)(() => ({
   '&': {
      width: '28px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'center',
   },
}))
export const SecondBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
}))

export const Container = styled(Grid)(() => ({
   '&': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

export const IconBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      marginRight: '30px',
      justifyContent: 'center',
      alignItems: 'center',
   },
}))
export const ContactsBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
   },
}))
export const PhoneBox = styled(Grid)(() => ({
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
export const GeoIconStyled = styled('img')(() => ({
   '&': {
      width: '8.75px',
      height: '14px',
   },
}))
export const TimeIconStyled = styled('img')(() => ({
   '&': {
      width: '14px',
      height: '14px',
   },
}))
export const SearchInputStyled = styled(TextField)(() => ({
   '&': {
      width: '367px',
      padding: '8px 20px',
   },
   fieldset: {
      borderRadius: '50px',
      background: '#F3F1F1',
   },
}))
export const AddressTitle = styled('p')(() => ({
   '&': {
      width: '263px',
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
   },
}))
export const TimeTitle = styled('p')(() => ({
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
export const NumberTitle1 = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
      marginTop: '-8px',
   },
}))
export const NumberTitle2 = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
   },
}))

export const Line = styled(Divider)(() => ({
   '&': {
      marginTop: '8px',
      width: '100%',
      border: '1px solid #D9D9D9',
   },
}))
export const MainIconStyled = styled('img')(() => ({
   '&': {
      width: '67.45px',
      height: '73.16px',
      margin: '8px 12px 5px 0',
   },
}))
export const MedcheckIconStyled = styled('img')(() => ({
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
export const InfoBox = styled('ul')(() => ({
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

export const OutlinedButtonStyled = styled(Button)(() => ({
   '&': {
      borderRadius: '24px',
      padding: '12px 20px',
      border: '1px solid #048741',
      color: '#048741',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Manrope',
   },
}))
export const ContainedButtonStyled = styled(Button)(() => ({
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

export const PopoverStyled = styled(Popover)(() => ({
   '&': {
      position: 'absolute',
      top: '13px',
      margin: '0',
      padding: '30px',
      div: {
         width: '560px',
         padding: '10px 30px 30px 30px ',
         div: {
            width: '100px',
            margin: 0,
            padding: 0,
            gap: '102px',
         },
      },
   },
}))
export const ServiceButtonStyled = styled('button')(() => ({
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

export const DataContainer = styled('div')(() => ({
   '&': {
      display: 'flex',
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

export const ProfileBox = styled(Grid)(() => ({
   '&': {
      width: '42px',
      marginTop: '8px',
   },
}))
