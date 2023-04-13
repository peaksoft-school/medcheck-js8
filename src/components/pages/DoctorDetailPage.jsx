/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'

export const DoctorDetailsPage = (props) => {
   const {
      doctorName,
      doctorImg,
      department,
      positionWork,
      mainTodoName,
      secondaryTodo,
   } = props
   return (
      <Container>
         <h1
            style={{ fontSize: '36px', fontWeight: 600, lineHeight: '49.18px' }}
         >
            {/* this should be the doctor's name */}
            {doctorName}
         </h1>

         <p
            style={{
               width: '664px',
               padding: '24px 80px 0 0',
               fontSize: '18px',
               fontWeight: 400,
               lineHeight: '25px',
            }}
         >
            Попасть в команду медицинской клиники «Medical Clinic» могут только
            лучшие специалисты с многолетней практикой и доказанным опытом.
         </p>
         <p
            style={{
               width: '852px',
               padding: '20px 90px 20px 0',
               fontSize: '18px',
               fontWeight: 400,
               lineHeight: '25px',
            }}
         >
            Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
            ведущих университетах Европы, чтобы еще на шаг стать ближе к
            совершенству.
         </p>
         <StyledDoctorBlock>
            <StyledDoctorImg>
               {/* there will be a photo */}
               <img src={doctorImg} alt="врач" />
            </StyledDoctorImg>
            <StyledDoctorCard>
               <h2 style={{ color: '#009344' }}> {doctorName} </h2>
               <div style={{ display: 'flex', marginTop: '20px' }}>
                  <p style={{ color: '#58595B', fontWeight: 400 }}>
                     Отделение:
                  </p>
                  <p style={{ color: '#222222', fontWeight: 500 }}>
                     {/* there will be a section */}
                     {department}
                  </p>
               </div>
               <div
                  style={{
                     display: 'flex',
                     marginBottom: '24px',
                  }}
               >
                  <p style={{ color: '#58595B', fontWeight: 400 }}>
                     Должность:
                  </p>
                  <p style={{ color: '#222222', fontWeight: 500 }}>
                     {/* there will be a position */}
                     {positionWork}
                  </p>
               </div>
               {/* button will be here */}
               Записаться на прием
            </StyledDoctorCard>
         </StyledDoctorBlock>

         <StyledDoctorTodo>
            {/* here will be the data of the doctor */}
            <li>
               <b>{mainTodoName}</b>
               <ul>
                  <li>{secondaryTodo}</li>
               </ul>
            </li>
         </StyledDoctorTodo>
      </Container>
   )
}

const StyledDoctorImg = styled.div`
   width: 319px;
   height: 349px;
   padding: 14px 20px;
   border-radius: 4px;
   background: radial-gradient(
      43.84% 43.84% at 50.16% 55.3%,
      #fdfdfd 0%,
      #e4e7ee 100%
   );
   img {
      background-image: #e4e7ee;
   }
`
const StyledDoctorBlock = styled.div`
   display: flex;
   margin-top: 60px;
   margin-bottom: 34px;
`
const StyledDoctorCard = styled.div`
   margin-left: 60px;
   margin-top: 100px;

   p {
      font-size: 18px;
      line-height: 27px;
      color: '#58595B';
   }
`

const Container = styled.div`
   width: 852px;
   margin-left: 120px;
   margin-top: 26px;
   margin-bottom: 40px;
`

const StyledDoctorTodo = styled.ul`
   width: 852px;
   font-size: 16px;
   line-height: 25.6px;
   font-family: 'Manrope';
   color: #222222;
   list-style: none;

   li:first-of-type li {
      width: 852px;
      font-size: 16px;
      line-height: 25.6px;
      font-weight: 400;
      font-family: 'Manrope';
      margin-left: 25px;
      color: #222222;
      list-style: initial;
   }

   li {
      width: 852px;
      font-size: 16px;
      line-height: 25.6px;
      font-weight: 400;
      font-family: 'Manrope';
      color: #222222;
      list-style: none;
   }
`
