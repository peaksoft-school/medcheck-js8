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
   const [debouncedQuery] = useDebounce(inputVal, 800)
   const { ToastContainer, notify: notifyCall } = useToast()

   // eslint-disable-next-line consistent-return
   const getAllPatients = async () => {
      try {
         if (debouncedQuery) {
            const { data } = await getPatients(debouncedQuery)
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
   }, [debouncedQuery])

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
   const column = useMemo(() => [
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
   ])
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
})
const PaperStyled = styled(Paper)({
   width: '1300px',
   height: '1374px',
   margin: 'auto',
   marginTop: '20px',
   borderRadius: '6px',
})
const PatientStyle = styled('div')({
   background: '#9B9690',
   paddingTop: '40px',
   '& .search': {
      width: '600px',
      borderRadius: '24px',
      marginLeft: '110px',
      background: '#FFFFFF',
      fontSize: '14px',
   },
   '& .topic': {
      marginLeft: '110px',
      fontSize: '22px',
      color: '#222222',
      paddingBottom: '40px',
   },
})
