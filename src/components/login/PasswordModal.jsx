import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as CloseIcon } from '../../assets/login/CloseIcon.svg'
import Input from '../UI/input/Input'
import Button from '../UI/Button'

const PasswordModal = () => {
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

   return (
      <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
         <CloseIcon className="closeIcon" />
         <FormLabel className="topic">забыли пароль?</FormLabel>
         <p>Вам будет отправлена ссылка для сброса пароля</p>
         {errors.email && <p>{errors.email?.message}</p>}

         <Input
            placeholder="Введите ваш Email"
            className="inputStyle"
            {...register('email', {
               required: 'pole ne zapolneno',
               pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
               },
            })}
         />
         <Button className="buttonStyle" type="submit">
            ОТПРАВИТЬ
         </Button>
         <a className="password" href="/">
            ОТМЕНИТЬ
         </a>
      </FormControlStyled>
   )
}

export default PasswordModal

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
      '&:hover': {
         border: '1px solid #D9D9D9',
      },
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
}))
