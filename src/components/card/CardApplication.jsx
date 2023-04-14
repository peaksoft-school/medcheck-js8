import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// import Dialog from '@mui/material/Dialog'
// import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { InputAdornment } from '@mui/material'
import { ReactComponent as Users } from '../../assets/serviceIcons/Users.svg'
import { ReactComponent as Women } from '../../assets/serviceIcons/Women.svg'

export default function CardApplication() {
   // const [open, setOpen] = React.useState(false)

   // const handleClickOpen = () => {
   //    setOpen(true)
   // }

   // const handleClose = () => {
   //    setOpen(false)
   // }

   return (
      <div>
         {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
         </Button> */}
         <div
            style={{
               display: 'flex',
               marginTop: '190px',
               marginLeft: '140px',
               marginBottom: '120px',
            }}
         >
            <div
               style={{
                  width: '660px',
                  height: '460px',
                  border: '1px solid red',
               }}
            >
               <DialogTitle>Оставьте заявку</DialogTitle>
               <DialogContent>
                  <DialogContentText>
                     Оставьте свой номер и наши специалисты свяжутся с Вами в
                     ближайшее время
                  </DialogContentText>
                  <TextField
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <Users />
                           </InputAdornment>
                        ),
                     }}
                     margin="dense"
                     id="name"
                     type="email"
                     variant="outlined"
                     placeholder="Введите имя"
                     helperText="Как к Вам обратиться?"
                  />
                  <TextField
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <Users />
                           </InputAdornment>
                        ),
                     }}
                     margin="dense"
                     id="name"
                     type="email"
                     variant="outlined"
                     placeholder="+996 (___) __-__-__"
                     helperText="Номер мобильного телефона"
                  />
               </DialogContent>
               <div>
                  <Button>ОТПРАВИТЬ ЗАЯВКУ</Button>
               </div>
            </div>
            <div style={{ marginTop: '-70px' }}>
               <Women />
            </div>
         </div>
      </div>
   )
}
