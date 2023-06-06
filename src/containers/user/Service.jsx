import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
} from '@mui/material'
import ServiceCard from '../../components/UI/ServiceCard'
import CardApplication from '../../components/UI/card/CardApplication'
import { ReactComponent as ExpandMoreIcon } from '../../assets/serviceIcons/Указатель.svg'
import { serviceData } from '../../utlis/services/service_data'

function Service() {
   const [expanded, setExpanded] = useState()
   const [colors, setColors] = useState(false)

   console.log(expanded)
   const clickHandler = (panel) => (e, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
      setColors(!colors)
   }
   return (
      <>
         <Hr />
         <MainPart href="/">
            <span>Главная\</span>
            <span className="service">Услуги</span>
         </MainPart>
         <ServiceStyle>
            <span>Наши</span>
            <span className="our_service"> услуги</span>
         </ServiceStyle>
         <ServiceCard />
         <SelectContent>
            <p className="topic">Часто задаваемые вопросы</p>
            <p className="info">
               Специалисты нашей клиники с удовольствием ответят на все ваши
               вопросы. <br /> Ниже представленны наиболее популярные.
            </p>
            <AccordionContainer>
               {serviceData.map((data) => (
                  <AccordionStyle
                     key={data.id}
                     colors={colors}
                     expanded={expanded === data.id}
                     onChange={clickHandler(data.id)}
                  >
                     <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography key={data.id}>{data.title}</Typography>
                     </StyledAccordionSummary>
                     <AccordionDetailsStyle>
                        <Typography key={data.id}>
                           {data.description}
                        </Typography>

                        {data.text.map((el) => (
                           <li key={el}>{el}</li>
                        ))}
                     </AccordionDetailsStyle>
                  </AccordionStyle>
               ))}
            </AccordionContainer>
         </SelectContent>
         <CardApplication />
      </>
   )
}

export default Service

const Hr = styled('hr')(() => ({
   width: '100%',
   height: '10px',
   marginBottom: '30px',
   background: '#DBF0E5',
}))

const MainPart = styled('a')(() => ({
   marginLeft: '120px',
   fontFamily: ' Manrope',
   fontSize: '14px',
   fontWeight: 400,
   lineHeight: '19px',
   textAlign: 'left',
   color: '#959595',
   textDecoration: 'none',
   '& .service': {
      color: '#048741',
   },
}))

const ServiceStyle = styled('div')(() => ({
   fontSize: '36px',
   fontWeight: 600,
   lineHeight: '49px',
   color: '#222222',
   marginLeft: '120px',
   marginBottom: '60px',
   marginTop: '26px',
   '& .our_service': {
      color: '#048741',
   },
}))

const SelectContent = styled('div')(() => ({
   '& .topic': {
      fontFamily: 'Myriad Pro',
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '36px',
      letterSpacing: '0em',
      textAlign: 'left',
      height: '36px',
      marginLeft: '120px',
      top: '1760px',
      borderRadius: 'nullpx',
      marginBottom: '34px',
      color: '#222222',
   },
   '& .info': {
      width: '816px',
      height: '64px',
      color: '#4D4E51',
      fontFamily: ' Manrope',
      fontSize: '18px',
      lineHeight: ' 25px',
      letterSpacing: '0em',
      textAlign: 'left',
      marginLeft: '120px',
      marginBottom: '16px',
   },
}))

const AccordionContainer = styled('div')(() => ({
   width: '852px',
   marginLeft: '121px',
}))

const AccordionStyle = styled(Accordion)(() => ({
   // width: '852px',
   marginBottom: '16px',
   borderRadius: '10px',
   boxShadow: 'none',
}))

const StyledAccordionSummary = styled(AccordionSummary)((colors) => ({
   borderLeft: '10px solid #048741',
   borderRadius: '10px',
   background: '#DBF0E5',
   '&:focus': {
      background: '#048741',
      color: colors ? '#fff' : '#222',
   },
}))

const AccordionDetailsStyle = styled(AccordionDetails)(() => ({
   marginTop: '23px',
   // width: '806px',
   marginBottom: '20px',
   color: '#4D4E51',
   fontSize: '16px',
   '& li': {
      // width: '798px',
      marginBottom: '20px',
      color: '#4D4E51',
      fontSize: '16px',
      marginTop: '20px',
      marginLeft: '26px',
   },
}))
