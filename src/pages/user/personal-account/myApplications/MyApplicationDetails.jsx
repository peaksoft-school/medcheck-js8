import React from 'react'
import { Breadcrumbs, Stack, styled } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { appointmentData } from '../../../../utlis/constants/commons'

const infoCustomer = [
   {
      id: '2',
      data: 'Подвержден',
      infoName: 'Айназик',
      infoSurname: 'Бакытова',
      infoEmail: 'ainazik@gmail.com',
      infoPhoneNumber: '+996 707 123 456',
      infoDate: '23.01.23',
      infoTime: '11:30',
      infoSpecialist: ' Манак Елена',
      infoService: 'Дерматалогия',
   },
]

const MyApplicationDetails = () => {
   const { id } = useParams()
   const detailsCustomerID = appointmentData.find((elem) => elem.id === id)

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
         {infoCustomer.map((item) => {
            return (
               <MapContainer key={item.id}>
                  <div>
                     <Wrapper>
                        <P>Статус</P>
                        <StyledStatus statusColor={detailsCustomerID.status}>
                           {getStatusTitleChangeHandler(
                              detailsCustomerID.status
                           )}
                        </StyledStatus>
                     </Wrapper>
                     <Wrapper>
                        <P>Имя</P>
                        <StyledInfoCustomer>{item.infoName}</StyledInfoCustomer>
                     </Wrapper>
                     <Wrapper>
                        <P>Фамилия</P>
                        <StyledInfoCustomer>
                           {item.infoSurname}
                        </StyledInfoCustomer>
                     </Wrapper>
                     <Wrapper>
                        <P>Email</P>
                        <StyledInfoCustomer>
                           {item.infoEmail}
                        </StyledInfoCustomer>
                     </Wrapper>
                     <Wrapper>
                        <P>Телефон номера</P>
                        <StyledInfoCustomer>
                           {item.infoPhoneNumber}
                        </StyledInfoCustomer>
                     </Wrapper>
                  </div>
                  <div>
                     <Wrapper>
                        <P>Дата</P>
                        <StyledInfoCustomer>
                           {detailsCustomerID.date}
                        </StyledInfoCustomer>
                        <StyledInfoCustomer>
                           {detailsCustomerID.time}
                        </StyledInfoCustomer>
                     </Wrapper>
                     <Wrapper>
                        <P>Специалист</P>
                        <StyledInfoCustomer>
                           {detailsCustomerID.changeSpecialist}
                        </StyledInfoCustomer>
                     </Wrapper>
                     <Wrapper>
                        <P>Услуга</P>
                        <StyledInfoCustomer>
                           {detailsCustomerID.serviceSelection}
                        </StyledInfoCustomer>
                     </Wrapper>
                  </div>
               </MapContainer>
            )
         })}
      </StyledMyNotesContainer>
   )
}

export default MyApplicationDetails
const getStatusColorChangeHandler = (statusColor) => {
   if (statusColor === 'Cancelled') {
      return '#F91515'
   }
   if (statusColor === 'Confirmed') {
      return '#346EFB'
   }
   if (statusColor === 'Completed') {
      return '#07AB53'
   }
   return null
}
const StyledStatus = styled('p')(({ statusColor }) => ({
   '&': {
      background: getStatusColorChangeHandler(statusColor),
      borderRadius: '6px',
      alignItems: 'flex-start',
      padding: '6px 10px',
      display: 'flex',
   },
}))

const StyledMyNotesContainer = styled('div')({
   margin: '0 auto',
   marginLeft: '7.5rem',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   marginTop: '30px',
   marginBottom: '120px',
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

const Title = styled('h2')({
   fontWeight: '600',
   fontSize: '24px',
   marginBottom: '40px',
   marginTop: '26px',
})

const MapContainer = styled('div')({
   display: 'flex',
   gap: '5rem',
})

const P = styled('p')({
   fontFamily: 'Inter',
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '17px',
   color: ' #384255',
})

const StyledInfoCustomer = styled('p')({
   fontFamily: 'Manrope',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '22px',
   color: '#222222',
})

const Wrapper = styled('div')({
   marginBottom: '12px',
})
