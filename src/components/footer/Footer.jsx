import React from 'react'
import styled from '@emotion/styled'
import medCheck from '../../assets/icons/Vector.svg'
import medChecks from '../../assets/icons/MedCheck.svg'
import GeoPoint from '../../assets/icons/GeoPoint.svg'
import AntDesign from '../../assets/icons/Clock.svg'
import Vector from '../../assets/icons/Vector (1).svg'
import Picto from '../../assets/icons/picto.svg'
import Instagram from '../../assets/icons/Component 5.svg'
import Twitter from '../../assets/icons/Component 4.svg'
import WhatsApp from '../../assets/icons/Component 3.svg'

function Footer() {
   return (
      <MainContainer>
         <FooterContainer>
            <Container1>
               <MedIcons>
                  <Img1 src={medCheck} alt="medcheck" />
                  <Img2 src={medChecks} alt="medchecks" />
               </MedIcons>
               <TextContent>
                  <div>Медицинская клиника «MedCheck»</div>
                  <p>
                     Международная Медицинская клиника «MedCheck»— это клиника,
                     в которой применяются новейшие диагностические и лечебные
                     технологии и ведут прием лучшие специалисты.
                  </p>
               </TextContent>
            </Container1>
            <Container2>
               <span>Контактная информация</span>
               <LocationContent>
                  <img src={GeoPoint} alt="antDesign" />
                  <span>106452, г. Бишкек, Гражданская 119</span>
               </LocationContent>
               <DateTime style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={AntDesign} alt="antDesign" />
                  <span>пн-сб 08:00 до 18:00</span>
               </DateTime>
               <ContactContent>
                  <img src={Vector} alt="vector" />
                  <span>+996(800) 000 000</span>
                  <div>+996(505) 000 000</div>
               </ContactContent>
               <SiteContent>
                  <img src={Picto} alt="picto" />
                  <span>medchek.kg</span>
               </SiteContent>
            </Container2>
            <div>
               <Container3>
                  <p>Мы в социальных сетях:</p>

                  <img src={Instagram} alt="instagram" />
                  <img src={Twitter} alt="twitter" />
                  <img src={WhatsApp} alt="whatsapp" />
               </Container3>
            </div>
         </FooterContainer>
         <div>
            <DataContent>
               <li>Оклинике</li>
               <li>Услуги</li>
               <li>Врачи</li>
               <li>Прайс</li>
               <li>Отзывы</li>
               <li>Контакты</li>
            </DataContent>
            <hr />
            <footer>
               © Peaksoft House 2023 | MedCheck | Все права защищены
            </footer>
         </div>
      </MainContainer>
   )
}

export default Footer

const MainContainer = styled('div')(() => ({
   width: '100%',
   height: '494px',
   backgroundColor: '#212529',
   fontFamily: 'Manrope',

   '& hr': {
      width: '1200px',
      marginLeft: '120px',
      marginTop: '48px',
   },
   '& footer': {
      marginTop: '28px',
      width: '382px',
      height: '19px',
      fontSize: '14px',
      marginLeft: '529px',
      color: '#959595',
      lineHeight: '19px',
      fontWeight: 400,
   },
}))
const FooterContainer = styled('div')(() => ({
   color: 'white',
   display: 'flex',
}))

const Container1 = styled('div')(() => ({
   width: '461px',
   height: '126px',
   marginTop: '68px',
   marginLeft: '120px',
   marginRight: '130px',
}))

const MedIcons = styled('div')(() => ({
   width: '237px',
   height: '79px',
   marginBottom: '28px',
}))

const Img1 = styled('img')(() => ({
   width: '72px',
   height: '79px',
   marginRight: '13px',
}))

const Img2 = styled('img')(() => ({
   width: '151px',
   height: '29px',
   marginBottom: '25px',
}))

const TextContent = styled('div')(() => ({
   width: '401px',
   height: '88px',
   fontSize: '16px',
   lineHeight: '21px',
   color: '#CCCCCC',
   font: 'Manrope',
   fontWeight: 400,
   '& div': {
      width: '274px',
      height: '22px',
      fontSize: '16px',
      lineHeight: '21px',
      color: '#FFFFFF',
      font: 'Manrope',
      fontWeight: 500,
      marginBottom: '16px',
   },
}))
const Container2 = styled('div')(() => ({
   width: '293px',
   height: '188px',
   marginTop: '68px',
   display: 'flex',
   flexDirection: 'column',
   '& span': {
      fontFamily: 'Manrope',
   },
}))

const LocationContent = styled('div')(() => ({
   width: '293px',
   height: '48px',
   marginTop: '20px',
   color: '#CCCCCC',
   '& img': {
      marginLeft: '4px',
      marginRight: '12px',
   },
}))

const ContactContent = styled('div')(() => ({
   width: '293px',
   height: '48px',
   marginTop: '20px',
   color: '#CCCCCC',
   '& span': {
      marginLeft: '8px',
   },
   '& div': {
      marginLeft: '32px',
      marginTop: '4px',
   },
}))

const DateTime = styled('div')(() => ({
   marginTop: '4px',
   marginRight: '6px',
   color: '#CCCCCC',
   '& img': {
      marginRight: '8px',
      marginTop: '4px',
   },
}))

const SiteContent = styled('div')(() => ({
   marginTop: '14px',
   '& img': {
      marginRight: '15px',
   },
   '& span': {
      marginTop: '30px',
      color: '#CCCCCC',
   },
}))

const Container3 = styled('div')(() => ({
   width: '186px',
   height: '65px',
   marginTop: '68px',
   marginLeft: '130px',
   fontFamily: 'Manrope',
   '& p': {
      marginBottom: '20px',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#FFFFFF',
   },
   '& img': {
      marginRight: '12px',
   },
}))

const DataContent = styled('ul')(() => ({
   width: '480px',
   height: '22px',
   gap: '24px',
   listStyle: 'none',
   display: 'flex',
   color: '#CCCCCC',
   marginTop: '78px',
   marginLeft: '460px',
}))
