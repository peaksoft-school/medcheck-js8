import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormLabel, IconButton, Paper, styled } from '@mui/material'
import { format, isValid } from 'date-fns'
import { useDispatch } from 'react-redux'
// import { patientData } from '../../utlis/constants/commons'
import Button from '../../components/UI/Button'
import { ModalUi } from '../../components/UI/ModalUi'
import { SelectUi } from '../../components/UI/SelectUi'
import { MED_SERVICE } from '../../utlis/services/img_service'
import Calendar from '../../components/UI/calendar/Calendar'
import { ReactComponent as CloseIcon } from '../../assets/login/CloseIcon.svg'
import { getPatients } from '../../api/patientsService'
import useToast from '../../hooks/useToast'
import AvatarUpload from '../../components/UI/avatar/Avatar'
import { putDatas } from '../../redux/reducers/patient/patient.thunk'

const PatientDetails = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { ToastContainer, notifyCall } = useToast()
   // const { allPatients } = useSelector((state) => state.patient)
   console.log(id)
   const [open, setOpen] = useState(false)
   const [name, setName] = useState('')
   const [patients, setPatients] = useState([])
   const [inputDate, setInputDate] = useState('')
   const [selectedFile, setSelectedFile] = useState(null)
   console.log(patients)
   const getAllPatients = async () => {
      try {
         const { data } = await getPatients()
         return setPatients(data)
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }
   useEffect(() => {
      getAllPatients()
   }, [])

   const findPatient = useMemo(() => {
      return patients.find((el) => String(el.id) === id)
   }, [id, patients])
   console.log(findPatient)
   const handleOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }

   const cancelHandler = () => {
      setOpen(false)
   }
   const changeHandler = (e) => {
      setName(e.target.value)
   }
   const chooseHandler = (e) => {
      setInputDate(e)
   }

   const fileChange = (event) => {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
   }

   let date = ''

   if (inputDate && isValid(new Date(inputDate))) {
      date = format(new Date(inputDate), 'yyyy-MM-dd')
   }
   const submitHandler = () => {
      try {
         if (name.length >= 2 && date.length >= 2) {
            const datasOfPatient = {
               name,
               dateOfIssue: date,
               patientId: findPatient.id,
               firstName: findPatient?.firstName,
               file: formData,
            }
            dispatch(putDatas(datasOfPatient))
            console.log(datasOfPatient)
            notifyCall('success', 'The data has successfully sent!')
            navigate(`${findPatient?.id}/results`)
         } else {
            notifyCall('error', 'This is error message')
         }
      } catch (error) {
         console.error(error)
         notifyCall('error', 'This is error message')
      }
   }

   return (
      <Container>
         {ToastContainer}
         <HeaderPart>
            <P>
               {' '}
               {findPatient?.firstName} {findPatient?.lastName}{' '}
            </P>
            <ButtonStyled onClick={handleOpen}>
               + добавить результаты
            </ButtonStyled>
         </HeaderPart>

         <ModalUi open={open} onClose={handleClose}>
            <ModalContainer>
               <IconButtonStyled onClick={cancelHandler}>
                  <CloseIcon />
               </IconButtonStyled>
               <Topic>Добавление результата</Topic>
               <Div>
                  <div className="serviceInput">
                     <label htmlFor="id">Услуга</label>
                     <SelectUi
                        items={MED_SERVICE}
                        value={name}
                        onChange={changeHandler}
                     />
                  </div>
                  <div className="calendar">
                     <label htmlFor="id">Дата сдачи</label>
                     <Calendar
                        className="calendar"
                        value={inputDate}
                        onChange={chooseHandler}
                     />
                  </div>
               </Div>
               <FileInput>
                  <FormLabel htmlFor="id">Файл</FormLabel>
                  <AvatarUpload onChange={fileChange} />
               </FileInput>
               <ButtonContainer>
                  <Button className="cancel" onClick={cancelHandler}>
                     Отменить
                  </Button>
                  <Button className="add" onClick={submitHandler}>
                     добавить
                  </Button>
               </ButtonContainer>
            </ModalContainer>
         </ModalUi>
         <PaperStyled>
            <div>
               <h3>
                  <span>
                     {findPatient?.firstName} {findPatient?.lastName}
                  </span>
               </h3>{' '}
               <br />
               <p>
                  имя: <br />
                  {findPatient?.firstName}
               </p>{' '}
               <br />
               <p>
                  фамиля: <br />
                  {findPatient?.lastName}
               </p>{' '}
               <br />
               <p>
                  номер телефона: <br />
                  {findPatient?.phoneNumber}
               </p>{' '}
               <br />
               <p>
                  email: <br />
                  {findPatient?.email}
               </p>{' '}
               <br />
            </div>
         </PaperStyled>
      </Container>
   )
}

export default PatientDetails

const Container = styled('div')({
   background: '#9B9690',
})
const ModalContainer = styled('div')({
   width: '550px',
   height: '388px',
})

const IconButtonStyled = styled(IconButton)({
   marginLeft: '500px',
})

const P = styled('p')({
   fontSize: '22px',
   marginTop: '40px',
   marginLeft: '7%',
})
const HeaderPart = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})
const ButtonStyled = styled(Button)({
   width: '300px',
   height: '44px',
   marginTop: '40px',
   marginRight: '7%',
})
const PaperStyled = styled(Paper)({
   width: '1300px',
   height: '1300px',
   margin: 'auto',
   marginTop: '20px',
   '& div': {
      paddingTop: '20px',
      marginLeft: '20px',
   },
})
const Div = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '32px',
   '& .serviceInput': {
      width: '400px',
      height: '38px',
      marginRight: '18px',
      paddingTop: '4px',
      fontSize: '18px',
      color: '#464444',
   },
   '& .calendar': {
      width: '200px',
      height: '38px',
      borderRadius: '6px',
      marginRight: '20px',
   },
})
const Topic = styled('p')({
   fontFamily: ' Manrope',
   fontSize: '24px',
   fontWeight: 500,
   lineHeight: '33px',
   textAlign: 'center',
})
const FileInput = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '68px',
   marginLeft: '5px',
   marginBottom: '30px',
})
const ButtonContainer = styled('div')({
   '& .cancel': {
      marginRight: '18px',
      width: '257px',
      height: '38px',
      background: '#959595',
   },
   '& .add': {
      marginRight: '18px',
      width: '257px',
      height: '38px',
   },
})
