import {
   InputLabel,
   Stack,
   Breadcrumbs,
   TextareaAutosize,
   ToggleButtonGroup,
   ToggleButton,
} from '@mui/material'
// import { useFormik } from 'formik'
import { styled as muiStyled } from '@mui/material/styles'
// import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { SelectUi } from '../../../components/UI/SelectUi'
import Input from '../../../components/UI/input/Input'
import { ReactComponent as B } from '../../../assets/icons/B.svg'
import { ReactComponent as U } from '../../../assets/icons/U.svg'
import { ReactComponent as I } from '../../../assets/icons/I.svg'
import { ReactComponent as List } from '../../../assets/icons/List.svg'
import { ReactComponent as Num } from '../../../assets/icons/Num.svg'
import Button from '../../../components/UI/Button'
import AvatarUpload from '../../../components/UI/Avatar'

const department = [
   {
      title: 'Аллергология',
      id: '1',
   },
   {
      title: 'Анестезиология',
      id: '2',
   },
   {
      title: 'Вакцинация',
      id: '3',
   },
   {
      title: 'Гастроэнтерология',
      id: '4',
   },
   {
      title: 'Гинекология',
      id: '5',
   },
   {
      title: 'Дерматология',
      id: '6',
   },
   {
      title: 'Кардиология',
      id: '7',
   },
   {
      title: 'Неврология',
      id: '8',
   },
   {
      title: 'Нейрохирургия',
      id: '9',
   },
   {
      title: 'Онкология',
      id: '10',
   },
   {
      title: 'Ортопедия',
      id: '11',
   },
   {
      title: 'Оториноларингология',
      id: '12',
   },
   {
      title: 'Проктология',
      id: '13',
   },
   {
      title: 'Психтерапия',
      id: '14',
   },
   {
      title: 'Пульмонология',
      id: '15',
   },
   {
      title: 'Ревмотология',
      id: '16',
   },
   {
      title: 'Терапия',
      id: '17',
   },
   {
      title: 'Урология',
      id: '18',
   },
   {
      title: 'Флебология',
      id: '19',
   },
   {
      title: 'Физиотерапия',
      id: '20',
   },
   {
      title: 'Эндокринология',
      id: '21',
   },
]
const AddSpecialist = () => {
   // const dispatch = useDispatch()
   const [selected, setSelected] = useState()
   const [addFirstName, setAddFirstName] = useState('')
   const [addLastName, setAddLastName] = useState('')
   const [addPosition, setAddPosition] = useState('')
   const [addDescription, setAddDescription] = useState('')
   const [addDepartment, setAddDepartment] = useState('')
   const [photo, setPhoto] = useState('')
   console.log(photo)

   const handleSelection = (event, newSelected) => {
      setSelected(newSelected)
   }
   // const bold = selected.includes('bold')
   // const italic = selected.includes('italic')
   // const underline = selected.includes('underlined')

   const changeFirstName = (e) => {
      setAddFirstName(e.target.value)
      console.log(e.target.value)
   }
   const changeLastName = (e) => {
      setAddLastName(e.target.value)
   }
   const changeposition = (e) => {
      setAddPosition(e.target.value)
   }
   const changeDescription = (e) => {
      setAddDescription(e.target.value)
   }

   const changeDepartment = (e) => {
      setAddDepartment(e.target.value)
   }
   const addHandler = (event) => {
      event.preventDefault()
      const obj = {
         fc: addFirstName,
         gvs: addLastName,
         LKM: addDepartment,
         jnkdc: addDescription,
         dvjkn: addPosition,
         djckz: photo,
      }
      // dispatch(obj)
      console.log(obj)
   }

   // const { values, handleChange, handleSubmit } = useFormik({
   //    initialValues: {
   //       firstName: '',
   //       lastName: '',
   //       position: '',
   //       description: '',
   //    },
   //    onSubmit: (value) => {
   //       console.log(value, photo)
   //    },
   // })

   return (
      <MainContainer>
         <Stack spacing={2}>
            <Container separator="›" aria-label="breadcrumb">
               <StyledNavLink>
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
                     <AvatarUpload photo={setPhoto} />
                     <p>
                        Нажмите для добавления <br /> фотографии
                     </p>
                  </TitlePhoto>
               </div>
               <div>
                  <Info>Добавление специалиста</Info>
                  <form onSubmit={addHandler}>
                     <FormContainer>
                        <Div>
                           <InputLabel htmlFor="firstName">Имя</InputLabel>

                           <InputStyled
                              placeholder="Напишите имя"
                              style={{ marginBottom: '20px' }}
                              name="firstName"
                              onChange={changeFirstName}
                              value={addFirstName}
                           />

                           <InputLabel>Отделение</InputLabel>
                           <StyledSelect
                              items={department}
                              value={addDepartment}
                              onChange={changeDepartment}
                           />
                        </Div>

                        <Div>
                           <InputLabel htmlFor="lastName">Фамилия</InputLabel>
                           <InputStyled
                              placeholder="Напишите фамилию"
                              style={{ marginBottom: '20px' }}
                              onChange={changeLastName}
                              value={addLastName}
                              name="lastName"
                           />

                           <InputLabel htmlFor="position">Должность</InputLabel>
                           <InputStyled
                              placeholder="Напишите должность"
                              onChange={changeposition}
                              value={addPosition}
                              name="position"
                           />
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
                           onChange={changeDescription}
                           value={addDescription}
                           name="description"
                           minRows={10}
                           maxRows={30}
                           // bold={bold}
                           // italic={italic}
                           // underline={underline}
                        />
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

const MainContainer = muiStyled('div')(() => ({
   '&': {
      width: '100%',
      height: '100%',
      background: 'rgba(245, 245, 245, 0.61)',
      padding: '30px 70px',
      fontFamily: 'Manrope',
   },
}))

const Container = muiStyled(Breadcrumbs)({
   fontWeight: 400,
   fontSize: '14px',
   lineHeight: '19px',
   marginTop: '30px',
   marginBottom: '26px',
   ':last-child': {
      color: '#048741',
   },
})

const StyledNavLink = muiStyled(NavLink)({
   textDecoration: 'none',
   color: ' #959595',
})

const Title = muiStyled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '22px',
   },
}))

const AddContainer = muiStyled('div')(() => ({
   '&': {
      background: '#FFFFFF',
      borderRadius: '6px',
      height: '100%',
   },
}))

const Wrapper = muiStyled('div')(() => ({
   '&': {
      paddingTop: '40px',
      // paddingLeft: '44px',
      display: 'flex',
      marginRight: '43px',
   },
}))

const FormContainer = muiStyled('div')(() => ({
   '&': {
      display: 'flex',
   },
}))

const InputStyled = muiStyled(Input)(() => ({
   fieldset: {
      border: '1px solid #909CB5',
   },
   input: {
      paddingLeft: '10px',
      height: '22px',
      width: '372px',
      fontSize: '14px',
      padding: '5px',
   },
}))

const Div = muiStyled('div')(() => ({
   '&': {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '2rem',
   },
}))

const TitlePhoto = muiStyled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      color: '#909CB5',
      textAlign: 'center',
      fontSize: '12px',
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
   height: '2px',
   padding: '1px',
   fontSize: '14px',
}))

const StyledTextField = styled(TextareaAutosize)((styles) => ({
   borderStyle: 'none',
   '&': {
      width: '96%',
      color: '#959595',
      fontSize: '16px',
      paddingLeft: '20px',
      paddingTop: '16px',
      border: '1px solid white',
      fontWeight: styles.bold ? 700 : 400,
      fontStyle: styles.italic ? 'italic' : '',
      textDecoration: styles.underline ? 'underline' : '',
      listStyle: 'square',

      '&:active': {
         borderStyle: 'none',
         background: 'red',
      },
      '&:hover': {
         // border: '1px solid white',
         // background: 'red',
      },
   },
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
