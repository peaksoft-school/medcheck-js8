import {
   InputLabel,
   Stack,
   ToggleButtonGroup,
   ToggleButton,
} from '@mui/material'
import { styled as muiStyled } from '@mui/material/styles'
import { useFormik } from 'formik'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectUi } from '../../components/UI/SelectUi'
import { ReactComponent as B } from '../../assets/icons/B.svg'
import { ReactComponent as U } from '../../assets/icons/U.svg'
import { ReactComponent as I } from '../../assets/icons/I.svg'
import { ReactComponent as List } from '../../assets/icons/List.svg'
import { ReactComponent as Num } from '../../assets/icons/Num.svg'
import Button from '../../components/UI/Button'
import AvatarUpload from '../../components/UI/Avatar'
import { department } from '../../utlis/services/department'
import {
   imageSpecialistService,
   postSpecialistsService,
} from '../../api/specialistService'
import {
   AddContainer,
   InputStyled,
   MainContainer,
   StyledNavLink,
   StyledTextField,
   TitlePhoto,
   Wrapper,
   Container,
} from './specialist-style'
import { addSpecialistSchema } from '../../utlis/helpers/general'

const AddSpecialist = () => {
   const navigate = useNavigate()
   const [selected, setSelected] = useState('')
   const [photo, setPhoto] = useState('')
   const handleSelection = (event, newSelected) => {
      setSelected(newSelected)
   }
   const bold = selected.includes('bold')
   const italic = selected.includes('italic')
   const underline = selected.includes('underlined')

   const imgChangeHandler = async (e) => {
      const image = e.target.files[0]
      const formData = new FormData()
      formData.append('file', image)
      try {
         const data = await imageSpecialistService(formData)
         return setPhoto(data.data.link)
      } catch (error) {
         return error
      }
   }

   const postSpecialist = async (dataSpecialist) => {
      try {
         await postSpecialistsService(dataSpecialist)
         return navigate('/admin/specialists')
      } catch (error) {
         return console.log(error)
      }
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         position: '',
         description: '',
         department: '',
      },

      validationSchema: addSpecialistSchema,

      onSubmit: (values) => {
         const dataSpecialist = {
            departmentId: values.department,
            description: values.description,
            firstName: values.firstName,
            image: photo,
            lastName: values.lastName,
            position: values.position,
         }

         postSpecialist(dataSpecialist)
      },
   })

   return (
      <MainContainer>
         <Stack spacing={2}>
            <Container separator="›" aria-label="breadcrumb">
               <StyledNavLink to="/admin/specialists">
                  <p>Специалисты</p>
               </StyledNavLink>
               <p>Добавление специалиста</p>
            </Container>
         </Stack>
         <Title>Специалисты</Title>
         <AddContainer>
            <Wrapper>
               <div style={{ paddingRight: '40px' }}>
                  <TitlePhoto>
                     <AvatarUpload onChange={imgChangeHandler} photo={photo} />
                     <p>
                        Нажмите для добавления <br /> фотографии
                     </p>
                  </TitlePhoto>
               </div>
               <div>
                  <Info>Добавление специалиста</Info>
                  <form onSubmit={handleSubmit}>
                     <FormContainer>
                        <Div>
                           <InputLabel htmlFor="firstName">Имя</InputLabel>

                           <InputStyled
                              placeholder="Напишите имя"
                              style={{ marginBottom: '20px' }}
                              name="firstName"
                              onChange={handleChange}
                              value={values.firstName}
                           />
                           <StyledSpan>{errors.firstName}</StyledSpan>

                           <InputLabel>Отделение</InputLabel>
                           <StyledSelect
                              items={department}
                              onChange={handleChange}
                              value={values.department}
                              placeholder="Выберите отделение"
                              name="department"
                           />
                           <StyledSpan>{errors.department}</StyledSpan>
                        </Div>

                        <Div>
                           <InputLabel htmlFor="lastName">Фамилия</InputLabel>
                           <InputStyled
                              placeholder="Напишите фамилию"
                              style={{ marginBottom: '20px' }}
                              onChange={handleChange}
                              value={values.lastName}
                              name="lastName"
                           />
                           <StyledSpan>{errors.lastName}</StyledSpan>

                           <InputLabel htmlFor="position">Должность</InputLabel>
                           <InputStyled
                              placeholder="Напишите должность"
                              onChange={handleChange}
                              value={values.position}
                              name="position"
                           />
                           <StyledSpan>{errors.position}</StyledSpan>
                        </Div>
                     </FormContainer>
                     <p>Описание</p>
                     <div
                        style={{
                           border: '1px solid #909CB5',
                           width: '96%',
                           borderRadius: '5px',
                        }}
                     >
                        <ToggleButtonGroup
                           value={selected}
                           onChange={handleSelection}
                           aria-label="text formatting"
                           style={{
                              display: 'flex',
                              gap: '2rem',
                              border: '1px solid #909CB5',
                           }}
                        >
                           <IconStyled value="bold" aria-label="bold">
                              <B />
                           </IconStyled>
                           <IconStyled value="italic" aria-label="italic">
                              <I />
                           </IconStyled>
                           <IconStyled
                              value="underlined"
                              aria-label="underlined"
                           >
                              <U />
                           </IconStyled>
                           <IconStyled value="list" aria-label="list">
                              <List />
                           </IconStyled>
                           <IconStyled value="number" aria-label="number">
                              <Num />
                           </IconStyled>
                        </ToggleButtonGroup>
                        <StyledTextField
                           placeholder="Введите описание специалиста"
                           onChange={handleChange}
                           value={values.description}
                           name="description"
                           minRows={10}
                           maxRows={30}
                           bold={bold}
                           italic={italic}
                           underline={underline}
                        />
                        <StyledSpan>{errors.description}</StyledSpan>
                     </div>
                     <StyledContainerButton>
                        <StyledCancel onClick={() => {}}>Отменить</StyledCancel>
                        <Button style={{ padding: '10px 85px' }} type="submit">
                           Добавить
                        </Button>
                     </StyledContainerButton>
                  </form>
               </div>
            </Wrapper>
         </AddContainer>
      </MainContainer>
   )
}

export default AddSpecialist

const Title = muiStyled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '22px',
   },
}))

const FormContainer = muiStyled('div')(() => ({
   '&': {
      display: 'flex',
   },
}))

const Div = muiStyled('div')(() => ({
   '&': {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '2rem',
   },
}))

const Info = muiStyled('p')(() => ({
   '&': {
      marginBottom: '20px',
      color: '#222222',
      fontSize: '18px',
      letterSpacing: '0.2px',
      fontWeight: 600,
   },
}))

const StyledSelect = styled(SelectUi)(() => ({
   padding: '1px',
   fontSize: '14px',
}))

const StyledCancel = styled(Button)(() => ({
   '&': {
      background: 'none',
      color: '#959595',
      border: '1px solid#959595',
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

const IconStyled = styled(ToggleButton)(() => ({
   border: 'none',
}))

const StyledSpan = styled('span')(() => ({
   fontSize: '12px',
   color: 'red',
}))
