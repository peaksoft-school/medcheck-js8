import React, { useMemo, useState, useEffect } from 'react'
import { Grid, IconButton, styled, Paper } from '@mui/material'
import { useNavigate } from 'react-router'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../components/UI/SeacrchInput'
import AppTable from '../../components/UI/Table'
import { ReactComponent as NumberIcon } from '../../assets/table/NumberIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/table/DeleteIcon.svg'
import { getPatients, deletePatientService } from '../../api/patientsService'
import useToast from '../../hooks/useToast'

const Patients = () => {
   const navigate = useNavigate()
   const [patients, setPatients] = useState([])
   const [inputVal, setInputVal] = useState('')
   const [debouncedQuery] = useDebounce(inputVal, 400)
   const { ToastContainer, notify: notifyCall } = useToast()

   // eslint-disable-next-line consistent-return
   const getAllPatients = async () => {
      try {
         if (debouncedQuery) {
            const { data } = await getPatients(inputVal)
            return setPatients(data)
         }
         {
            const { data } = await getPatients()
            setPatients(data)
         }
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }

   useEffect(() => {
      getAllPatients()
   }, [inputVal, debouncedQuery])

   const searchChangeHandler = (event) => {
      setInputVal(event.target.value)
   }

   const deletePatient = async ({ id }) => {
      try {
         await deletePatientService(id)
         notifyCall('success', 'успешно')
         return getAllPatients('')
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }
   const deleteHandler = (id) => {
      deletePatient({ id })
   }
   const column = useMemo(
      () => [
         {
            header: <NumberIcon />,
            render: (patient) => <P>{patient.id}</P>,
         },
         {
            header: 'Имя и фамилия',
            render: (patient) => (
               <Grid>
                  <P
                     onClick={(patient) => {
                        navigate(`${patient.id}/details`)
                     }}
                  >
                     <span>{patient.firstName} </span>
                     <span>{patient.lastName} </span>
                  </P>
               </Grid>
            ),
         },
         {
            header: 'Номер телефона',
            render: (patient) => (
               <Grid>
                  <P
                     onClick={() => {
                        navigate(`${patient.id}/details`)
                     }}
                  >
                     {patient.phoneNumber}
                  </P>
               </Grid>
            ),
         },

         {
            header: 'Почта',
            render: (patient) => (
               <Grid>
                  <P
                     onClick={() => {
                        navigate(`${patient.id}/details`)
                     }}
                  >
                     {patient.email}
                  </P>
               </Grid>
            ),
         },
         {
            header: 'Дата сдачи',
            render: (patient) => (
               <Grid>
                  <P
                     onClick={() => {
                        navigate(`${patient.id}/details`)
                     }}
                  >
                     {patient.dateOfVisit}
                  </P>
               </Grid>
            ),
         },
         {
            header: 'Действия',
            render: (patient) => (
               <Grid style={{ textAlign: 'center' }}>
                  <IconButton onClick={() => deleteHandler(patient.id)}>
                     <DeleteIcon />
                  </IconButton>
               </Grid>
            ),
         },
      ],
      []
   )
   return (
      <PatientStyle>
         <p className="topic">Пациенты</p>
         <div className="search">
            <SearchInput
               placeholder="Поиск"
               onChange={searchChangeHandler}
               value={inputVal}
            />
         </div>
         <PaperStyled>
            {ToastContainer}
            <AppTable key={patients.id} rows={patients} columns={column} />
         </PaperStyled>
      </PatientStyle>
   )
}

export default Patients

const P = styled('p')({
   color: '#222222',
   fontFamily: 'Manrope',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '22px',
})
const PaperStyled = styled(Paper)({
   margin: 'auto',
   borderRadius: '6px',
})
const PatientStyle = styled('div')({
   background: 'rgba(245, 245, 245, 0.61)',
   padding: '40px 70px 0 70px',
   '& .search': {
      width: '600px',
      borderRadius: '24px',
      fontSize: '14px',
      paddingBottom: '20px',
      div: {
         background: '#FFFFFF',
      },
      input: {
         background: '#FFFFFF',
      },
   },
   '& .topic': {
      fontSize: '22px',
      color: '#222222',
      fontFamily: 'Manrope',
      paddingBottom: '34px',
   },
})
