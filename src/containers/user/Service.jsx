import React from 'react'
import styled from '@emotion/styled'
import ServiceCard from '../../components/UI/ServiceCard'
import Sellect from '../../components/UI/select/Sellect'
import { CardApplication } from '../../components/UI/card/CardApplication'

function Service() {
   window.scrollTo({ top: 0 })
   return (
      <div>
         <Hr />
         <MainPart href="/">
            <span>Главная {' > '}</span>
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

            <Sellect />
         </SelectContent>
         <CardApplication />
      </div>
   )
}

export default Service

export const Hr = styled('hr')(() => ({
   width: '100%',
   height: '10px',
   marginBottom: '30px',
   background: '#DBF0E5',
   border: 'none',
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
