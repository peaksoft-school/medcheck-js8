import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import useToast from '../../hooks/useToast'
import Button from '../../components/UI/Button'
import buttonPlusIcon from '../../assets/icons/ButtonPlusIcon.svg'
import AppointmentModal from '../../components/AppointmentModal'
import {
   getDepartmentRequest,
   getDoctorRequest,
} from '../../api/appointmentService'

const Appointment = () => {
   const { notify, ToastContainer } = useToast()
   const [open, setOpen] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [patients, setPatients] = useState([])
   const [doctors, setDoctors] = useState([])

   useEffect(() => {
      setPatients(patients)
   }, [patients])

   useEffect(() => {
      const getDoctors = async () => {
         try {
            const doctorResponse = await getDoctorRequest()
            setDoctors(doctorResponse.data)
         } catch (error) {
            notify('error', 'Ошибка')
         }
      }
      getDoctors()
   }, [])

   const openModal = async () => {
      setOpen(true)
      try {
         setIsLoading(true)
         const departmentResponse = await getDepartmentRequest()
         setIsLoading(false)
         setPatients(departmentResponse.data)
      } catch (error) {
         notify('error', 'Ошибка')
      }
   }
   const closeModal = () => {
      setOpen(false)
   }
   return (
      <MainContainer>
         <HeaderTitleBoxStyle>
            <p>Онлайн Запись</p>
            <ButtonStyle onClick={openModal}>
               <span>
                  <img src={buttonPlusIcon} alt="plus" />
               </span>{' '}
               Добавить запись
            </ButtonStyle>
         </HeaderTitleBoxStyle>
         <NavLinkBox>
            <NavLinkStyled
               to="online-appointment"
               style={({ isActive }) => ({
                  color: isActive ? '#048741' : '#707070',
                  borderBottom: isActive && '1px solid #048741',
                  paddingBottom: '0.9rem',
               })}
            >
               Онлайн-запись
            </NavLinkStyled>
            <NavLinkStyled
               to="schedule"
               style={({ isActive }) => ({
                  color: isActive ? '#048741' : '#707070',
                  borderBottom: isActive && '1px solid #048741',
               })}
            >
               Расписание
            </NavLinkStyled>
         </NavLinkBox>
         <Outlet />
         {ToastContainer}

         <AppointmentModal
            toastContainer={ToastContainer}
            isLoading={isLoading}
            close={closeModal}
            open={open}
            departmentData={patients}
            doctorData={doctors}
         />
      </MainContainer>
   )
}

export default Appointment
const MainContainer = styled('div')(() => ({
   '&': {
      width: '100%',
      height: '100vh',
      background: 'rgba(245, 245, 245, 0.61)',
      padding: '30px 70px',
   },
}))
const HeaderTitleBoxStyle = styled('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Manrope',
      p: {
         fontWeight: 400,
         fontSize: '22px',
         lineHight: '30px',
         color: '#222222',
      },
   },
}))
const ButtonStyle = styled(Button)(() => ({
   '&': {
      padding: '12.5px 30px',
      span: {
         width: '12.6px',
         height: '12.6px',
         marginRight: '15px',
      },
   },
}))

const NavLinkStyled = styled(NavLink)(() => ({
   textDecoration: 'none',
   fontFamily: 'Manrope',
   fontWeight: 600,
   fontSize: '12px',
   lineHeight: '16px',
   letterSpacing: '1px',
   textTransform: 'uppercase',

   '&:active, &.active': {
      color: '#048741',
   },
}))
const NavLinkBox = styled('div')(() => ({
   '&': {
      display: 'flex',
      gap: '30px',
      margin: '34px 0',
   },
}))
