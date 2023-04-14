import React from 'react'
import styled from '@emotion/styled'
import Grid from '@mui/material/Grid'
import { MED_SERVICE } from '../../utlis/services/img_service'
import Sellect from '../UI/select/Sellect'
import CardApplication from '../card/CardApplication'

function Service() {
   return (
      <div>
         <Hr />
         <MainPart href="/">
            <span>Главная\</span>
            <span className="service">Услуги</span>
         </MainPart>
         <ServiceStyle>
            <span>Наши</span>
            <span className="our_service"> услуги</span>
         </ServiceStyle>
         <GridContainer container>
            {MED_SERVICE.map((el) => {
               return (
                  <Grid item xs={6} key={el.id}>
                     <div className="grid">
                        <span className="img">{el.img}</span>
                        <a href="/">{el.title}</a>
                     </div>
                  </Grid>
               )
            })}
         </GridContainer>
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

const Hr = styled('hr')(() => ({
   width: '100%',
   height: '10px',
   marginTop: '16px',
   marginBottom: '30px',
   background: '#DBF0E5',
}))

const MainPart = styled('a')(() => ({
   marginLeft: '120px',
   marginBottom: '26px',
   fontFamily: ' Manrope',
   fontSize: '14px',
   fontWeight: 400,
   lineHeight: '19px',
   letterSpacing: '0px',
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
   '& .our_service': {
      color: '#048741',
   },
}))

const GridContainer = styled(Grid)(() => ({
   width: '889px',
   height: '1252px',
   marginLeft: '120px',
   color: '#4D4E51',
   fontFamily: 'Manrope',
   fontSize: '18px',
   fontWeight: 500,
   lineHeight: '24px',
   marginBottom: '120px',
   '& .grid': {
      display: 'flex',
      alignItems: 'center',
      width: '430px',
      height: '90px',
      border: '1px solid #D9D9D9',
      borderRadius: '4px',
      ':hover': {
         background:
            'radial-gradient(43.84% 43.84% at 50.16% 55.3%, #FDFDFD 0%, #E4E7EE 100%)',
      },
   },
   '& .img': {
      marginLeft: '22px',
   },
   '& a': {
      marginLeft: '23px',
      textDecoration: 'none',
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
      marginTop: '34px',
      marginBottom: '16px',
   },
}))
