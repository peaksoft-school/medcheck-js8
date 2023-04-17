import React, { useState } from 'react'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import { ReactComponent as ExpandMoreIcon } from '../../../assets/serviceIcons/Указатель.svg'

function Sellect({ data }) {
   const [expanded, setExpanded] = useState()

   const clickHandler = (panel) => (e, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
   }
   return (
      <AccordionContainer>
         {data.map((data) => (
            <AccordionStyle
               key={data.id}
               expanded={expanded === data.id}
               onChange={clickHandler(data.id)}
            >
               <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography key={data.id}>{data.title}</Typography>
               </StyledAccordionSummary>
               <AccordionDetailsStyle>
                  <Typography key={data.id}>{data.description}</Typography>

                  {data.text.map((el) => (
                     <li key={el}>{el}</li>
                  ))}
               </AccordionDetailsStyle>
            </AccordionStyle>
         ))}
      </AccordionContainer>
   )
}

export default Sellect

const AccordionContainer = styled('div')(() => ({
   width: '852px',
   marginLeft: '121px',
}))

const AccordionStyle = styled(Accordion)(() => ({
   width: '852px',
   marginBottom: '16px',
   borderRadius: '10px',
   boxShadow: 'none',
}))

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
   borderLeft: '10px solid #048741',
   borderRadius: '10px',
   background: '#DBF0E5',
   '&:focus': {
      background: '#048741',
   },
}))

const AccordionDetailsStyle = styled(AccordionDetails)(() => ({
   marginTop: '23px',
   width: '806px',
   marginBottom: '20px',
   color: '#4D4E51',
   fontSize: '16px',
   '& li': {
      width: '798px',
      marginBottom: '20px',
      color: '#4D4E51',
      fontSize: '16px',
      marginTop: '20px',
      marginLeft: '26px',
   },
}))
