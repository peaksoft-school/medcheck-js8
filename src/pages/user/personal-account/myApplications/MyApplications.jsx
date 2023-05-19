import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Stack, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AppointmentTable from '../../../../components/UI/AppointmentTable'
import { ReactComponent as Deletelist } from '../../../../assets/icons/X1.svg'
// import { appointmentData } from '../../../../utlis/constants/commons'
import { getStatusTitleChangeHandler } from '../../../../utlis/helpers/general'
import { getUserAppointmentRequest } from '../../../../api/appointmentService'

const MyApplications = () => {
   const [patients, setPatients] = useState([])
   console.log('🚀 ~ patients:', patients)

   const fetchPatients = async () => {
      try {
         const { data } = await getUserAppointmentRequest()
         console.log('🚀 ~ data:', data)

         setPatients(data.response.results)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchPatients()
   }, [])

   const deleteorder = () => {
      setPatients([])
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
         <div
            style={{
               display: 'flex',
               alignItems: 'baseLine',
               gap: '5rem',
            }}
         >
            {patients.length !== 0 && (
               <>
                  <AppointmentTable
                     appointmentData={patients}
                     getStatusTitleChangeHandler={getStatusTitleChangeHandler}
                  />
                  <DeleteContainer>
                     <Deletelist />
                     <DeleteTitle onClick={deleteorder}>
                        Очистить список заказов
                     </DeleteTitle>
                  </DeleteContainer>
               </>
            )}
         </div>
      </StyledMyNotesContainer>
   )
}

export default MyApplications
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
   fontSize: '14px',
   color: '#222222',
   cursor: 'pointer',
})

const Title = styled('h2')({
   fontWeight: '600',
   fontSize: '24px',
   marginBottom: '40px',
   marginTop: '26px',
})
