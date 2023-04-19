import React from 'react'
import styled from '@emotion/styled'
import Sellect from '../UI/select/Sellect'
import CardApplication from '../UI/card/CardApplication'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import ServiceBox from '../UI/servicebox/ServiceCard'

function Service() {
   return (
      <div>
         <Header />
         <Hr />
         <MainPart href="/">
            <span>Главная\</span>
            <span className="service">Услуги</span>
         </MainPart>
         <ServiceStyle>
            <span>Наши</span>
            <span className="our_service"> услуги</span>
         </ServiceStyle>
         <ServiceBox />
         <SelectContent>
            <p className="topic">Часто задаваемые вопросы</p>
            <p className="info">
               Специалисты нашей клиники с удовольствием ответят на все ваши
               вопросы. <br /> Ниже представленны наиболее популярные.
            </p>

            <Sellect />
         </SelectContent>
         <CardApplication />
         <Footer />
      </div>
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
