import React from 'react'
import { CardContent, styled } from '@mui/material'

const CardApp = ({ image, fullName, profession }) => {
   return (
      <>
         <Container>
            <IMG src={image} alt="врач" />
         </Container>
         <CardContentStyled>
            <FullNameStyled>{fullName}</FullNameStyled>
            <ProfessionalStyled>{profession}</ProfessionalStyled>
            <StyledButton>Записаться на прием</StyledButton>
         </CardContentStyled>
      </>
   )
}

export default CardApp

const Container = styled('div')({
   width: '319px',
   height: '349px',
   padding: 0,
   background:
      'radial-gradient(43.84% 43.84% at 50.16% 55.3%, #FDFDFD 0%, #E4E7EE 100%)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'flex-end',
   borderRadius: '4px',
})

const FullNameStyled = styled('h3')({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#222222',
})

const ProfessionalStyled = styled('p')({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '22px',
   color: ' #959595',
   marginBottom: '18px',
})

const CardContentStyled = styled(CardContent)({
   padding: '16px 0',
})
const IMG = styled('img')({
   display: 'flex',
   alignItems: 'flex-start',
})

const StyledButton = styled('button')({
   color: '#029847',
   border: '1px solid #029847',
   background: 'none',
   borderRadius: '10px',
   padding: '10px 20px',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '22px',
   '&:hover': {
      border: 'none',

      color: '#FFFFFF',
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   },
})
