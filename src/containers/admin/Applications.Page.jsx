import React, { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from 'use-debounce'
import SearchInput from '../../components/UI/SeacrchInput'
import AppTable from '../../components/UI/Table'
import CheckboxApp from '../../components/UI/checkbox/Checkbox'
import { ReactComponent as TrashIcon } from '../../assets/icons/TrashTable.svg'
import {
   deleteAllChecked,
   deleteChecked,
} from '../../redux/reducers/applications/applications.thunk'
import { getApplicatonRequest } from '../../api/applicationsService'

const ApplicationsPage = () => {
   const dispatch = useDispatch()

   const { application } = useSelector((state) => state.application)
   const [patients, setPatients] = useState([])
   const [check, setCheck] = useState(false)
   const [inputVal, setInputVal] = useState('')
   const [debouncedQuery] = useDebounce(inputVal, 400)

   useEffect(() => {
      setPatients(application)
   }, [application])

   const getData = async () => {
      try {
         if (debouncedQuery) {
            const { data } = await getApplicatonRequest(inputVal)
            setPatients(data)
         } else {
            const { data } = await getApplicatonRequest()
            setPatients(data)
         }
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      getData()
   }, [inputVal, debouncedQuery])

   const searchChangeHandler = (event) => {
      setInputVal(event.target.value)
   }

   const checkBoxChangeHandler = ({ target: { id, checked } }) => {
      if (id === 'allSelect') {
         const tempPatient = patients.map((patient) => {
            return { ...patient, isChecked: checked }
         })
         setCheck(checked)
         setPatients(tempPatient)
      } else {
         const tempPatient = patients.map((patient) =>
            patient.id.toString() === id
               ? { ...patient, isChecked: checked }
               : patient
         )
         setPatients(tempPatient)

         const isTempPatientChecked = tempPatient.find(
            (patient) => patient.isChecked === true
         )

         const isTempPatientUnchecked = tempPatient.find(
            (patient) => patient.isChecked === false
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
   const checkedAllDeleteHandler = () => {
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
      dispatch(deleteAllChecked(checkedIds))
   }

   const checkedProcessedHandler = (id) => {
      const checkPatient = patients.map((item) =>
         item.id === id
            ? {
                 ...item,
                 processedChecked: !item.processedChecked || false,
              }
            : item
      )

      setPatients(checkPatient)
   }

   const checkedDeleteHandler = (id) => {
      dispatch(deleteChecked(id))
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
                     id={patient.id.toString()}
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
                     <IconButton onClick={checkedAllDeleteHandler}>
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
            key: 'phoneNumber',
         },
         {
            header: 'Обработан',
            key: 'processed',
            render: (patient) => (
               <Grid style={{ textAlign: 'start' }}>
                  <IconButton>
                     <CheckboxApp
                        checked={patient.processedChecked || false}
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
               <SearchInput
                  placeholder="Поиск"
                  onChange={searchChangeHandler}
                  value={inputVal}
               />
            </SearchInputBox>
            <div>
               <AppTable columns={column} rows={patients} />
            </div>
         </MainContainer>
      </div>
   )
}

export default ApplicationsPage
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
      marginBottom: '34px',
   },
}))
