import React from 'react'
import styled from '@emotion/styled'
import MedcheckLogo from '../../assets/icons/MedcheckLogo.svg'
import MedCheck from '../../assets/icons/MedCheck.svg'
import GeoPoint from '../../assets/icons/GeoPoint.svg'
import Clock from '../../assets/icons/Clock.svg'
import Phone from '../../assets/icons/Phone.svg'
import Email from '../../assets/icons/email.svg'
import Instagram from '../../assets/icons/Instagram.svg'
import Telegram from '../../assets/icons/Telegram.svg'
import WhatsApp from '../../assets/icons/WhatsApp.svg'

function Footer() {
   return (
      <MainContainer>
         <FooterContainer>
            <Container1>
               <MedIcons>
                  <img src={MedcheckLogo} alt="medcheckLogoА" />
                  <img className="medcheck" src={MedCheck} alt="medchecks" />
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
               <DateTime>
                  <img src={Clock} alt="clock" />
                  <span>пн-сб 08:00 до 18:00</span>
               </DateTime>
               <ContactContent>
                  <img src={Phone} alt="phone" />
                  <span>+996(800) 000 000</span>
                  <div>+996(505) 000 000</div>
               </ContactContent>
               <SiteContent>
                  <img src={Email} alt="email" />
                  <span>medchek.kg</span>
               </SiteContent>
            </Container2>
            <div>
               <Container3>
                  <p>Мы в социальных сетях:</p>

                  <a href="/">
                     <img src={Instagram} alt="instagram" />
                  </a>
                  <a href="/">
                     <img src={Telegram} alt="telegram" />
                  </a>
                  <a href="/">
                     <img src={WhatsApp} alt="whatsapp" />
                  </a>
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
      width: '78%',
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
   '& .medcheck': {
      marginLeft: '13px',
      marginBottom: '25px',
   },
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
      fontSize: '16px',
      color: '#FFFFFF',
      lineHeight: '21px',
      fontWeight: 500,
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
   '& span': {
      color: '#CCCCCC',
      fontFamily: 'Manrope',
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: 400,
   },
}))

const ContactContent = styled('div')(() => ({
   width: '293px',
   height: '48px',
   marginTop: '20px',
   '& span': {
      marginLeft: '8px',
      color: '#CCCCCC',
   },
   '& div': {
      marginLeft: '32px',
      marginTop: '4px',
      color: '#CCCCCC',
   },
}))

const DateTime = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   marginTop: '4px',
   marginRight: '6px',
   '& img': {
      marginRight: '8px',
      marginTop: '4px',
   },
   '& span': {
      color: '#CCCCCC',
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
