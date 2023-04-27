import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReactComponent as CloseIcon } from '../../assets/login/CloseIcon.svg'
import Input from '../UI/input/Input'
import Button from '../UI/Button'
import { ReactComponent as Show } from '../../assets/login/Password.svg'
import { ReactComponent as GoogleIcon } from '../../assets/login/image 90.svg'

const SignUp = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
         name: '',
         surname: '',
         number: '',
         email: '',
         password: '',
         copyPassword: '',
      },
   })
   function onSubmit(values) {
      console.log('will come values', values)
   }

   return (
      <FormControlStyled onSubmit={handleSubmit(onSubmit)}>
         <CloseIcon className="closeIcon" />
         <FormLabel className="topic">РЕГИСТРАЦИЯ</FormLabel>
         <div className="inputContainer">
            <Input
               placeholder="Имя"
               className="inputStyle"
               {...register('name', {
                  required: 'pole ne zapolneno',
               })}
            />
            {errors.name && <p>{errors.name?.message}</p>}
            <Input
               placeholder="Фамилия"
               className="inputStyle"
               {...register('surname', {
                  required: 'pole ne zapolneno',
               })}
            />
            {errors.surname && <p>{errors.surname?.message}</p>}
            <Input
               placeholder="+996 (_ _ _) _ _  _ _  _ _ "
               className="inputStyle"
               {...register('number', {
                  required: 'pole ne zapolneno',
               })}
            />
            {errors.number && <p>{errors.number?.message}</p>}
            <Input
               placeholder="Email"
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
               placeholder="Введите пароль"
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
            <Input
               placeholder="Повторите пароль"
               className="inputStyle"
               {...register('copyPassword', {
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
            {errors.copyPassword && <p>{errors.copyPassword?.message}</p>}
         </div>

         <Button className="buttonStyle" type="submit">
            создать аккаунт
         </Button>
         <Line>
            <hr className="lineFirst" />
            <span>или</span>
            <hr className="lineSecond" />
         </Line>
         <Button className="buttonGoogle" startIcon={<GoogleIcon />}>
            <a className="google" href="/">
               Зарегистрироваться с Google
            </a>
         </Button>
         <a className="register" href="/">
            <span>У вас уже есть аккаунт?</span> Войти
         </a>
      </FormControlStyled>
   )
}

export default SignUp

const FormControlStyled = styled('form')(() => ({
   height: '800px',
   width: ' 494px',
   borderRadius: '2px',
   background: '#FFFFFF',
   marginLeft: ' 35%',
   boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
   '& .inputContainer': {
      marginTop: '14px',
      marginLeft: '40px',
   },
   '& .topic': {
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '25px',
      marginLeft: '180px',
      marginTop: ' 17px',
      color: '#222222',
   },
   '& .closeIcon': {
      marginLeft: '450px',
      marginTop: '19px',
   },
   '& .inputStyle': {
      width: '414px',
      borderRadius: ' 10px',
      padding: '10px 8px 10px 16px',
   },
   '& .buttonStyle': {
      height: '53px',
      width: '390px',
      marginLeft: '60px',
      marginTop: '20px',
      borderRadius: ' 10px',
      fontSize: '14px',
      marginBottom: '18px',
   },
   '& .buttonGoogle': {
      height: '39px',
      width: '390px',
      marginLeft: '60px',
      marginTop: '24px',
      marginBottom: '15px',
      padding: '10px 20px 10px 20px',
      background: '#F5F5F5',
      fontFamily: 'Manrope',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      color: '#222222',
      textDecoration: 'none',
      '&:hover': {
         background: '#F5F5F5',
      },
   },
   '& .register': {
      marginLeft: '165px',
      textDecoration: 'none',
      color: '#3772FF',
      '& span': {
         color: '#222222',
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
      marginTop: '20px',
   },
   '& span': {
      marginTop: '14px',
      fontSize: '14px',
      fontWeight: 400,
      color: '#222222',
   },
   '& .lineSecond': {
      width: '215px',
      height: '0px',
      color: '#F3F1F1',
      marginTop: '20px',
   },
}))
