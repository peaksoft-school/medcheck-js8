import React, { useMemo, useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import AppTable from './UI/Table'
import { item } from '../utlis/constants/commons'
import { ReactComponent as TrashIcon } from '../assets/icons/TrashTable.svg'
import CheckboxApp from './UI/checkbox/Checkbox'

const OnlineEntry = ({ processedData }) => {
   const [patients, setPatients] = useState(item)
   const [check, setCheck] = useState(false)

   const checkBoxChangeHandler = ({ target: { id, checked } }) => {
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

         const isTempPatientUnchecked = tempPatient.find(
            (patient) => patient.isChecked === false
         )
         const isTempPatientChecked = tempPatient.find(
            (patient) => patient.isChecked === true
         )

         if (
            (isTempPatientUnchecked && isTempPatientChecked) ||
            isTempPatientChecked
         ) {
            setCheck(true)
         } else {
            setCheck(false)
         }
      }
   }

   const checkedALlDeleteHandler = () => {
      const checkedIds = patients.reduce((patientId, patient) => {
         if (patient.isChecked) {
            patientId.push(parseInt(patient.id, 10))
         }
         return patientId
      }, [])
      const nullablePatients = patients.map((patient) => ({
         ...patient,
         isChecked: false,
      }))
      setPatients(nullablePatients)
      // there should be a request:
      console.log(checkedIds)
   }

   const checkedProcessedHandler = (id) => {
      const checkPatient = patients.map((item) =>
         item.id === id
            ? {
                 ...item,
                 processedChecked: !item.processedChecked,
              }
            : item
      )
      setPatients(checkPatient)
      processedData(patients)
   }

   const checkedDeleteHandler = () => {
      const checkDeleteEl = patients.filter(
         (patient) => !patient.processedChecked
      )
      setPatients(checkDeleteEl)
   }

   const allCheckedValue =
      patients.length > 0 && patients.every((patient) => patient.isChecked)

   const column = useMemo(
      () => [
         {
            header: (
               <CheckboxApp
                  style={{ display: 'flex' }}
                  id="allSelect"
                  checked={allCheckedValue}
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
               <Grid>
                  {check && (
                     <IconButton onClick={checkedALlDeleteHandler}>
                        <TrashIcon />
                     </IconButton>
                  )}
               </Grid>
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
            render: (patient) => (
               <Grid style={{ textAlign: 'center' }}>
                  <IconButton>
                     <CheckboxApp
                        checked={patient.processedChecked}
                        onChange={() => checkedProcessedHandler(patient.id)}
                     />
                  </IconButton>
               </Grid>
            ),
         },
         {
            header: 'Действия',
            key: 'action',
            render: (patient) => (
               <Grid style={{ textAlign: 'center' }}>
                  <IconButton onClick={() => checkedDeleteHandler(patient.id)}>
                     <TrashIcon />
                  </IconButton>
               </Grid>
            ),
         },
      ],
      [patients, check]
   )

   return (
      <div>
         <AppTable rows={patients} columns={column} />
      </div>
   )
}

export default OnlineEntry
