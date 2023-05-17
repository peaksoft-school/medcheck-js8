import React from 'react'
import { styled, FormControl, InputLabel } from '@mui/material'
import Button from '../../../../components/UI/Button'
import Input from '../../../../components/UI/input/Input'

const PersonalData = () => {
   const clickHandler = (event) => {
      event.preventDefault()
   }

   return (
      <Container onSubmit={clickHandler} noValidate autoComplete="off">
         <StyledTitleText>Ваши личные данные</StyledTitleText>
         <StyledForm>
            <div>
               <StyledInputLabel htmlFor="name">Имя</StyledInputLabel>
               <FormControl>
                  <StyledInput
                     variant="outlined"
                     type="text"
                     label=""
                     id="name"
                  />
               </FormControl>

               <StyledInputLabel htmlFor="email">E-mail</StyledInputLabel>

               <FormControl>
                  <StyledInput
                     variant="outlined"
                     type="email"
                     label=""
                     id="email"
                  />
               </FormControl>
            </div>
            <div>
               <StyledInputLabel htmlFor="lastName">Фамилия</StyledInputLabel>

               <FormControl>
                  <StyledInput
                     variant="outlined"
                     type="text"
                     label=""
                     id="lastName"
                  />
               </FormControl>

               <StyledInputLabel htmlFor="phoneNumber">
                  Телефон
               </StyledInputLabel>
               <FormControl>
                  <StyledInput
                     variant="outlined"
                     type="number"
                     label=""
                     id="phoneNumber"
                  />
               </FormControl>
            </div>
         </StyledForm>
         <StyledBoxButton>
            <StyledButton type="submit" variant="contained">
               Назад
            </StyledButton>
            <Button type="submit" variant="outlined">
               Редактировать
            </Button>
         </StyledBoxButton>
      </Container>
   )
}

export default PersonalData

const Container = styled('form')`
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
const StyledForm = styled('div')(() => ({
   '& ': {
      width: '100%',
      display: 'flex',
      justifyContent: 'start',
      gap: '30px',
      marginBottom: '5px',
   },
   '& div ': {
      width: '100%',
      borderRadius: ' 8px',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& ': {
      width: '100%',
      borderRadius: '8px',
      border: '1px solid #c5c5c5',
      margin: '4px 5px 26px 2px ',
   },
   '& :hover': {
      borderRadius: '8px',
      border: '1px  #83edf5',
   },
   ' &:focus': {
      borderRadius: '8px',
      border: '1px solid #959595',
   },
   '&:active': {
      borderRadius: '8px',
      border: '1px solid #048741',
   },
   '& :invalid': {
      borderRadius: '8px',
      border: '2px solid #f91515',
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

const StyledInputLabel = styled(InputLabel)(() => ({
   '&': {
      fontSize: '1rem',
      color: '#464444',
      fontFamily: 'Manrope',
      fontWeight: 400,
      lineHeight: '19px',
   },
}))
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
