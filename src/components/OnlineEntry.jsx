import React, { useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import AppTable from './UI/Table'
import { item } from '../utlis/constants/commons'
import { ReactComponent as TrashIcon } from '../assets/icons/TrashTable.svg'
import CheckboxApp from './UI/checkbox/Checkbox'

const OnlineEntry = () => {
   const [isChecked, setIsChecked] = useState(false)

   const handleCheckBoxChangeHandler = (event) => {
      setIsChecked(event.target.checked)
   }
   const handleDeleteClick = () => {}
   const column = [
      {
         header: <CheckboxApp style={{ display: 'flex' }} />,
         key: 'checkbox',
         render: () => (
            <Grid>
               <IconButton
                  checked={isChecked}
                  onChange={handleCheckBoxChangeHandler}
               >
                  <CheckboxApp />
               </IconButton>
            </Grid>
         ),
      },
      {
         header: <TrashIcon style={{ marginLeft: '10px' }} />,
         key: 'delete',
         render: () => (
            <Grid>
               <IconButton onClick={handleDeleteClick}>
                  {isChecked && <TrashIcon />}
               </IconButton>
            </Grid>
         ),
      },
      {
         header: '№',
         key: 'id',
         time: 'id',
         index: true,
      },
      {
         header: 'Имя и фамилия',
         key: 'name',
      },
      {
         header: 'Номер телефона',
         key: 'telNumber',
      },

      {
         header: 'Почта',
         key: 'mail',
      },
      {
         header: 'Выбор услуги',
         key: 'serviceSelection',
      },
      {
         header: 'Выбор специалиста',
         key: 'changeSpecialist',
      },
      {
         header: 'Дата и время',
         key: 'date',
         time: 'time',
      },
      {
         header: 'Обработан',
         key: 'processed',
         render: () => (
            <Grid style={{ textAlign: 'center' }}>
               <IconButton>
                  <CheckboxApp />
               </IconButton>
            </Grid>
         ),
      },
      {
         header: 'Действия',
         key: 'action',
         render: () => (
            <Grid style={{ textAlign: 'center' }}>
               <IconButton>
                  <TrashIcon />
               </IconButton>
            </Grid>
         ),
      },
   ]

   return (
      <div>
         <AppTable rows={item} columns={column} />
      </div>
   )
}

export default OnlineEntry
