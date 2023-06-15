import React, { useState } from 'react'
import { styled } from '@mui/material'
import { ReactComponent as ChooseServiceIcon } from '../../assets/online-appoinment-icons/chooseService.svg'
import { ReactComponent as ChooseSpecialistIcon } from '../../assets/online-appoinment-icons/chooseSpecialist.svg'
import { ReactComponent as ChooseDateIcon } from '../../assets/online-appoinment-icons/chooseDate.svg'
import { SelectUi } from '../UI/SelectUi'
import { MED_SERVICE } from '../../utlis/services/img_service'

const MainOnlineAppointment = ({ openChooseSpecialist, openDate }) => {
   const [service, setService] = useState('')

   const serviceChangeHandler = (e) => {
      setService(e.target.value)
   }

   return (
      <Wrapper>
         <Select
            icon={<ChooseServiceIcon />}
            value={service}
            onChange={serviceChangeHandler}
            placeholder="Выбрать услуги"
            items={MED_SERVICE}
            sx={{
               boxShadow: 'none',
               '.MuiOutlinedInput-notchedOutline': { border: 0 },
               '.css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper': {
                  top: 135,
               },
            }}
         />
         <ChooseCard onClick={openChooseSpecialist}>
            <SpecialistIcon />
            <p>Выбрать специалиста</p>
         </ChooseCard>
         <ChooseCard onClick={openDate}>
            <DateIcon />
            <p>Выбрать дату и время</p>
         </ChooseCard>
      </Wrapper>
   )
}

export default MainOnlineAppointment

const Wrapper = styled('div')(() => ({
   padding: '0 6px',
}))

const Select = styled(SelectUi)(() => ({
   padding: '36px 0',
   paddingLeft: '50px',
   margin: '6px 0',
   border: '1px solid #fff',
   outline: '1px solid #fff',
   borderRadius: '16px',
   background: '#ffffff',
   color: '#222222',
   fontSize: '16px',
   fontWeight: '500',
   'select:focus': {
      outline: 'none',
   },
   '&:hover': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
   '&:active': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
   '&:disabled': {
      '&& fieldset': {
         border: '1px solid #fff',
         outline: 'none',
      },
   },
}))

const ChooseCard = styled('div')(() => ({
   marginBottom: '6px',
   padding: '19px 16px',
   background: '#fff',
   color: '#222222',
   fontSize: '16px',
   fontWeight: '500',
   borderRadius: '16px',
   display: 'flex',
   alignItems: 'center',
   cursor: 'pointer',
}))

const SpecialistIcon = styled(ChooseSpecialistIcon)(() => ({
   marginRight: '12px',
}))
const DateIcon = styled(ChooseDateIcon)(() => ({
   marginRight: '12px',
}))
