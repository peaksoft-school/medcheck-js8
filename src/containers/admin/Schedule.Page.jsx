import React, { useMemo, useState } from 'react'
import { styled } from '@mui/system'
import SearchInput from '../../components/UI/SeacrchInput'
import Button from '../../components/UI/Button'
import DatePicker from '../../components/UI/DatePicker'
import minus from '../../assets/icons/MinusIcon.svg'
import AppTable from '../../components/UI/Table'
import { tableTd } from '../../utlis/constants/table'

const SchedulePage = () => {
   const [startDate, setStartDate] = useState('')
   const [endDate, setEndDate] = useState('')

   const startDateHandler = (date) => {
      setStartDate(date)
   }
   const endDateHandler = (date) => {
      setEndDate(date)
   }

   const column = useMemo(
      () => [
         {
            header: 'Специалисты',
            key: 'name',
            render: (doctor) => (
               <DoctorInfoBox>
                  <img src={doctor.img} alt="" />
                  <DoctorNameTitle>{doctor.name}</DoctorNameTitle>
                  <DoctorDescriptionTitle>
                     {doctor.description}
                  </DoctorDescriptionTitle>
               </DoctorInfoBox>
            ),
         },
         {
            header: 'ПН 26 Июнь',
            key: '1',
            render: () => (
               <TimeBox>
                  <p>11:00 - 13:00</p>
                  <p>15:00 - 16:00</p>
               </TimeBox>
            ),
         },
         {
            header: 'ВТ 27 Июнь',
            key: '2',
         },
         {
            header: 'СР 28 Июнь',
            key: '3',
            render: () => (
               <TimeBox>
                  <p>11:00 - 13:00</p>
                  <p>15:00 - 16:00</p>
               </TimeBox>
            ),
         },
         {
            header: 'ЧТ 29 Июнь',
            key: '4',
         },
         {
            header: 'ПТ 30 Июнь',
            key: '5',
         },
         {
            header: 'СБ 1 Июль',
            key: '6',
         },
         {
            header: 'ВС 2 Июль',
            key: '7',
         },
         {
            header: 'ПН 3 Июль',
            key: '8',
         },
         {
            header: 'ПН 4 Июль',
            key: '9',
         },
         {
            header: 'СР 5 Июль',
            key: '10',
         },
      ],
      []
   )

   return (
      <div>
         <SearchInputBox>
            <SearchInput placeholder="Поиск" />
         </SearchInputBox>

         <Box>
            <ButtonBox>
               <ButtonsStyled>Изменить день</ButtonsStyled>
               <ButtonsStyled>Установить по шаблону</ButtonsStyled>
            </ButtonBox>
            <div>
               <DatePicker value={startDate} onChange={startDateHandler} />

               <MinusImgStyle src={minus} alt="minus" />

               <DatePicker value={endDate} onChange={endDateHandler} />
            </div>
         </Box>
         <GlobalContainer>
            <TableBox>
               <AppTable columns={column} rows={tableTd} />
            </TableBox>
         </GlobalContainer>
      </div>
   )
}

export default SchedulePage

const SearchInputBox = styled('div')(() => ({
   '&': {
      width: '600px',
      marginBottom: '20px',

      div: {
         background: '#FFFFFF',
      },
      input: {
         background: '#FFFFFF',
      },
   },
}))
const ButtonsStyled = styled(Button)(() => ({
   '&': {
      padding: '8px 20px 9px 20px',
      color: '#4D4E51',
      background: '#E0E2E7',
      borderRadius: '4px',
      marginLeft: '20px',
   },

   '&:hover': {
      background: '#048741',
      color: '#fff',
   },
   '&:active': {
      background: '#048741',
      color: '#FFFF',
   },
}))
const Box = styled('div')`
   display: flex;
   justify-content: space-between;
   background-color: #fff;
   padding: 20px 20px 20px 0;
`
const GlobalContainer = styled('div')`
   background-color: #fff;
   padding: 10px 0;
   height: 1400vh;
`
const ButtonBox = styled('div')``
const MinusImgStyle = styled('img')`
   padding: 18px 10px 0px 10px;
`
const TableBox = styled('div')`
   table {
      font-family: Manrope;
      width: 100%;
   }
   table,
   th,
   td {
      border: 1px solid #d9d9d9;
      border-collapse: collapse;
   }
`
const DoctorInfoBox = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: Manrope;
   font-weight: 500;
`
const DoctorNameTitle = styled('p')`
   font-size: 14px;
   line-height: 19.12px;
   color: #222222;
`
const DoctorDescriptionTitle = styled('p')`
   font-size: 12px;
   line-height: 16.39px;
   color: #959595;
`
const TimeBox = styled('div')`
   background: #dbebff;
   width: 93px;
   border-left: 3px solid #1f6ed4;
   color: #1f6ed4;
`
