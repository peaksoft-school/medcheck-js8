import React, { useEffect, useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import AppTable from './UI/Table'
import { item } from '../utlis/constants/commons'
import { ReactComponent as TrashIcon } from '../assets/icons/TrashTable.svg'
import CheckboxApp from './UI/checkbox/Checkbox'

const OnlineEntry = () => {
   const [patients, setPatients] = useState([])
   const [check, setCheck] = useState(false)

   useEffect(() => {
      setPatients(item)
   }, [])

   const checkBoxChangeHandler = (e) => {
      const { id, checked } = e.target
      if (id === 'allSelect') {
         const tempPatient = patients.map((patient) => {
            return { ...patient, isChecked: checked }
         })
         setCheck((prev) => !prev)
         setPatients(tempPatient)
      } else {
         const tempPatient = patients.map((patient) =>
            patient.id === id ? { ...patient, isChecked: checked } : patient
         )
         setPatients(tempPatient)

         if (
            (tempPatient.find((patient) => patient.isChecked === false) &&
               tempPatient.find((patient) => patient.isChecked === true)) ||
            tempPatient.find((patient) => patient.isChecked === true)
         ) {
            setCheck(true)
         } else {
            setCheck(false)
         }
      }
   }

   const column = [
      {
         header: (
            <CheckboxApp
               style={{ display: 'flex' }}
               id="allSelect"
               checked={
                  patients.filter((patient) => patient?.isChecked !== true)
                     .length < 1
               }
               onChange={checkBoxChangeHandler}
            />
         ),
         key: 'checkbox',
         render: (patient) => (
            <Grid>
               <CheckboxApp
                  id={patient.id}
                  checked={patient.isChecked || false}
                  onChange={checkBoxChangeHandler}
               />
            </Grid>
         ),
      },
      {
         header: (
            <Grid>{check && <TrashIcon style={{ marginLeft: '10px' }} />}</Grid>
         ),
         key: 'delete',
      },
      {
         header: '№',
         key: 'id',
         index: true,
      },
      {
         header: 'Имя и фамилия',
         key: 'name',
      },
      {
         header: 'Номер телефона',
         key: 'telNumber',
      },

      {
         header: 'Почта',
         key: 'mail',
      },
      {
         header: 'Выбор услуги',
         key: 'serviceSelection',
      },
      {
         header: 'Выбор специалиста',
         key: 'changeSpecialist',
      },
      {
         header: 'Дата и время',
         key: 'date',
         time: 'time',
      },
      {
         header: 'Обработан',
         key: 'processed',
         render: () => (
            <Grid style={{ textAlign: 'center' }}>
               <IconButton>
                  <CheckboxApp />
               </IconButton>
            </Grid>
         ),
      },
      {
         header: 'Действия',
         key: 'action',
         render: () => (
            <Grid style={{ textAlign: 'center' }}>
               <IconButton>
                  <TrashIcon />
               </IconButton>
            </Grid>
         ),
      },
   ]

   return (
      <div>
         <AppTable rows={patients} columns={column} />
      </div>
   )
}

export default OnlineEntry
