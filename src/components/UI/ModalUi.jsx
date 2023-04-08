import * as React from 'react'
import {
   styled,
   Dialog,
   Button,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { ReactComponent as CloseIcon } from '../../assets/icons/closeIcon.svg'

export const ModalUi = (props) => {
   const {
      open,
      onClose,
      onClick,
      contentText,
      titleText,
      mainText,
      FormInput,
   } = props
   return (
      <div>
         <StyledModalDialog open={open} onClose={onClose}>
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: '#959595',
               }}
            >
               <CloseIcon />
            </IconButton>
            <StyledModal>
               <DialogTitle
                  sx={{
                     fontSize: '36px',
                     display: 'flex',
                     justifyContent: 'center',
                     fontFamily: 'Manrope',
                  }}
                  id="alert-dialog-title"
               >
                  {/* this could be the title text */}
                  {titleText || null}
               </DialogTitle>
               <DialogTitle
                  sx={{
                     fontSize: '28px',
                     display: 'flex',
                     justifyContent: 'center',
                     fontFamily: 'Manrope',
                  }}
                  id="alert-dialog-main"
               >
                  {/* this could be the main text */}
                  {mainText || null}
               </DialogTitle>
               <DialogContent>
                  <DialogContentText id="alert-dialog-content" />
                  <StyledContentText>
                     {/* this could be content text */}
                     {contentText || null}
                  </StyledContentText>
               </DialogContent>
               <StyledForm>
                  {/* there could be input forms here */}
                  {FormInput || null}
                  {FormInput || null}
               </StyledForm>
               <DialogActions>
                  {/* there might be a button here */}
                  <Button fullWidth onClick={onClick}>
                     Отменить
                  </Button>
                  <Button fullWidth onClick={onClose} autoFocus>
                     Удалить
                  </Button>
               </DialogActions>
            </StyledModal>
         </StyledModalDialog>
      </div>
   )
}

const StyledModalDialog = styled(Dialog)(() => ({
   boxSizing: 'border-box',
   background: '#5f575743',
   fontFamily: 'Manrope',

   '& .MuiDialog-paper': {
      borderRadius: '16px',
      maxWidth: '659px',
   },
}))
const StyledContentText = styled('div')(() => ({
   fontFamily: 'Manrope',
   fontSize: '18px',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledModal = styled('div')(() => ({
   maxWidth: '100%',
   background: '#EBF2FC',
   boxSizing: 'border-box',
   padding: '50px 40px 70px 40px',
   borderRadius: '20px',
}))

const StyledForm = styled('div')(() => ({
   display: 'flex',
   gap: '20px',
}))
