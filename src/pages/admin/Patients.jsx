import React, { useMemo, useState, useEffect } from 'react'
import { Grid, IconButton, styled, Paper } from '@mui/material'
import { useNavigate } from 'react-router'
import SearchInput from '../../components/UI/SeacrchInput'
import AppTable from '../../components/UI/Table'
import { ReactComponent as NumberIcon } from '../../assets/table/NumberIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/table/DeleteIcon.svg'
import { getPatients, deletePatientService } from '../../api/patientsService'
import useToast from '../../hooks/useToast'

const Patients = () => {
   const navigate = useNavigate()
   const [patients, setPatients] = useState([])
   const { ToastContainer, notifyCall } = useToast()
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
   const deletePatient = async ({ id }) => {
      try {
         await deletePatientService(id)
         notifyCall('success', 'успешно')
         return getAllPatients('')
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }
   const clickHand = (patient) => {
      console.log(patient)
   }
   const deleteHandler = (id) => {
      deletePatient({ id })
   }
   const column = useMemo(() => [
      {
         header: <NumberIcon />,
         key: 'id',
      },
      {
         header: 'Имя и фамилия',
         key: 'name,sname',
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
         key: 'telNumber',
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
         key: 'mail',
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
         key: 'date',
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
         key: 'delete',
         render: (patient) => (
            <Grid style={{ textAlign: 'center' }}>
               {/* <IconButton> */}
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
            <SearchInput placeholder="Поиск" />
         </div>
         <PaperStyled>
            {ToastContainer}
            <AppTable rows={patients} columns={column} onClick={clickHand} />
         </PaperStyled>
      </PatientStyle>
   )
}

export default Patients

const P = styled('p')({})
const PaperStyled = styled(Paper)({
   width: '1300px',
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
