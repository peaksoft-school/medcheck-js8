import React, { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import SearchInput from '../../components/UI/SeacrchInput'
import AppTable from '../../components/UI/Table'
import CheckboxApp from '../../components/UI/checkbox/Checkbox'
import { ReactComponent as TrashIcon } from '../../assets/icons/TrashTable.svg'
import { getApplication } from '../../redux/reducers/applications/applications.thunk'
import { getGlobalSearch } from '../../redux/reducers/search/search.thunk'

const Application = ({ processedData }) => {
   const dispatch = useDispatch()

   const { application } = useSelector((state) => state.application)
   const [patients, setPatients] = useState(application)
   const [check, setCheck] = useState(false)
   const [search, setSearch] = useState('')
   const [filteredItems, setFilteredItems] = useState([])

   useEffect(() => {
      setPatients(application)
   }, [application])

   useEffect(() => {
      dispatch(getApplication())
   }, [])

   useEffect(() => {
      const filteredItems = patients.filter((patient) => {
         const lowerCaseName = patient.name.toLowerCase()
         const lowerCaseInputValue = search.toLowerCase()
         return lowerCaseName.includes(lowerCaseInputValue)
      })

      setFilteredItems(filteredItems)
   }, [patients, search, check])
   const searchChangeHandler = (event) => {
      const inputValue = event.target.value
      setSearch(inputValue)
      dispatch(getGlobalSearch())
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

         const filteredItems = tempPatient.filter((patient) =>
            patient.name.toLowerCase().includes(search.toLowerCase())
         )
         setFilteredItems(filteredItems)
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

      processedData(patients)
      setPatients(checkPatient)
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
               <SearchInput
                  placeholder="Поиск"
                  onChange={searchChangeHandler}
                  value={search}
               />
            </SearchInputBox>
            <div>
               <AppTable
                  columns={column}
                  rows={filteredItems.length > 0 ? filteredItems : patients}
               />
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
      marginBottom: '34px',
   },
}))
