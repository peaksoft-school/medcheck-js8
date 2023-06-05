import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Breadcrumbs,
   Stack,
   Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { useParams } from 'react-router'
import { serviceDetails } from '../../utlis/helpers/serviceDetails'
import { FeedbackSlider } from '../../components/feedback-slider/FeedbackSlider'

const ServiceDetails = () => {
   const { id } = useParams()
   console.log(id)
   const currentService = serviceDetails.find(
      (service) => service.id === Number(id)
   )
   console.log(currentService.price)

   return (
      <div>
         <Container>
            <Stack spacing={3} style={{ paddingTop: '30x' }}>
               <Breadcrumbs
                  separator="›"
                  aria-label="breadcrumb"
                  style={{
                     marginTop: '30px',
                  }}
               >
                  <StyledNavLink to="/admin/specialists">
                     <p>Главная</p>
                  </StyledNavLink>
                  <StyledNavLink to="/admin/specialists">
                     <p>Услуги</p>
                  </StyledNavLink>
                  <div>
                     <p>{currentService.name}</p>
                  </div>
               </Breadcrumbs>
            </Stack>
            <NameStyled>{currentService.name}</NameStyled>
            <TitleStyled>{currentService.title}</TitleStyled>
            <QuetioansStyled>{currentService.questions}</QuetioansStyled>
            <TitleStyled>{currentService.description}</TitleStyled>
            <ListStyled>
               {currentService.answers.map((item) => {
                  return <LisStyled>{item.answer}</LisStyled>
               })}
            </ListStyled>
            <QuetioansStyled>{currentService.questionstwo}</QuetioansStyled>
            <TitleStyled>{currentService.descriptiontwo}</TitleStyled>
            <ListStyled>
               {currentService.answersTwo.map((el) => {
                  return <LisStyled>{el.answer}</LisStyled>
               })}
            </ListStyled>
            <DoctorInfo>
               Цены на прием{' '}
               <DoctorName>{currentService.doctorName}</DoctorName>
            </DoctorInfo>
            <div style={{ width: '852px' }}>
               <ContainerPrice>
                  <p>Услуга</p>
                  <p>Стоимость</p>
               </ContainerPrice>
               {currentService.price.map((item) => {
                  return (
                     <StyledAccordion key={item.price}>
                        <StyledAccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1bh-content"
                           id="panel1bh-header"
                        >
                           <StyledInfoPriceTypography
                              sx={{ width: '42%', flexShrink: 0 }}
                           >
                              {item.title}
                           </StyledInfoPriceTypography>

                           <StyledInfoPriceTypography
                              sx={{
                                 width: '33%',
                                 flexShrink: 0,
                                 margin: '0 10px 0 0',
                              }}
                           >
                              {item.price}
                           </StyledInfoPriceTypography>
                        </StyledAccordionSummary>
                        <AccordionDetails>
                           <StyledDascriptionTypography>
                              {item.description}
                           </StyledDascriptionTypography>
                        </AccordionDetails>
                     </StyledAccordion>
                  )
               })}

               <StyledContainerPrice>
                  {currentService.priceInfo.map((item) => {
                     return (
                        <>
                           <InfoPrice>{item.titlee}</InfoPrice>
                           <InfoPrice>{item.priceInfo}</InfoPrice>
                        </>
                     )
                  })}
               </StyledContainerPrice>
            </div>
         </Container>
         <FeedbackSlider />
      </div>
   )
}

export default ServiceDetails

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
   padding: '0',
   textAlign: 'end',
   '& .MuiAccordionSummary-content': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const StyledAccordion = styled(Accordion)(() => ({
   border: 'none',
   background: 'none',
   boxShadow: 'none',
   borderBottom: '1px solid #E0E2E7',
   '&.MuiAccordion-root': {
      margin: 0,
   },
}))
const StyledDascriptionTypography = styled(Typography)(() => ({
   color: '#4D4E51',
}))
const StyledInfoPriceTypography = styled(Typography)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '18px',
   lineHeight: '25px',
   color: '#4D4E51',
}))

const Container = styled('div')(() => ({
   paddingLeft: '120px',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
}))

const ListStyled = styled('ul')(() => ({
   color: '#048741',
   paddingLeft: '20px',
   paddingTop: '12px',
}))

const LisStyled = styled('li')(() => ({
   color: '#222222',
   fontWeight: 300,
   fontSize: '16px',
   lineHeight: '180%',

   '&::marker': {
      color: '#048741',
   },
}))

const StyledNavLink = styled(NavLink)(() => ({
   color: '#048741',
}))

const NameStyled = styled('h1')(() => ({
   fontWeight: 600,
   fontSize: '36px',
   lineHeight: '49px',
   color: '#048741',
   paddingTop: '26px',
   paddingBottom: '34px',
}))

const TitleStyled = styled('p')(() => ({
   fontWeight: 300,
   fontSize: '16px',
   lineHeight: '150%',
   width: '742px',
   color: '#222222',
}))

const QuetioansStyled = styled('h5')(() => ({
   fontWeight: 600,
   fontSize: '24px',
   lineHeight: '33px',
   color: '#4D4E51',
   paddingBottom: '1rem',
   paddingTop: '50px',
}))

const DoctorInfo = styled('h4')(() => ({
   paddingTop: '120px',
   fontWeight: 700,
   fontSize: '36px',
   lineHeight: '49px',
}))

const DoctorName = styled('span')(() => ({
   color: '#048741',
}))

const ContainerPrice = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   background: '#DBF0E5',
   borderRadius: '10px',
   height: '59px',
   paddingLeft: '30px',
   paddingRight: '38px',
}))

const StyledContainerPrice = styled('div')(() => ({
   borderBottom: '1px solid #E0E2E7',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '16px 34px 16px 21px',
   marginBottom: '120px',
}))

const InfoPrice = styled('p')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '18px',
   lineHeight: '25px',
   color: '#4D4E51',
}))
