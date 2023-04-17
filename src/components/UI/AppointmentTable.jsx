import {
   Paper,
   Grid,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { appointmentData } from '../../utlis/constants/commons'

const AppointmentTable = () => {
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
      <Grid>
         <PaperStyled>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCellHeaderStyled>
                        Выбор специалиста
                     </TableCellHeaderStyled>
                     <TableCellHeaderStyled>Дата и время</TableCellHeaderStyled>
                     <TableCellHeaderStyled>Статус</TableCellHeaderStyled>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {appointmentData.map((patient) => (
                     <TableRow key={patient.id}>
                        <TableCell component="th">
                           <Box>
                              <IconStyled
                                 src={patient.img}
                                 alt="patientImage"
                              />

                              <TitleBox>
                                 <ChangeSpecialistTitleStyled>
                                    {patient.changeSpecialist}
                                 </ChangeSpecialistTitleStyled>
                                 <ServiceSelectionTitleStyled>
                                    {patient.serviceSelection}
                                 </ServiceSelectionTitleStyled>
                              </TitleBox>
                           </Box>
                        </TableCell>
                        <TableCell>
                           <DateAndTimeBox>
                              <DateTitleStyled>{patient.date}</DateTitleStyled>
                              <TimeTitleStyled> {patient.time}</TimeTitleStyled>
                           </DateAndTimeBox>
                        </TableCell>
                        <StatusTitleleStyled
                           statusTitle={patient.status}
                           statusColor={patient.status}
                        >
                           {getStatusTitleChangeHandler(patient.status)}
                        </StatusTitleleStyled>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </PaperStyled>
      </Grid>
   )
}

export default AppointmentTable

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
const StatusTitleleStyled = styled(TableCell, {
   shouldForwardProp: (propName) =>
      propName !== 'statusColor' && propName !== 'statusTitle',
})(({ statusColor }) => ({
   '&': {
      color: getStatusColorChangeHandler(statusColor),
      fontFamily: 'Manrope',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
   },
}))
const PaperStyled = styled(Paper)(() => ({
   '&': {
      fontFamily: 'Manrope',
      width: '600px',
      boxShadow: 'none',
   },
}))

const IconStyled = styled('img')(() => ({
   '&': {
      width: '40px',
      height: '40px',
      borderRadius: '30px',
   },
}))

const Box = styled('div')(() => ({
   '&': {
      fontFamily: 'Manrope',
      display: 'flex',
      alignItems: 'center',
   },
}))
const ServiceSelectionTitleStyled = styled('span')(() => ({
   '&': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '19px',
      color: '#959595',
   },
}))
const ChangeSpecialistTitleStyled = styled('span')(() => ({
   '&': {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
   },
}))
const TitleBox = styled('span')(() => ({
   '&': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '10px',
   },
}))
const DateAndTimeBox = styled('span')(() => ({
   '&': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
   },
}))

const DateTitleStyled = styled('span')(() => ({
   '&': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
   },
}))
const TimeTitleStyled = styled('span')(() => ({
   '&': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#4d4e51',
   },
}))
const TableCellHeaderStyled = styled(TableCell)(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '19px',
   },
}))
