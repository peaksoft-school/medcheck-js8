import React, { useState } from 'react'
import {
   styled,
   FormControl,
   InputLabel,
   InputAdornment,
   IconButton,
} from '@mui/material'
import { useFormAction } from 'react-router-dom'
import { ReactComponent as VisibilityOff } from '../../../../assets/icons/VisibilityOff.svg'
import { ReactComponent as Visibility } from '../../../../assets/icons/Visibility.svg'
import Button from '../../../../components/UI/Button'
import Input from '../../../../components/UI/input/Input'

const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showPasswordNew, setShowPasswordCopy] = useState(false)
   const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useFormAction({
      mode: 'all',
      defaultValues: {
         password: '',
         newPassword: '',
         confirmPassword: '',
      },
   })

   function onSubmit(values) {
      console.log('will come values', values)
   }

   const handleClickShowPassword = () => setShowPassword((show) => !show)
   const handleClickshowPasswordCopy = () =>
      setShowPasswordCopy((show) => !show)
   const handleClickshowPasswordConfirm = () =>
      setShowPasswordConfirm((show) => !show)

   const clickHandler = (event) => {
      event.preventDefault()
   }

   return (
      <Container onSubmit={handleSubmit(onSubmit)}>
         <StyledTitleText>Смена пароля </StyledTitleText>
         <StyledForm>
            <div>
               <StyledInputLabel htmlFor="old_password">
                  Старый пароль
               </StyledInputLabel>
               <FormControl variant="outlined">
                  <Input
                     id="old_password"
                     placeholder="Введите ваш пароль"
                     className="inputStyle"
                     error={errors.password}
                     {...register('password', {
                        required: 'введите старый пароль',
                     })}
                     type={showPassword ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={handleClickShowPassword}
                                 onMouseDown={clickHandler}
                              >
                                 {showPassword ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
               </FormControl>
               {errors.password && (
                  <p className="message">{errors.password?.message}</p>
               )}
            </div>
            <div>
               <StyledInputLabel htmlFor="new_password">
                  Новый пароль
               </StyledInputLabel>
               <FormControl variant="outlined">
                  <Input
                     placeholder="Введите новый пароль"
                     id="new_password"
                     className="inputStyle"
                     error={errors.newPassword}
                     {...register('newPassword', {
                        required: 'поле не заполнено',
                        maxLength: {
                           value: 15,
                           message: 'слишком много деталей',
                        },
                        minLength: {
                           value: 5,
                           message: 'слишком мало деталей',
                        },
                     })}
                     type={showPasswordNew ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={handleClickshowPasswordCopy}
                                 onMouseDown={clickHandler}
                              >
                                 {showPasswordNew ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
                  {errors.newPassword && (
                     <p className="message">{errors.newPassword?.message}</p>
                  )}
               </FormControl>
            </div>
            <div>
               <StyledInputLabel htmlFor="confirm_password">
                  Подтвердить новый пароль
               </StyledInputLabel>
               <FormControl variant="outlined">
                  <Input
                     className="inputStyle"
                     placeholder="Подтвердите пароль"
                     id="confirm_password"
                     error={errors.confirmPassword}
                     {...register('confirmPassword', {
                        required: 'пароль не совпадает',
                        maxLength: {
                           value: 15,
                           message: 'слишком много деталей',
                        },
                        minLength: {
                           value: 5,
                           message: 'слишком мало деталей',
                        },
                     })}
                     type={showPasswordConfirm ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={handleClickshowPasswordConfirm}
                                 onMouseDown={clickHandler}
                              >
                                 {showPasswordConfirm ? (
                                    <VisibilityOff />
                                 ) : (
                                    <Visibility />
                                 )}
                              </IconButton>
                           </InputAdornment>
                        ),
                     }}
                  />
                  {errors.confirmPassword && (
                     <p className="message">
                        {errors.confirmPassword?.message}
                     </p>
                  )}
               </FormControl>
            </div>
         </StyledForm>
         <StyledBoxButton>
            <StyledButton type="submit" variant="contained">
               Назад
            </StyledButton>
            <Button type="submit" variant="outlined">
               Подтвердить
            </Button>
         </StyledBoxButton>
      </Container>
   )
}

export default ChangePassword

const Container = styled('form')`
   width: 90%;
   margin-top: 26px;
   margin-bottom: 40px;
`

const StyledTitleText = styled('h1')`
   font-family: 'Manrope';
   font-weight: 600;
   font-size: 1.13rem;
   line-height: 25px;
   color: #222222;
   margin-bottom: 20px;
   letter-spacing: 0.2px;
`

const StyledForm = styled('div')(() => ({
   '& ': {
      width: '100%',
      marginBottom: '5px',
   },
   '& p': {
      fontSize: '1rem',
      color: '#f91515',
      fontFamily: 'Manrope',
      fontWeight: 400,
      lineHeight: '19px',
      marginBottom: '4px',
   },
   '& .inputStyle': {
      width: '180%',
      marginLeft: '2px',
      borderRadius: ' 8px',
      marginBottom: '22px',
      border: '1px solid #D9D9D9',

      '& input:hover': {
         width: '180%',
         border: '1px #ffffff',
      },
      '& input:active': {
         width: '180%',
      },
   },

   '& .message': {
      color: '#f13131',
      fontSize: '0.75rem',
      marginLeft: '10px',
      marginTop: '-24px',
   },
}))

const StyledBoxButton = styled('div')`
   max-width: 60%;
   min-width: 50%;
   display: flex;
   justify-content: start;
   margin-top: 26px;
   margin-bottom: 40px;
   gap: 20px;
   & button {
      width: 31%;
   }
`

const StyledButton = styled(Button)(() => ({
   '&': {
      fontFamily: 'Manrope,sans-serif',
      padding: '14px 67px',
      lineHeight: '16px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#027B44',
      background: '#FFFFFF',
      border: '2px solid #027B44',
      borderRadius: '10px',
      letterSpacing: ' 0.1em',
   },
   '&:hover': {
      color: '#027B44',
      background: '#FFFFFF',
   },
   '&:active': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: '#FFFF',
   },
   '&:disabled': {
      background: '#D3D3D3',
      color: '#FFFF',
   },
}))

const StyledInputLabel = styled(InputLabel)(() => ({
   '&': {
      fontSize: '1rem',
      color: '#464444',
      fontFamily: 'Manrope',
      fontWeight: 400,
      lineHeight: '19px',
   },
}))
