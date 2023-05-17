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
      .required('Поле "firstName" обязательно для заполнения')
      .matches(/^[A-Z][a-z]*$/, 'Имя должно начинаться с большой буквы'),
   lastName: yup
      .string()
      .min(2)
      .required('Поле "lastName" обязательно для заполнения')
      .matches(/^[A-Z][a-z]*$/, 'Имя должно начинаться с большой буквы'),
   position: yup
      .string()
      .required('Поле "position" обязательно для заполнения'),
   description: yup
      .string()
      .required('Поле "description" обязательно для заполнения'),
   department: yup.string(),
})
