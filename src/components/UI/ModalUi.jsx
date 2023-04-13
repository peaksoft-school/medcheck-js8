import * as React from 'react'
import {
   styled,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@mui/material'

export const ModalUi = (props) => {
   const { open, onClose, children } = props
   return (
      <StyledModalDialog open={open} onClose={onClose}>
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
            </DialogTitle>
            <DialogContent>
               {children}
               <DialogContentText id="alert-dialog-content" />
               <StyledContentText>
                  {/* this could be content text */}
               </StyledContentText>
            </DialogContent>
            <StyledForm>{/* there could be input forms here */}</StyledForm>
            <DialogActions>{/* there might be a button here */}</DialogActions>
         </StyledModal>
      </StyledModalDialog>
   )
}

const StyledModalDialog = styled(Dialog)(() => ({
   boxSizing: 'border-box',
   background: '#04030343',
   fontFamily: 'Manrope',

   '& .MuiDialog-paper': {
      borderRadius: '16px',
      maxWidth: '659px',
      minWidth: '303px',
      minHeight: '284px',
      maxHeight: '468px',
      background: '#EBF2FC',
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
