import styled from '@emotion/styled'
import React, { useState } from 'react'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
} from '@mui/material'
import { ReactComponent as ExpandMoreIcon } from '../../assets/serviceIcons/Указатель.svg'
import { priceData } from '../../utlis/price/price'

const Price = () => {
   const [expanded, setExpanded] = useState(false)
   const [colors, setColors] = useState(false)

   const clickHandler = (panel) => (e, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
      setColors(!colors)
   }
   return (
      <>
         <Hr />
         <MainPart href="/">
            <span>Главная \</span>
            <span className="service"> Прайс</span>
         </MainPart>
         <ServiceStyle>
            <span>Наш</span>
            <span className="our_service"> прайс</span>
         </ServiceStyle>
         <P>
            Цены на услуги формируются в соответствии с действующими
            Прейскурантами. Общая стоимость зависит от объема услуг, оказываемых
            в рамках приёма. Объём оказываемых услуг определяется врачом, исходя
            из показаний для обследования и пожеланий клиента.
         </P>

         <AccordionContainer>
            {priceData.map((data) => (
               <AccordionStyle
                  key={data.title}
                  colors={colors}
                  expanded={expanded === data.title}
                  onChange={clickHandler(data.title)}
               >
                  <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                     <Typography key={data.title}>{data.title}</Typography>
                  </StyledAccordionSummary>
                  <AccordionDetailsStyle>
                     <Typography key={data.title}>
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              width: '820px',
                           }}
                        >
                           {' '}
                           <span>{data.description}</span>{' '}
                           <span>{data.totalPrice}</span>
                        </div>
                     </Typography>
                     {data.info.map((el) => (
                        <li key={el} style={{ listStyle: 'none' }}>
                           {el}
                        </li>
                     ))}
                     <hr style={{ width: '820px' }} />
                     <br />
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           width: '820px',
                        }}
                     >
                        {' '}
                        <span>{data.description1}</span>{' '}
                        <span>{data.price}</span>
                     </div>
                     <br />
                     <br />
                     <hr style={{ width: '820px' }} />
                     <br />
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           width: '820px',
                        }}
                     >
                        {' '}
                        <span>{data.description2}</span>{' '}
                        <span>{data.price}</span>
                     </div>
                     <br />
                     <hr style={{ width: '820px' }} />
                  </AccordionDetailsStyle>
               </AccordionStyle>
            ))}
         </AccordionContainer>
      </>
   )
}

export default Price
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
   marginBottom: '34px',
   marginTop: '26px',
   '& .our_service': {
      color: '#048741',
   },
}))
const P = styled('p')(() => ({
   width: '691px',
   height: '100px',
   fontSize: '18px',
   fontWeight: 400,
   lineHeight: '24px',
   color: ' #4D4E51',
   fontFamily: ' Manrope',
   marginLeft: '120px',
   marginBottom: '40px',
}))
const AccordionContainer = styled('div')(() => ({
   width: '852px',
   marginLeft: '121px',
}))

const AccordionStyle = styled(Accordion)(() => ({
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
   color: '#4D4E51',
   fontSize: '16px',
   '& li': {
      marginBottom: '20px',
      color: '#4D4E51',
      fontSize: '16px',
      marginTop: '20px',
      marginLeft: '10px',
   },
}))
