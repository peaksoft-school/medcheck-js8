import { useEffect, useState } from 'react'
import * as yup from 'yup'

export const getStatusTitleChangeHandler = (statusTitle) => {
   if (statusTitle === 'Cancelled') {
      return 'Отменён'
   }
   if (statusTitle === 'Confirmed') {
      return 'Подтверждён'
   }
   if (statusTitle === 'Completed') {
      return 'Завершён'
   }
   return null
}

export const useDebounce = (value, delay) => {
   const [debouncedValue, setDebouncedValue] = useState(value)
   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)
      return () => {
         clearTimeout(handler)
      }
   }, [value])
   return debouncedValue
}

export const addSpecialistSchema = yup.object().shape({
   firstName: yup
      .string()
      .min(3, 'the lenght should be from 3')
      .required('Поле "firstName" обязательно для заполнения'),
   lastName: yup
      .string()
      .min(2)
      .required('Поле "lastName" обязательно для заполнения')
      .min(3, 'the lenght should be from 3'),
   position: yup
      .string()
      .required('Поле "position" обязательно для заполнения'),
   description: yup
      .string()
      .required('Поле "description" обязательно для заполнения'),
   department: yup
      .string()
      .required('Поле "Отделение" обязательно для заполнения'),
})

export const postDataProfieValid = yup.object().shape({
   firstName: yup
      .string()
      .required('Поле "firstName" обязательно для заполнения')
      .matches(/^[А-ЯЁ][а-яё]*$/, 'Имя должно начинаться с большой буквы'),
   lastName: yup
      .string()
      .min(2)
      .required('Поле "lastName" обязательно для заполнения')
      .matches(/^[А-ЯЁ][а-яё]*$/, 'Имя должно начинаться с большой буквы'),
   email: yup
      .string()
      .email('Неверный формат E-mail')
      .required('Поле "email" обязательно для заполнения'),
})
