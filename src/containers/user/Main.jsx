import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '../../components/UI/Button'
import mainPageDoctor from '../../assets/images/mainDoctorImage.png'
import welcomeWord from '../../assets/images/Добро пожаловать в клинику MedCheck.png'

const Main = () => {
   return (
      <GlobalContainer>
         <div>
            <Box>
               <InfoBox>
                  <img src={welcomeWord} alt="welcomeWord" />
                  <p>
                     Международный Медицинская клиника «MedCheck — это клиника,
                     в которой применяются новейшие диагностические и лечебные
                     технологии и ведут прием лучшие специалисты.
                  </p>
                  <ApplicationButton>оставьте заявку</ApplicationButton>
               </InfoBox>
               <img src={mainPageDoctor} alt="mainPageDoctor" />
            </Box>
            <DetailsBox>
               <h1>
                  Почему <span>нас выбирают?</span>
               </h1>
               <MainInfoDepartmentBox>
                  <InfoDepartmentBox>
                     <span>1</span>
                     <h3>Высокий профессионализм сотрудников</h3>
                     <p>
                        Медицинская лицензия, большой опыт врачей и постоянное
                        повышение квалификации.
                     </p>
                  </InfoDepartmentBox>
                  <InfoDepartmentBox>
                     <span>2</span>
                     <h3>Наши пациенты - наши лучшие друзья</h3>
                     <p>
                        Все аппараты и медицинские препараты сертифицированы и
                        лицензированы.
                     </p>
                  </InfoDepartmentBox>
                  <InfoDepartmentBox>
                     <span>3</span>
                     <h3>Комфортные условия</h3>
                     <p>
                        Уютная обстановка и отзывчивый персонал сделают поход в
                        клинику максимально приятным.
                     </p>
                  </InfoDepartmentBox>
               </MainInfoDepartmentBox>
               <div>
                  <h1>
                     Наши <span>услуги</span>
                  </h1>
                  <Title>
                     За все время работы клиника приняла более 1 млн. пациентов.
                  </Title>
               </div>
            </DetailsBox>
         </div>
      </GlobalContainer>
   )
}

export default Main

const GlobalContainer = styled('main')`
   max-width: 100%;
   display: flex;
   justify-content: center;
`

const Box = styled('div')(() => ({
   display: 'flex',
   marginTop: '22px',
   paddingLeft: '10px',
}))
const InfoBox = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'start',
   justifyContent: 'center',

   p: {
      width: '585px',
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '130%',
      margin: '27px 0',
   },
}))

const ApplicationButton = styled(Button)(() => ({
   '&': {
      background: 'none',
      color: '#048741',
      border: '1px solid #048741',
      borderRadius: '24px',
      padding: '12px 24px',
   },
   '&:hover': {
      border: 'none',
   },
   '&:active': {
      border: 'none',
   },
}))
const DetailsBox = styled('div')(() => ({
   padding: '30px 0px 90px 0px',
   fontFamily: 'Manrope',

   h1: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '49px',

      span: {
         color: '#048741',
      },
   },
}))
const InfoDepartmentBox = styled('div')(() => ({
   width: '24rem',
   height: '17rem',
   background: '#DBEBFF',
   borderRadius: '4px',
   padding: '39px 0 0 40px',
   display: 'flex',
   flexDirection: 'column',
   margin: '60px 0 120px 0px',
   span: {
      fontSize: '48px',
      fontWeight: 600,
      color: '#048741',
      fontFamily: 'Manrope',
   },
   h3: {
      width: '309px',
      fontFamily: 'Montserrat',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '130%',
      color: '#222222',
      marginBottom: '18px',
   },
   p: {
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '130%',
   },
}))

const MainInfoDepartmentBox = styled('div')(() => ({
   display: 'flex',
   gap: '16px',
}))
const Title = styled('p')(() => ({
   fontSize: '18px',
   fontWeight: 400,
   lineHeight: '25px',
   marginTop: '34px',
}))
