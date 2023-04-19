import React from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import building from '../../assets/images/Rectangle 387.png'
import conference from '../../assets/images/Rectangle 388.png'
import doctors from '../../assets/images/Rectangle 389.png'
import consilium from '../../assets/images/Rectangle 390.png'
import { ReactComponent as ForwardVector } from '../../assets/icons/Vector (4).svg'

const textOwn = ` "MedCheck"`

export const AboutClinicLayout = () => {
   return (
      <Container>
         <StyledTitleText>
            О нашей клинике
            <span style={{ color: '#048741' }}>{textOwn} </span>
         </StyledTitleText>
         <StyledMainBlock>
            <StyledAboutSecondText>
               <p>
                  Вся наша команда готова обеспечить вам медицинский уход и
                  заботу на самом высоком уровне. Наша главная задача — оказать
                  Вам теплый прием и обеспечить самый лучший медицинский уход. У
                  нас Вы в хороших руках! В нашей клинике используются только
                  качественные материалы и проверенные технологии. Для каждого
                  клиента специалисты нашей клиники разработают <br />
                  индивидуальный план лечения, подробно рассказывая о каждом
                  этапе.
               </p>
               <p>
                  Доброжелательность и уважительное отношение к пациентам, не
                  только материальная, но и моральная ответственность за
                  результаты лечения — все это взято за основу политики Medical
                  Clinic. Профессионализм и высокое качество оказываемых услуг
                  помогают нам привлечь пациентов которые рекомендуют нас своим
                  родным и близким.
               </p>
               <p>
                  Уже 20 лет мы работаем на уровне лучших мировых стандартов,
                  внедряя и развивая передовые методы лечения для сохранения
                  здоровья наших пациентов.
               </p>

               <StyledNavlink to="/" element={Button}>
                  Читать подробнее о клинике <ForwardVector />
               </StyledNavlink>
            </StyledAboutSecondText>
            <StyledImageBlock>
               <StyledBuildingImG src={building} alt="" />

               <StyledSlidingImG>
                  <StyledBuildingImG src={conference} alt="conference" />
                  <StyledCenterBuildingImG src={doctors} alt="doctors" />
                  <StyledBuildingImG src={consilium} alt="consilium" />
               </StyledSlidingImG>
            </StyledImageBlock>
         </StyledMainBlock>
      </Container>
   )
}

const StyledAboutSecondText = styled.div`
   width: 51%;
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 160%;
   color: #4d4e51;

   & p {
      margin-top: 16px;
   }
`
const StyledMainBlock = styled.div`
   display: flex;
   flex-direction: row;
`
const StyledImageBlock = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   margin-left: 140px;

   & svg {
      margin-top: 25px;
   }

   h3 {
      font-size: 1.13rem;
      font-family: 'Manrope';
      font-weight: 400;
      line-height: 25px;
      color: #048741;
      margin-left: -140px;
   }

   h2 {
      font-size: 1.4rem;
      font-family: 'Manrope';
      font-weight: 400;
      line-height: 30px;
      color: #222222;
      margin-left: -140px;
      margin-top: -15px;
   }
`
const Container = styled.div`
   margin-left: 120px;
   margin-top: 120px;
`
const StyledTitleText = styled.h1`
   font-size: 2.25rem;
   font-weight: 600;
   line-height: 49.18px;
   font-family: Manrope;
`

const StyledBuildingImG = styled('img')(() => ({
   width: '95%',
   height: '398px',
   marginTop: '20px ',
   marginLeft: '5px ',
}))
const StyledCenterBuildingImG = styled('img')(() => ({
   marginLeft: '20px',
   marginRight: '20px',
}))
const StyledSlidingImG = styled('div')(() => ({
   display: ' flex',
   img: {
      width: '29%',
      height: '120px',
      borderRadius: '8px',
      gap: '26px',
      marginTop: '20px ',
   },
}))

const StyledNavlink = styled(NavLink)(() => ({
   color: '#009344',
   fontSize: '1rem',
   fontWeight: 500,
   lineHeight: '22px',
   textDecoration: 'none',

   '& :first-of-type': {
      marginTop: '130px',
   },
}))

// const StyledButton = styled(Button)(() => ({
//   color: '#029847;',
//   border: '1px solid #029847;',
//   marginTop: '26px ',

//   ':hover': {
//      border: '2px solid #029847;',
//   },
// }))
