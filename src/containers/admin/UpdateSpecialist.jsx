import React, { useEffect, useState } from 'react'
import { InputLabel, Stack } from '@mui/material'
import { useNavigate, useParams } from 'react-router'
import styled from '@emotion/styled'
import { SelectUi } from '../../components/UI/SelectUi'
import {
   Container,
   InputStyled,
   MainContainer,
   StyledNavLink,
   StyledTextField,
   TitlePhoto,
   Wrapper,
} from './specialist-style'
import { department } from '../../utlis/services/department'
import Button from '../../components/UI/Button'
import AvatarUpload from '../../components/UI/Avatar'
import {
   getOneSpecialistService,
   imageSpecialistService,
   updateSpecialistService,
} from '../../api/specialistService'
import useToast from '../../hooks/useToast'

const UpdateSpecialist = () => {
   const navigate = useNavigate()
   const [doctor, setDoctor] = useState({})
   const { doctorId } = useParams()
   const [oneSpecialist, setOneSpecialist] = useState([])

   const [updatePhoto, setUpdatePhoto] = useState('')
   const [updateFirstName, setUpdateFirstName] = useState('')
   const [updateLastName, setUpdateLastName] = useState('')
   const [updatePosition, setUpdatePosition] = useState('')
   const [updateDescription, setUpdateDescription] = useState('')
   const [updateDepartment, setUpdateDepartment] = useState('')
   const { ToastContainer, notifyCall } = useToast()

   const getOneSpecialist = async (id) => {
      try {
         const { data } = await getOneSpecialistService(id)
         setOneSpecialist(data)
         return console.log(data)
      } catch (error) {
         return console.log(error)
      }
   }

   useEffect(() => {
      getOneSpecialist(doctorId)
   }, [])

   useEffect(() => {
      setDoctor(oneSpecialist)
      setUpdateFirstName(oneSpecialist.firstName)
      setUpdateLastName(oneSpecialist.lastName)
      setUpdatePosition(oneSpecialist.position)
      setUpdateDescription(oneSpecialist.description)
      setUpdateDepartment(oneSpecialist.name)
      setUpdatePhoto(oneSpecialist.image)
   }, [oneSpecialist])

   const updateSpecialist = async (putSpecialist) => {
      try {
         await updateSpecialistService(putSpecialist)
         return navigate('/admin/specialists')
      } catch (error) {
         return notifyCall('error', error.response?.data.message)
      }
   }

   const changeFirstName = (e) => {
      setUpdateFirstName(e.target.value)
   }
   const changeLastName = (e) => {
      setUpdateLastName(e.target.value)
   }
   const changeposition = (e) => {
      setUpdatePosition(e.target.value)
   }
   const changeDescription = (e) => {
      setUpdateDescription(e.target.value)
   }

   const changeDepartment = (e) => {
      setUpdateDepartment(e.target.value)
   }

   const imgChangeHandler = async (e) => {
      try {
         const image = e.target.files[0]
         const formData = new FormData()
         formData.append('file', image)
         const data = await imageSpecialistService(formData)
         return setUpdatePhoto(data.data.link)
      } catch (error) {
         return error
      }
   }

   const updateHandler = (event) => {
      event.preventDefault()
      const dataSpecialist = {
         doctorId,
         firstName: updateFirstName,
         lastName: updateLastName,
         position: updatePosition,
         image: updatePhoto,
         description: updateDescription,
      }

      updateSpecialist(dataSpecialist)
   }
   return (
      <MainContainer key={doctor.id}>
         {ToastContainer}
         <Stack spacing={2}>
            <Container separator="›" aria-label="breadcrumb">
               <StyledNavLink to="/admin/specialists">
                  <p>Специалисты</p>
               </StyledNavLink>
               <StyledNamesContainer>
                  <p>{doctor.firstName}</p>
                  <p>{doctor.lastName}</p>
               </StyledNamesContainer>
            </Container>
         </Stack>
         <StyledNamesContainer>
            <Stylednames>{doctor.firstName}</Stylednames>
            <Stylednames>{doctor.lastName}</Stylednames>
         </StyledNamesContainer>
         <UpdateContainer>
            <Wrapper>
               <div style={{ paddingRight: '40px' }}>
                  <TitlePhoto>
                     <AvatarUpload
                        onChange={imgChangeHandler}
                        photo={updatePhoto}
                     />
                     <p>Сменить фото</p>
                  </TitlePhoto>
               </div>
               <form onSubmit={updateHandler}>
                  <FormContainer>
                     <Div>
                        <InputLabel htmlFor="firstName">Имя</InputLabel>
                        <InputStyled
                           style={{ marginBottom: '20px' }}
                           name="firstName"
                           onChange={changeFirstName}
                           value={updateFirstName}
                        />
                        <InputLabel htmlFor="lastName">Отделение</InputLabel>
                        <StyledSelect
                           items={department}
                           placeholder={updateDepartment}
                           label={doctor.name}
                           onChange={changeDepartment}
                        />
                     </Div>
                     <Div>
                        <InputLabel htmlFor="position">Фамилия</InputLabel>
                        <InputStyled
                           style={{ marginBottom: '20px' }}
                           name="position"
                           onChange={changeLastName}
                           value={updateLastName}
                        />
                        <InputLabel htmlFor="description">Должность</InputLabel>
                        <InputStyled
                           style={{ marginBottom: '20px' }}
                           name="description"
                           onChange={changeposition}
                           value={updatePosition}
                        />
                     </Div>
                  </FormContainer>
                  <InputLabel htmlFor="description">Описание</InputLabel>
                  <TextFieldDiv>
                     <StyledTextField
                        name="description"
                        minRows={10}
                        maxRows={30}
                        value={updateDescription}
                        onChange={changeDescription}
                     />
                  </TextFieldDiv>
                  <StyledContainerButton>
                     <StyledCancel
                        onClick={() => {
                           navigate('/admin/specialists')
                        }}
                     >
                        Назад
                     </StyledCancel>

                     <Button style={{ padding: '10px 85px' }} type="submit">
                        Редактировать
                     </Button>
                  </StyledContainerButton>
               </form>
            </Wrapper>
         </UpdateContainer>
      </MainContainer>
   )
}

export default UpdateSpecialist

const StyledNamesContainer = styled('div')({
   display: 'flex',
   gap: '0.5rem',
})

const Stylednames = styled('p')({
   color: '#222222',
   fontSize: '22px',
   fontFamily: 'Manrope',
})

const UpdateContainer = styled('div')(() => ({
   '&': {
      background: '#FFFFFF',
      borderRadius: '6px',
      height: '100%',
   },
}))

const Div = styled('div')(() => ({
   '&': {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '2rem',
   },
}))

const FormContainer = styled('div')(() => ({
   '&': {
      display: 'flex',
   },
}))

const TextFieldDiv = styled('div')(() => ({
   border: '1px solid #909CB5',
   width: '96%',
   borderRadius: '5px',
}))

const StyledCancel = styled(Button)(() => ({
   '&': {
      background: 'none',
      color: '#048741',
      border: '1px solid #048741',
      padding: '10px 85px',
      ':hover': {
         background: 'none',
         color: '#959595',
      },
   },
}))

const StyledContainerButton = styled('div')(() => ({
   marginTop: '68px',
   display: 'flex',
   justifyContent: 'end',
   marginRight: '2rem',
   gap: '1rem',
}))

const StyledSelect = styled(SelectUi)(() => ({
   padding: '1px',
   fontSize: '14px',
}))
