import React, { useEffect, useMemo, useState } from 'react'
import { Grid, IconButton, TableRow, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppTable from '../../../components/UI/Table'
import SwitchApp from '../../../components/UI/switch/Switch'
import { ReactComponent as TrashIcon } from '../../../assets/icons/TrashTable.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import Button from '../../../components/UI/Button'
import SearchInput from '../../../components/UI/SeacrchInput'
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'
import { useDebounce } from '../../../utlis/helpers/general'
import { MainContainer } from './specialist-style'
import {
   deleteSpecialistService,
   getSpecialists,
   postSpecialistIsActiveReq,
} from '../../../api/specialistService'

const Specialists = () => {
   const navigate = useNavigate()
   const [isButtonDisabled, setIsButtonDisabled] = useState(false)
   const [specisalists, setSpecialists] = useState([])
   const [queryParams, setQueryParams] = useState({
      keyWord: null,
   })
   const [searchTerm, setSearchTerm] = useState('')

   const getAllSpecialists = async (queryParams) => {
      try {
         const { data } = await getSpecialists(queryParams)
         return setSpecialists(data)
      } catch (error) {
         return console.log(error)
      }
   }

   const deleteSpecialist = async ({ id }) => {
      try {
         await deleteSpecialistService(id)
         return getAllSpecialists()
      } catch (error) {
         return console.log(error)
      }
   }

   const postSpecialistIsActive = async ({ id, isActive }) => {
      try {
         await postSpecialistIsActiveReq(id, isActive)
         return getAllSpecialists('')
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      getAllSpecialists(queryParams)
   }, [queryParams])

   const changeHandler = (id, isActive) => {
      postSpecialistIsActive({ id, isActive })
   }

   const deleteHandler = (id) => {
      deleteSpecialist({ id })
   }
   const updateHandler = (id) => {
      navigate(`${id}`)
   }

   const handleClick = () => {
      const resultFromBackend = true
      setIsButtonDisabled(resultFromBackend)
   }

   const debouncedSearchTerm = useDebounce(searchTerm, 500)
   const searchCharacters = (word) => {
      setQueryParams((prev) => {
         return {
            ...prev,
            keyWord: word,
         }
      })
   }
   useEffect(() => {
      if (debouncedSearchTerm.length !== 0) {
         searchCharacters(debouncedSearchTerm)
      }
   }, [debouncedSearchTerm])

   const column = useMemo(
      () => [
         {
            header: '№',
            key: 'id',
            index: true,
         },
         {
            header: 'Статус',
            key: 'statue',
            render: (item) => (
               <TableRow>
                  <Grid>
                     <SwitchApp
                        checked={item.isActive}
                        onChange={() => changeHandler(item.id, !item.isActive)}
                        disabled={isButtonDisabled}
                        onClick={handleClick}
                     />
                  </Grid>
               </TableRow>
            ),
         },
         {
            header: 'Специалист',
            key: 'specialist',
            render: (specialist) => {
               return (
                  <TableRow>
                     <Grid sx={{ display: 'flex' }}>
                        <Img src={specialist.image} alt="img" />
                        <div
                           style={{ display: 'flex', flexDirection: 'column' }}
                        >
                           <FirstNameStyled>
                              {specialist.firstName}
                           </FirstNameStyled>
                           <LastNameStyled>
                              {specialist.lastName}
                           </LastNameStyled>
                        </div>
                     </Grid>
                  </TableRow>
               )
            },
         },
         {
            header: 'Отделение',
            key: 'name',
         },
         {
            header: 'Расписение до',
            key: 'dataOfFinish',
            render: (item) => {
               const dateString = item.dataOfFinish
               const date = new Date(dateString)
               const formattedDate = `${date.getDate()} ${date.toLocaleString(
                  'ru-RU',
                  { month: 'long' }
               )} ${date.getFullYear()}`

               if (dateString < 1) {
                  return null
               }
               return formattedDate
            },
         },

         {
            header: 'Действия',
            key: 'action',
            render: (item) => (
               <Grid
                  style={{
                     display: 'flex',
                  }}
               >
                  <IconButton disabled={!item.isActive}>
                     <UpdateIcon onClick={() => updateHandler(item.id)} />
                  </IconButton>
                  <IconButton disabled={!item.isActive}>
                     <TrashIcon onClick={() => deleteHandler(item.id)} />
                  </IconButton>
               </Grid>
            ),
         },
      ],
      []
   )

   return (
      <div>
         <MainContainer>
            <BoxTitleAndButton>
               <Title>Специалисты</Title>
               <StyledContainerButton
                  onClick={() => {
                     navigate('addSpecialist')
                  }}
               >
                  <Plus /> Добавить специалиста
               </StyledContainerButton>
            </BoxTitleAndButton>
            <SearchInputBox>
               <SearchInput
                  value={searchTerm}
                  placeholder="Поиск"
                  onChange={(e) => {
                     setSearchTerm(e.target.value)
                  }}
               />
            </SearchInputBox>
            <AppTable columns={column} rows={specisalists} />
         </MainContainer>
      </div>
   )
}

export default Specialists

const BoxTitleAndButton = styled('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const Title = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '22px',
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

const StyledContainerButton = styled(Button)(() => ({
   '&': {
      paddingLeft: '18px',
      paddingRight: '24px',
      paddingTop: '12px',
      paddingBottom: '12px',
      display: 'flex',
      gap: '12px',
   },
}))

const FirstNameStyled = styled('h6')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontSize: '16px',
   },
}))

const LastNameStyled = styled('p')(() => ({
   '&': {
      color: '#959595',
      fontSize: '14px',
   },
}))

const Img = styled('img')(() => ({
   '&': {
      width: '36px',
      height: '36px',
      borderRadius: '100px',
   },
}))
