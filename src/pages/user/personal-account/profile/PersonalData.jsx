import React from 'react'
import { styled, FormControl, InputLabel, Box } from '@mui/material'
import Button from '../../../../components/UI/Button'
import Input from '../../../../components/UI/input/Input'

const PersonalData = () => {
   return (
      <Container>
         <StyledTitleText>Ваши личные данные</StyledTitleText>
         <StyledBox component="form" noValidate autoComplete="off">
            <div>
               <InputLabel htmlFor="name">
                  <p>Имя</p>
               </InputLabel>
               <FormControl variant="outlined">
                  <StyledInput label="" id="name" variant="outlined" />
               </FormControl>

               <InputLabel htmlFor="email">
                  <p>E-mail</p>
               </InputLabel>
               <FormControl variant="outlined">
                  <StyledInput label="" id="email" variant="outlined" />
               </FormControl>
            </div>
            <div>
               <InputLabel htmlFor="lastName">
                  <p>Фамилия</p>
               </InputLabel>
               <FormControl variant="outlined">
                  <StyledInput label="" id="lastName" />
               </FormControl>

               <InputLabel htmlFor="phoneNumber">
                  <p>Телефон</p>
               </InputLabel>
               <FormControl variant="outlined">
                  <StyledInput label="" id="phoneNumber" />
               </FormControl>
            </div>
         </StyledBox>
         <StyledBoxButton>
            <StyledButton variant="contained">Назад</StyledButton>
            <Button variant="outlined"> Редактировать </Button>
         </StyledBoxButton>
      </Container>
   )
}

export default PersonalData

const Container = styled('div')`
   width: 90%;
   margin-top: 26px;
   margin-bottom: 40px;
`

const StyledTitleText = styled('h1')`
   font-family: 'Manrope';
   font-weight: 600;
   font-size: 1.13rem;
   line-height: 25px;
   color: #222222;
   margin-bottom: 20px;
   letter-spacing: 0.2px;
`

const StyledInput = styled(Input)`
   fieldset {
      border-radius: 8px;
      padding: 10px 8px 10px 16px;
   }
   input:hover {
      border-radius: 8px;
   }
   input:focus {
      border-radius: 8px;
      border: 3px solid #959595;
   }
   input:active {
      border-radius: 8px;
      border: 3px solid #048741;
   }
   input:invalid {
      border-radius: 8px;
      border: 3px solid #f91515;
   }
`
const StyledBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'start',
   gap: '30px',
   '& div': {
      display: 'inline-box',
      width: '100%',
      marginBottom: '5px',
   },
   '& p': {
      fontSize: '1rem',
      color: '#464444',
      fontFamily: 'Manrope',
      fontWeight: 400,
      lineHeight: '19px',
   },
}))

const StyledBoxButton = styled('div')`
   width: 100%;
   display: flex;
   justify-content: end;
   margin-top: 26px;
   margin-bottom: 40px;

   & button {
      margin-left: 20px;
      width: 23%;
   }
`

const StyledButton = styled(Button)(() => ({
   '&': {
      fontFamily: 'Manrope,sans-serif',
      padding: '14px 67px',
      lineHeight: '16px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#027B44',
      background: '#FFFFFF',
      border: '2px solid #027B44',
      borderRadius: '10px',
      letterSpacing: ' 0.03em',
   },
   '&:hover': {
      color: '#027B44',
      background: '#FFFFFF',
   },
   '&:active': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: '#FFFF',
   },
   '&:disabled': {
      background: '#D3D3D3',
      color: '#FFFF',
   },
}))
