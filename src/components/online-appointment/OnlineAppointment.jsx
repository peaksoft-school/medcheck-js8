import { useState } from 'react'
import { styled } from '@mui/material'
import SideDrawer from '../UI/SideDrawer'
import ChooseDate from './ChooseDate'
import ChooseSpecialist from './ChooseSpecialist'
import MainOnlineAppointment from './MainOnlineAppointment'
import { ReactComponent as CloseIcon } from '../../assets/online-appoinment-icons/closeIcon.svg'
import { ReactComponent as GoBackIcon } from '../../assets/online-appoinment-icons/goBack.svg'

const OnlineAppointment = ({ open, onClose }) => {
   const [main, setMain] = useState(true)
   const [specialist, setSpecialist] = useState(false)
   const [date, setDate] = useState(false)

   const openChooseSpecialist = () => {
      setMain(false)
      setSpecialist(true)
   }

   const openDate = () => {
      setMain(false)
      setDate(true)
   }

   const goBack = () => {
      setSpecialist(false)
      setDate(false)
      setMain(true)
   }

   return (
      <SideDrawer open={open} onClose={onClose}>
         <Container>
            {main ? <Close onClick={onClose} /> : <GoBack onClick={goBack} />}
            <Header>
               <Title>
                  {main && 'Онлайн Запись'}
                  {specialist && 'Выбрать специалиста'}
                  {date && 'Выбрать дату и время'}
               </Title>
            </Header>
            {main && (
               <MainOnlineAppointment
                  onClose={onClose}
                  openChooseSpecialist={openChooseSpecialist}
                  openDate={openDate}
               />
            )}
            {specialist && <ChooseSpecialist />}
            {date && <ChooseDate />}
         </Container>
      </SideDrawer>
   )
}

export default OnlineAppointment

const Container = styled('div')(() => ({
   '&': {
      background: ' #F3F1F1',
      height: '100vh',
   },
}))

const Header = styled('div')(() => ({
   background: '#fff',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const Close = styled(CloseIcon)(() => ({
   cursor: 'pointer',
   position: 'absolute',
   top: '16px',
   left: '16px',
}))
const GoBack = styled(GoBackIcon)(() => ({
   cursor: 'pointer',
   position: 'absolute',
   top: '16px',
   left: '16px',
}))

const Title = styled('h4')(() => ({
   margin: '17px auto',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '700',
   fontSize: '16px',
   color: '#048741',
}))
