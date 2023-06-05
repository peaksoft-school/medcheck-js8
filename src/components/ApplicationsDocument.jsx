import { styled } from '@mui/material/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'
import barcodeIcon from '../assets/icons/barcodeIcon.svg'
import medcheckIcon from '../assets/icons/MedcheckLogo.svg'
import medcheck from '../assets/icons/MedCheckIcon.svg'

const ApplicationsDocument = ({ getResult }) => {
   return (
      <div>
         <ReferenceBoxStyle>
            <LogoReferenceBox>
               <div>
                  <NavLink to="/">
                     <LogoReferenceStyle src={medcheckIcon} alt="logo" />
                  </NavLink>
                  <NavLink to="/">
                     <LogoMedcheckStyle src={medcheck} alt="medcheck" />
                  </NavLink>
               </div>
               <BoxStyle>
                  <p>
                     № заявки для просмотра результатов анализов на сайте
                     <a href="/">MedCheck-me.ru</a>
                  </p>
                  <img src={barcodeIcon} alt="barcode" />
               </BoxStyle>
            </LogoReferenceBox>

            <GetResultsInfoStyle>
               <div>
                  <h3>Услуга: {getResult.name}</h3>
               </div>
               <div>
                  <p>Пациент: {getResult.patientFullName}</p>
                  <p>Телефон :{getResult.patientPhoneNumber}</p>
                  <p>Email :{getResult.patientEmail}</p>
               </div>
               <div>
                  № заявки
                  <h2>{getResult.orderNumber}</h2>
               </div>
            </GetResultsInfoStyle>
            <h3>Внимание!!!</h3>
            <TitleStyle>
               В случае сомнительного результата,лаборатория оставляет за собой
               право задержать результат для перепроверки.
            </TitleStyle>
         </ReferenceBoxStyle>
      </div>
   )
}

export default ApplicationsDocument
const LogoReferenceStyle = styled('img')({
   width: '45px',
   height: '45px',
})
const LogoMedcheckStyle = styled('img')({
   marginBottom: '14px',
})
const LogoReferenceBox = styled('div')({
   display: 'flex',
   justifyContent: 'space-around',
   borderBottom: '1px solid #716B6B',
   fontFamily: 'Manrope',
   paddingBottom: '10px',
})
const BoxStyle = styled('div')({
   display: 'flex',
   p: {
      width: '200px',
      fontFamily: 'Roboto',
      fontWeight: 600,

      a: {
         marginLeft: '7px',
      },
   },
   img: {
      width: '200px',
      height: '50px',
   },
})
const GetResultsInfoStyle = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '10px 0',
   fontFamily: 'Manrope',

   h2: {
      border: '2px solid  #222222',
      padding: '7px',
   },
})

const TitleStyle = styled('p')({
   fontWeight: 600,
   fontFamily: 'Manrope',
   fontSize: '14px',
})
const ReferenceBoxStyle = styled('div')({
   position: 'absolute',
   right: '2rem',
   bottom: '20px',
   padding: '40px',
   width: '52vw',
   background: '#FFFF',
})
