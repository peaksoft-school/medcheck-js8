import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel } from '@mui/material'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CloseIcon } from '../../../assets/login/CloseIcon.svg'
import Input from '../../../components/UI/input/Input'
import Button from '../../../components/UI/Button'
import { ModalUi } from '../../../components/UI/ModalUi'

const ForgetPassword = () => {
   const [modal, setModal] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
      },
   })

   function onSubmit(values) {
      console.log('will come values', values)
   }
   const closeModalHandler = () => {
      setModal(false)
   }
   return (
      <ModalUi open={modal} onClose={closeModalHandler}>
         <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
            <CloseIcon className="closeIcon" />
            <FormLabel className="topic">забыли пароль?</FormLabel>
            <p>Вам будет отправлена ссылка для сброса пароля</p>
            <Input
               placeholder="Введите ваш Email"
               className="inputStyle"
               error={errors.email}
               {...register('email', {
                  required: 'поле не заполнено',
                  pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: 'Неверный формат электронной почты',
                  },
               })}
            />
            {errors.email && <p className="message">{errors.email?.message}</p>}
            <Button className="buttonStyle" type="submit">
               ОТПРАВИТЬ
            </Button>
            <NavLink className="password" to="/">
               ОТМЕНИТЬ
            </NavLink>
         </FormControlStyled>
      </ModalUi>
   )
}

export default ForgetPassword

const FormControlStyled = styled('form')(() => ({
   height: '361px',
   width: ' 494px',
   borderRadius: '2px',
   background: '#FFFFFF',
   marginLeft: ' 35%',
   boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '25px',
      marginLeft: '167px',
      marginTop: ' 17px',
      color: '#222222',
      textTransform: ' uppercase',
   },
   '& p': {
      margin: '24px 115px 20px 40px',
      color: '#959595',
      fontSize: '16px',
   },
   '& .closeIcon': {
      marginLeft: '450px',
      marginTop: '19px',
   },
   '& .inputStyle': {
      width: '414px',
      marginLeft: '40px',
      borderRadius: ' 10px',
      border: '1px solid #D9D9D9',
   },
   '& .buttonStyle': {
      height: '52px',
      width: '414px',
      marginLeft: '40px',
      marginTop: '20px',
      borderRadius: ' 10px',
      fontSize: '14px',
      marginBottom: '30px',
   },
   '& .password': {
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '16px',
      marginLeft: '215px',
      color: '#959595',
      textDecoration: 'none',
   },
   '& .message': {
      color: 'red',
      marginLeft: '40px',
      marginTop: '10px',
   },
}))
