import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress, IconButton, InputLabel } from '@mui/material'
import { format, formatISO, isValid } from 'date-fns'
import { ReactComponent as CloseIcon } from '../assets/login/CloseIcon.svg'
import DatePicker from './UI/DatePicker'
import {
   INTERVAL_TIME_DATA,
   WEEK_REPETATION_DATA,
} from '../utlis/constants/commons'
import minus from '../assets/icons/MinusIcon.svg'
import { SelectUi } from './UI/SelectUi'
import BasicModal from './UI/ModalUi'
import BasicTimePicker from './UI/TimePicker'
import Button from './UI/Button'
import { DoctorsSelect } from './UI/DoctorsSelect'
import { postScheduleRequest } from '../api/appointmentService'
import { ServiceSelect } from './UI/ServiceSelect'
import useToast from '../hooks/useToast'

const AppointmentModal = ({
   isLoading,
   close,
   open,
   departmentData,
   doctorData,
}) => {
   const { notify, ToastContainer } = useToast()
   const [selectedServiceValue, setSelectedServiceValue] = useState('')
   const [selectedSpecialistValue, setSelectedSpecialistValue] = useState('')
   const [selectedIntervalValue, setSelectedIntervalValue] = useState('')
   const [startSelectedDate, setStartSelectedDate] = useState('')
   const [endSelectedDate, setEndSelectedDate] = useState('')
   const [selectedFromTime, setSelectedFromTime] = useState('')
   const [selectedUntilTime, setSelectedUntilTime] = useState('')
   const [selectedFromTimeBreak, setSelectedFromTimeBreak] = useState('')
   const [selectedUntilTimeBreak, setSelectedUntilTimeBreak] = useState('')
   const [days, setDays] = useState(WEEK_REPETATION_DATA)
   const [filteredDoctors, setFilteredDoctors] = useState([])

   useEffect(() => {
      setSelectedSpecialistValue('')
      setFilteredDoctors(
         doctorData.filter(
            (filteredDoctor) =>
               filteredDoctor.name.localeCompare(
                  selectedServiceValue.toUpperCase()
               ) === 0 && filteredDoctor.dataOfFinish === null
         )
      )
   }, [selectedServiceValue, doctorData])

   const fromTime =
      selectedFromTime && isValid(new Date(selectedFromTime))
         ? format(new Date(selectedFromTime), 'HH:mm')
         : ''
   const untilTime =
      selectedUntilTime && isValid(new Date(selectedUntilTime))
         ? format(new Date(selectedUntilTime), 'HH:mm')
         : ''
   const fromTimeBreak =
      selectedFromTimeBreak && isValid(new Date(selectedFromTimeBreak))
         ? format(new Date(selectedFromTimeBreak), 'HH:mm')
         : ''
   const untilTimeBreak =
      selectedUntilTimeBreak && isValid(new Date(selectedUntilTimeBreak))
         ? format(new Date(selectedUntilTimeBreak), 'HH:mm')
         : ''

   const formattedStartDate = startSelectedDate
      ? formatISO(startSelectedDate, { representation: 'date' })
      : ''

   const formattedEndDate = endSelectedDate
      ? formatISO(endSelectedDate, { representation: 'date' })
      : ''

   const changeWeekHandler = (id) => {
      setDays((prevState) => {
         return prevState.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  checked: !item.checked,
               }
            }
            return item
         })
      })
   }

   const handleTimeFromChange = (time) => {
      setSelectedFromTime(time)
   }
   const handleTimeUntilChange = (time) => {
      setSelectedUntilTime(time)
   }
   const handleTimeFromBreakChange = (time) => {
      setSelectedFromTimeBreak(time)
   }
   const handleTimeUntilBreakChange = (time) => {
      setSelectedUntilTimeBreak(time)
   }
   const changeServiceHandler = (event) => {
      setSelectedServiceValue(event.target.value)
   }
   const changeSpecialistHandler = (event) => {
      setSelectedSpecialistValue(event.target.value)
   }
   const changeIntervalHandler = (event) => {
      setSelectedIntervalValue(event.target.value)
   }
   const handleStartDateChange = (date) => {
      setStartSelectedDate(date)
   }
   const handleEndDateChange = (date) => {
      setEndSelectedDate(date)
   }

   const publishHandler = async () => {
      const selectedDays = days.reduce((result, day) => {
         result[day.week] = day.checked
         return result
      }, {})

      const hours = selectedIntervalValue
      let number = parseFloat(hours.match(/\d+(\.\d+)?/)[0])
      const value = number < 2 ? (number *= 60) : number

      try {
         const data = {
            department: selectedServiceValue.toUpperCase(),
            doctorId: selectedSpecialistValue,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            startTime: fromTime,
            endTime: untilTime,
            interval: value,
            startBreak: fromTimeBreak,
            endBreak: untilTimeBreak,
            repeatDays: selectedDays,
         }
         await postScheduleRequest(data)
         notify('success', 'Successfully added!')
         setSelectedServiceValue('')
         setSelectedSpecialistValue('')
         setSelectedIntervalValue('')
         setStartSelectedDate('')
         setEndSelectedDate('')
         setSelectedFromTime('')
         setSelectedUntilTime('')
         setSelectedFromTimeBreak('')
         setSelectedUntilTimeBreak('')
         close()
      } catch (error) {
         notify('error', error.response?.data.message)
      }
   }
   return (
      <div>
         {ToastContainer}
         <StyleModal open={open} onClose={close}>
            {isLoading ? (
               <LoaderStyle color="success" />
            ) : (
               <ModalStyle>
                  <>
                     <CloseIconStyle onClick={close}>
                        <CloseIcon className="closeIcon" />
                     </CloseIconStyle>
                     <HeaderModalTitlwe>Добавление записей</HeaderModalTitlwe>
                     <Box>
                        <InputLabel>Услуга</InputLabel>
                        <ServiceSelect
                           placeholder="Выберите услугу"
                           value={selectedServiceValue}
                           onChange={changeServiceHandler}
                           items={departmentData}
                        />
                        <InputLabel>Специалист</InputLabel>
                        <DoctorsSelect
                           placeholder="Выберите специалиста"
                           value={selectedSpecialistValue}
                           onChange={changeSpecialistHandler}
                           items={filteredDoctors}
                        />
                        <DataPickerBox>
                           <div>
                              <InputLabel>Дата начала</InputLabel>
                              <DatePicker
                                 value={startSelectedDate}
                                 onChange={handleStartDateChange}
                              />
                           </div>
                           <MinusImageStyle src={minus} alt="minus" />
                           <div>
                              <InputLabel>Дата окончания</InputLabel>
                              <DatePicker
                                 value={endSelectedDate}
                                 onChange={handleEndDateChange}
                              />
                           </div>
                        </DataPickerBox>
                        <TimeBoxStyle>
                           <div>
                              <InputLabel>Время от</InputLabel>

                              <BasicTimePicker
                                 value={selectedFromTime}
                                 onChange={handleTimeFromChange}
                              />
                           </div>
                           <img src={minus} alt="minus" />
                           <div>
                              <InputLabel>Время до</InputLabel>
                              <BasicTimePicker
                                 value={selectedUntilTime}
                                 onChange={handleTimeUntilChange}
                              />
                           </div>
                           <IntervalBoxTimer>
                              <InputLabel>Интервал часов</InputLabel>
                              <SelectIntervalStyle
                                 placeholder="Выберите интервал часов"
                                 value={selectedIntervalValue}
                                 onChange={changeIntervalHandler}
                                 items={INTERVAL_TIME_DATA}
                              />
                           </IntervalBoxTimer>
                        </TimeBoxStyle>
                        <TimeBoxStyleSecond>
                           <div>
                              <InputLabel>Время от</InputLabel>
                              <BasicTimePicker
                                 value={selectedFromTimeBreak}
                                 onChange={handleTimeFromBreakChange}
                              />
                           </div>
                           <img src={minus} alt="minus" />
                           <div>
                              <InputLabel>Время до</InputLabel>
                              <BasicTimePicker
                                 value={selectedUntilTimeBreak}
                                 onChange={handleTimeUntilBreakChange}
                              />
                           </div>
                           <p>Выберите время для перерыва</p>
                        </TimeBoxStyleSecond>
                        <div>
                           <InputLabel>Дни повторения</InputLabel>
                           <WeekStyleBox>
                              {days.map((day) => (
                                 <div key={day.id}>
                                    <DaysContainer
                                       type="button"
                                       onClick={() => changeWeekHandler(day.id)}
                                       isCheck={day.checked}
                                    >
                                       {day.week}
                                    </DaysContainer>
                                 </div>
                              ))}
                           </WeekStyleBox>
                        </div>
                        <div>
                           <ButtonCanceldStyle onClick={close}>
                              Отменить
                           </ButtonCanceldStyle>
                           <ButtonPublishStyle onClick={publishHandler}>
                              опубликовать
                           </ButtonPublishStyle>
                        </div>
                     </Box>
                  </>
               </ModalStyle>
            )}
         </StyleModal>
      </div>
   )
}

export default AppointmentModal

const StyleModal = styled(BasicModal)(() => ({
   '& .MuiBox-root': {
      borderRadius: '10px',
   },
}))

const DaysContainer = styled('button')(({ isCheck }) => ({
   background: isCheck ? '#3977C0' : '#ffff',
   color: isCheck ? '#FFFFFF' : '#959595',
   fontSize: '16px',
   width: '53px',
   height: '42px',
   border: '1px solid #D9D9D9',
   borderRadius: '10px',
   textAlign: 'center',
   fontFamily: 'Manrope',
}))
const WeekStyleBox = styled('div')(() => ({
   '&': {
      display: 'flex',
      gap: '13px',
   },
}))
const Box = styled('div')(() => ({
   '&': {
      padding: '35px 39px',
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '19px',
      color: '#959595',
   },
}))

const DataPickerBox = styled('div')(() => ({
   '&': {
      display: 'flex',
      marginTop: '22px',
   },
}))
const HeaderModalTitlwe = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '33px',
      textAlign: 'center',
   },
}))

const CloseIconStyle = styled(IconButton)(() => ({
   '&': {
      textAlign: 'end',
   },
}))

const TimeBoxStyle = styled('div')(() => ({
   display: 'flex',
   marginTop: '18px',

   img: {
      margin: '21px 10px 0 10px',
   },
   P: {
      margin: '40px 0 0 18px',
   },
}))
const TimeBoxStyleSecond = styled('div')(() => ({
   display: 'flex',
   margin: '15px 0',

   img: {
      margin: '23px 10px 0 10px',
   },
   P: {
      margin: '31px 0 0 18px',
   },
}))
const MinusImageStyle = styled('img')(() => ({
   width: '6px',
   height: '22px',
   margin: '27px 8px 0 8px',
}))
const ModalStyle = styled('div')(() => ({
   '&': {
      width: '570px',
      height: '658px',
   },
   '& .closeIcon': {
      marginLeft: '523px',
      marginTop: '13px',
      cursor: 'pointer',
   },
}))
const IntervalBoxTimer = styled('div')(() => ({
   '&': {
      margin: '0px 0 0 15px',
   },
}))
const SelectIntervalStyle = styled(SelectUi)(() => ({
   '&': {
      width: '270px',
   },
}))

const ButtonCanceldStyle = styled(Button)(() => ({
   '&': {
      padding: '10px 80.5px ',
      background: 'none',
      color: '#959595',
      border: '1px solid #959595',
      marginTop: '27px',
   },
   '&:hover': {
      background: '#959595',
      color: '#fff',
   },
   '&:active': {
      background: '#959595',
      color: '#fff',
   },
   '&:disabled': {
      background: '#D3D3D3',
      color: '#FFFF',
   },
}))
const ButtonPublishStyle = styled(Button)(() => ({
   '&': {
      padding: '10px 68px ',
      margin: '27px 0 0 20px',
   },
}))
const LoaderStyle = styled(CircularProgress)(() => ({
   '&': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      svg: {
         color: '#00ec33 ',
      },
   },
}))
