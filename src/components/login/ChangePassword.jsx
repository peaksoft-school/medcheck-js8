import React from 'react'
import { useForm } from 'react-hook-form'
import { FormLabel, InputAdornment } from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as CloseIcon } from '../../assets/login/CloseIcon.svg'
import Input from '../UI/input/Input'
import Button from '../UI/Button'
import { ReactComponent as Show } from '../../assets/login/Password.svg'

const ChangePassword = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      mode: 'all',
      defaultValues: {
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
         <FormLabel className="topic">смена пароля</FormLabel>
         <p>Вам будет отправлена ссылка для сброса пароля</p>
         {errors.email && <p>{errors.email?.message}</p>}
         {errors.password && <p>{errors.password?.message}</p>}
         <Input
            placeholder="Введите новый пароль"
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
         {errors.copyPassword && <p>{errors.copyPassword?.message}</p>}
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
         <Button className="buttonStyle" type="submit">
            подтвердить
         </Button>
      </FormControlStyled>
   )
}

export default ChangePassword

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
      marginBottom: '10px',
      '&:hover': {
         border: '1px solid #D9D9D9',
      },
   },
   '& .buttonStyle': {
      height: '47px',
      width: '414px',
      marginLeft: '40px',
      marginTop: '10px',
      borderRadius: ' 10px',
      fontSize: '14px',
   },
}))
