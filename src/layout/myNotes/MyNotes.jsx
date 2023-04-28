import React from 'react'
import { Breadcrumbs, Stack, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Header from '../../components/header/Header'
import AppointmentTable from '../../components/UI/AppointmentTable'
import { appointmentData } from '../../utlis/constants/commons'
import { ReactComponent as Deletelist } from '../../assets/icons/X.svg'

const MyNotes = () => {
   const getStatusTitleChangeHandler = (statusTitle) => {
      if (statusTitle === 'Cancelled') {
         return 'Отменён'
      }
      if (statusTitle === 'Confirmed') {
         return 'Подтверждён'
      }
      if (statusTitle === 'Completed') {
         return 'Завершён'
      }
      return null
   }
   return (
      <>
         <Header />
         <StyledMyNotesContainer>
            <Stack spacing={2}>
               <Container separator="›" aria-label="breadcrumb">
                  <StyledNavLink>
                     <p>Личный кабинет</p>
                  </StyledNavLink>
                  <p>Мои записи</p>
               </Container>
            </Stack>
            <Title>Мои записи</Title>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'baseLine',
                  gap: '5rem',
               }}
            >
               <AppointmentTable
                  appointmentData={appointmentData}
                  getStatusTitleChangeHandler={getStatusTitleChangeHandler}
               />
               <DeleteContainer>
                  <Deletelist />
                  <DeleteTitle>Очистить список заказов </DeleteTitle>
               </DeleteContainer>
            </div>
         </StyledMyNotesContainer>
      </>
   )
}

export default MyNotes
const StyledMyNotesContainer = styled('div')({
   width: '100%',
   margin: '0 auto',
   marginLeft: '7.5rem',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
})

const StyledNavLink = styled(NavLink)({
   textDecoration: 'none',
   color: ' #959595',
})

const Container = styled(Breadcrumbs)({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '19px',
   marginTop: '30px',
   marginBottom: '26px',
   ':last-child': {
      color: '#048741',
   },
})
const DeleteContainer = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '4px',
})

const DeleteTitle = styled('p')({
   fontFamily: 'Manrope',
   fontSize: '14px',
   color: '#222222',
})

const Title = styled('h2')({
   fontWeight: '600',
   fontSize: '24px',
   marginBottom: '40px',
})
