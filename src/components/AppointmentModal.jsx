import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress, IconButton, InputLabel } from '@mui/material'
import { useFormik } from 'formik'
import dayjs from 'dayjs'
import * as Yup from 'yup'
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
   const { notify } = useToast()
   const [days, setDays] = useState(WEEK_REPETATION_DATA)
   const [filteredDoctors, setFilteredDoctors] = useState([])

   const publishHandler = async (data) => {
      const selectedDays = days.reduce((result, day) => {
         result[day.week] = day.checked
         return result
      }, {})

      const hours = data.interval
      let number = parseFloat(hours.match(/\d+(\.\d+)?/)[0])
      const value = number < 2 ? (number *= 60) : number
      console.log(value)

      try {
         const newData = {
            ...data,
            interval: value,
            repeatDays: selectedDays,
         }
         await postScheduleRequest(newData)
         notify('success', 'Successfully added!')
         close()
      } catch (error) {
         notify('error', error.response?.data.message)
      }
   }

   const formik = useFormik({
      initialValues: {
         selectedServiceValue: '',
         selectedSpecialistValue: '',
         selectedIntervalValue: '',
         startSelectedDate: '',
         endSelectedDate: '',
         selectedFromTime: '',
         selectedUntilTime: '',
         selectedFromTimeBreak: '',
         selectedUntilTimeBreak: '',
      },
      onSubmit: (values) => {
         const data = {
            department: values.selectedServiceValue.toUpperCase(),
            doctorId: values.selectedSpecialistValue,
            interval: values.selectedIntervalValue,
            startDate: dayjs(values.startSelectedDate).format('YYYY-MM-DD'),
            endDate: dayjs(values.endSelectedDate).format('YYYY-MM-DD'),
            startTime: dayjs(values.selectedFromTime).format('HH:mm'),
            endTime: dayjs(values.selectedUntilTime).format('HH:mm'),
            startBreak: dayjs(values.selectedFromTimeBreak).format('HH:mm'),
            endBreak: dayjs(values.selectedUntilTimeBreak).format('HH:mm'),
         }
         publishHandler(data)
      },
      validateOnBlur: true,
      validationSchema: Yup.object().shape({
         gender: Yup.string().required('Обязательное поле'),
      }),
   })
   useEffect(() => {
      const { values } = formik
      formik.setFieldValue('selectedSpecialistValue', '')
      setFilteredDoctors(
         doctorData.filter(
            (filteredDoctor) =>
               filteredDoctor.name.localeCompare(
                  values.selectedServiceValue.toUpperCase()
               ) === 0 && filteredDoctor.dataOfFinish === null
         )
      )
   }, [formik.values.selectedServiceValue, doctorData])
   // const translateServiceHandler = (englishService) => {
   //    console.log(englishService, 'mm')

   //    const transletedServices = englishService.map((engService) => {
   //       switch (engService) {
   //          case 'allergology':
   //             return 'аллергиялогия'
   //          case 'anesthesiology':
   //             return 'анестезиология'
   //          case 'vaccination':
   //             return 'вакцинация'
   //          case 'gastroenterology':
   //             return 'гастроэнтерология'
   //          case 'gynecology':
   //             return 'гинекология'
   //          case 'dermatology':
   //             return 'дерматология'
   //          case 'cardiology':
   //             return 'кардиология'
   //          case 'neurology':
   //             return 'неврология'
   //          case 'neurosurgery':
   //             return 'нейрохирургия'
   //          case 'oncology':
   //             return 'онкология'
   //          case 'orthopedics':
   //             return 'ортопедия'
   //          case 'otorhinolaryngology':
   //             return 'оториноларингология'
   //          case 'ophthalmology':
   //             return 'офтальмология'
   //          case 'proctology':
   //             return 'проктология'
   //          case 'psychotherapy':
   //             return 'психтерапия'
   //          case 'pulmonology':
   //             return 'пульмонология'
   //          case 'rheumatology':
   //             return 'ревмотология'
   //          case 'therapy':
   //             return 'терапия'
   //          case 'urology':
   //             return 'урология'
   //          case 'phlebology':
   //             return 'флебология'
   //          case 'physiotherapy':
   //             return 'психтерапия'
   //          case 'endocrinology':
   //             return 'эндокринология'
   //          default:
   //             return englishService
   //       }
   //    })
   //    return transletedServices
   // }

   const handleFromTime = (time) => {
      formik.setFieldValue('selectedFromTime', time)
   }
   const handleUntillTime = (time) => {
      formik.setFieldValue('selectedUntilTime', time)
   }
   const handleFromTimeBreak = (time) => {
      formik.setFieldValue('selectedFromTimeBreak', time)
   }
   const handleUntillTimeBreak = (time) => {
      formik.setFieldValue('selectedUntilTimeBreak', time)
   }
   const handleStartDateChange = (date) => {
      formik.setFieldValue('startSelectedDate', date)
   }

   const handleEndDateChange = (date) => {
      formik.setFieldValue('endSelectedDate', date)
   }
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

   return (
      <div>
         <StyleModal open={open} onClose={close}>
            {isLoading ? (
               <LoaderStyle color="success" />
            ) : (
               <form onSubmit={formik.handleSubmit}>
                  <ModalStyle>
                     <>
                        <CloseIconStyle onClick={close}>
                           <CloseIcon className="closeIcon" />
                        </CloseIconStyle>
                        <HeaderModalTitlwe>
                           Добавление записей
                        </HeaderModalTitlwe>
                        <Box>
                           <InputLabelStyle>Услуга</InputLabelStyle>
                           <ServiceSelect
                              formik={formik}
                              name="selectedServiceValue"
                              placeholder="Выберите услугу"
                              value={formik.values.selectedServiceValue}
                              onChange={formik.handleChange}
                              items={departmentData}
                              onBlur={formik.handleBlur}
                           />
                           <InputLabelStyle>Специалист</InputLabelStyle>
                           <DoctorsSelect
                              name="selectedSpecialistValue"
                              placeholder="Выберите специалиста"
                              value={formik.values.selectedSpecialistValue}
                              onChange={formik.handleChange}
                              items={filteredDoctors}
                           />
                           <DataPickerBox>
                              <div>
                                 <InputLabelStyle>Дата начала</InputLabelStyle>
                                 <DatePicker
                                    name="startSelectedDate"
                                    value={formik.values.startSelectedDate}
                                    onChange={handleStartDateChange}
                                    minDate={formik.values.startSelectedDate}
                                    maxDate={formik.values.endSelectedDate}
                                 />
                              </div>
                              <MinusImageStyle src={minus} alt="minus" />
                              <div>
                                 <InputLabelStyle>
                                    Дата окончания
                                 </InputLabelStyle>
                                 <DatePicker
                                    name="endSelectedDate"
                                    value={formik.values.endSelectedDate}
                                    onChange={handleEndDateChange}
                                    minDate={formik.values.startSelectedDate}
                                    maxDate={formik.values.endSelectedDate}
                                 />
                              </div>
                           </DataPickerBox>
                           <TimeBoxStyle>
                              <div>
                                 <InputLabelStyle>Время от</InputLabelStyle>

                                 <BasicTimePicker
                                    name="selectedFromTime"
                                    value={formik.values.selectedFromTime}
                                    onChange={handleFromTime}
                                 />
                              </div>
                              <img src={minus} alt="minus" />
                              <div>
                                 <InputLabelStyle>Время до</InputLabelStyle>
                                 <BasicTimePicker
                                    name="selectedUntilTime"
                                    value={formik.values.selectedUntilTime}
                                    onChange={handleUntillTime}
                                 />
                              </div>
                              <IntervalBoxTimer>
                                 <InputLabelStyle>
                                    Интервал часов
                                 </InputLabelStyle>
                                 <SelectIntervalStyle
                                    name="selectedIntervalValue"
                                    placeholder="Выберите интервал часов"
                                    value={formik.values.selectedIntervalValue}
                                    onChange={formik.handleChange}
                                    items={INTERVAL_TIME_DATA}
                                 />
                              </IntervalBoxTimer>
                           </TimeBoxStyle>
                           <TimeBoxStyleSecond>
                              <div>
                                 <InputLabelStyle>Время от</InputLabelStyle>
                                 <BasicTimePicker
                                    name="selectedFromTimeBreak"
                                    value={formik.values.selectedFromTimeBreak}
                                    onChange={handleFromTimeBreak}
                                 />
                              </div>
                              <img src={minus} alt="minus" />
                              <div>
                                 <InputLabelStyle>Время до</InputLabelStyle>
                                 <BasicTimePicker
                                    name="selectedUntilTimeBreak"
                                    value={formik.values.selectedUntilTimeBreak}
                                    onChange={handleUntillTimeBreak}
                                 />
                              </div>
                              <p>Выберите время для перерыва</p>
                           </TimeBoxStyleSecond>
                           <div>
                              <InputLabelStyle>Дни повторения</InputLabelStyle>
                              <WeekStyleBox>
                                 {days.map((day) => (
                                    <div key={day.id}>
                                       <DaysContainer
                                          type="button"
                                          onClick={() =>
                                             changeWeekHandler(day.id)
                                          }
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
                              <ButtonPublishStyle type="submit">
                                 опубликовать
                              </ButtonPublishStyle>
                           </div>
                        </Box>
                     </>
                  </ModalStyle>
               </form>
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
      fontFamily: 'Manrope',
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
const InputLabelStyle = styled(InputLabel)(() => ({
   '&': {
      fontFamily: 'Manrope',
      color: '#464444',
   },
}))
