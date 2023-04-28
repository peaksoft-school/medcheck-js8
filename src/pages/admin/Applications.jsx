import React, { useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import SearchInput from '../../components/UI/SeacrchInput'
import { item } from '../../utlis/constants/commons'
import AppTable from '../../components/UI/Table'
import CheckboxApp from '../../components/UI/checkbox/Checkbox'
import { ReactComponent as TrashIcon } from '../../assets/icons/TrashTable.svg'

const Application = ({ processedData }) => {
   const [patients, setPatients] = useState(item)
   const [check, setCheck] = useState(false)

   const checkBoxChangeHandler = ({ target: { id, checked } }) => {
      if (id === 'allSelect') {
         const tempPatient = patients.map((patient) => {
            return { ...patient, isChecked: checked }
         })
         setCheck(checked)
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
      setCheck(false)
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
            header: 'Имя',
            key: 'name',
         },
         {
            header: 'Дата',
            key: 'date',
         },
         {
            header: 'Номер телефона',
            key: 'telNumber',
         },
         {
            header: 'Обработан',
            key: 'processed',
            render: (patient) => (
               <Grid style={{ textAlign: 'start' }}>
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
         <MainContainer>
            <BoxTitleAndButton>
               <Title>Заявки</Title>
            </BoxTitleAndButton>
            <SearchInputBox>
               <SearchInput placeholder="Поиск" />
            </SearchInputBox>
            <div>
               <AppTable columns={column} rows={patients} />
            </div>
         </MainContainer>
      </div>
   )
}

export default Application
const MainContainer = styled('div')(() => ({
   '&': {
      width: '100%',
      height: '100vh',
      background: 'rgba(245, 245, 245, 0.61)',
      padding: '30px 70px',
   },
}))
const BoxTitleAndButton = styled('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

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
const Title = styled('p')(() => ({
   '&': {
      fontFamily: 'Work Sans',
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '26px',
   },
}))
