import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, InputAdornment } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as CloseIcon } from '../../assets/login/CloseIcon.svg'
import Input from '../UI/input/Input'
import Button from '../UI/Button'
import { ReactComponent as Show } from '../../assets/login/Password.svg'
import { ReactComponent as GoogleIcon } from '../../assets/login/image 90.svg'

const SignIn = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         email: '',
         password: '',
      },
   })

   function onSubmit(values) {
      console.log('will come values', values)
   }

   return (
      <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
         <CloseIcon className="closeIcon" />
         <FormLabel className="topic">ВОЙТИ</FormLabel>
         <Input
            placeholder="Логин"
            className="inputStyle"
            {...register('email', {
               required: 'pole ne zapolneno',
               pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
               },
            })}
         />
         {errors.email && <p>{errors.email?.message}</p>}
         <Input
            placeholder="Пароль"
            className="inputStyle"
            {...register('password', {
               required: 'pole ne zapolneno',
               maxLength: { value: 15, message: 'mnogo detalei' },
               minLength: { value: 5, message: 'malo detalei' },
            })}
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end">
                     <Show />
                  </InputAdornment>
               ),
            }}
         />
         {errors.password && <p>{errors.password?.message}</p>}

         <Button className="buttonStyle" type="submit">
            ВОЙТИ
         </Button>
         <a className="password" href="/">
            ЗАБЫЛИ ПАРОЛЬ ?
         </a>
         <Line>
            <hr className="lineFirst" />
            <span>или</span>
            <hr className="lineSecond" />
         </Line>
         <Button className="buttonGoogle" startIcon={<GoogleIcon />}>
            <a href="/" className="google">
               Продолжить с Google
            </a>
         </Button>
         <a className="register" href="/">
            <span>Нет аккаунта?</span> Зарегистрироваться
         </a>
      </FormControlStyled>
   )
}

export default SignIn

const FormControlStyled = styled('form')(() => ({
   height: '511px',
   width: ' 494px',
   borderRadius: '2px',
   background: '#FFFFFF',
   marginLeft: ' 35%',
   boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '25px',
      marginLeft: '210px',
      marginTop: ' 17px',
      color: '#222222',
   },
   '& .closeIcon': {
      marginLeft: '450px',
      marginTop: '19px',
   },
   '& .inputStyle': {
      width: '390px',
      marginLeft: '60px',
      marginTop: ' 14px',
      borderRadius: ' 10px',
   },
   '& .buttonStyle': {
      height: '52px',
      width: '390px',
      marginLeft: '60px',
      marginTop: '20px',
      borderRadius: ' 10px',
      fontSize: '14px',
      marginBottom: '28px',
   },
   '& .buttonGoogle': {
      height: '39px',
      width: '390px',
      marginLeft: '60px',
      marginTop: '24px',
      marginBottom: '30px',
      padding: '10px 20px 10px 20px',
      background: '#F5F5F5',
      fontFamily: 'Manrope',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      color: '#222222',
      '&:hover': {
         background: '#F5F5F5',
      },
   },
   '& .password': {
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '16px',
      marginLeft: '185px',
      marginTop: '500px',
      color: '#346EFB',
      textDecoration: 'none',
   },
   '& .register': {
      marginTop: '20px',
      marginLeft: '149px',
      textDecoration: 'none',
      color: '#3772FF',
      '& span': {
         color: '#222222',
         marginBottom: '50px',
      },
   },
   '& .google': {
      textDecoration: 'none',
      color: '#222222',
      marginLeft: '15px',
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   '& .lineFirst': {
      width: '215px',
      height: '0px',
      color: '#F3F1F1',
      marginTop: '36px',
   },
   '& span': {
      marginTop: '24px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#222222',
   },
   '& .lineSecond': {
      width: '215px',
      height: '0px',
      color: '#F3F1F1',
      marginTop: '36px',
   },
}))
