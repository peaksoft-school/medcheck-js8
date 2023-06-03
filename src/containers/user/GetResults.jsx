import { styled as styledMui } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import getResultBackgroundImage from '../../assets/images/getResultBackgroundImage.png'
import medcheckIcon from '../../assets/icons/MedcheckLogo.svg'
import medcheck from '../../assets/icons/MedCheckIcon.svg'
import Button from '../../components/UI/Button'
import { getResultRequest } from '../../api/getResultService'

const GetResults = () => {
   const [resultInputValue, setResultInputValue] = useState('')

   const getResultInputChangeHandler = (event) => {
      setResultInputValue(event.target.value)
   }
   const getResultHandler = async () => {
      try {
         const { data } = await getResultRequest(resultInputValue)
         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <BackgroundImage>
         <ImageStyle>
            <Box>
               <LogoBox>
                  <NavLink to="/">
                     <img src={medcheckIcon} alt="logo" />
                  </NavLink>
                  <NavLink to="/">
                     <LogoStyle src={medcheck} alt="medcheck" />
                  </NavLink>
               </LogoBox>
               <UiBox>
                  <InputStyle
                     placeholder="Введите номер заказа..."
                     onChange={getResultInputChangeHandler}
                     value={resultInputValue}
                  />
                  <div>
                     <ButtonStyle
                        onClick={getResultHandler}
                        variant="contained"
                     >
                        найти
                     </ButtonStyle>
                  </div>
               </UiBox>
            </Box>
            <Line />
            <InfoBoxStyle>
               <h3>Выдача результатов</h3>
               <p>Вы можете:</p>
               <ul>
                  <li>
                     Просмотреть свои результаты анализов онлайн Вы можете,
                     введя в поле слева индивидуальный цифровой код, который
                     указан в верхней части Вашей квитанции под штрих-кодом;
                  </li>
                  <li>
                     Распечатать результат можно непосредсвенно с этой страницы
                     или сохранить в PDF формате с помощью кнопок, расположенной
                     в верхней части сайта;
                  </li>
                  <li>
                     При возникновении проблем с отображением результатов,
                     Вы можете оставить заявку на получение результатов
                     по электронной почте, позвонив в Службу поддержки клиентов
                     по номеру 909 090
                  </li>
               </ul>
            </InfoBoxStyle>
         </ImageStyle>
      </BackgroundImage>
   )
}

export default GetResults

const LogoStyle = styledMui('img')({
   marginTop: '30px',
})
const ImageStyle = styledMui('div')({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100vw',
   height: '100vh',
   backgroundImage: `url(${getResultBackgroundImage})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   zIndex: -1,
})
const BackgroundImage = styledMui('div')({
   position: 'relative',
})

const Box = styledMui('div')({
   width: '35.6944vw',
   height: '215px',
   background: '#FFFFFF',
   borderRadius: '10px',
   marginTop: '46px',
   marginLeft: '38px',
})
const LogoBox = styledMui('div')({
   display: 'flex',
   justifyContent: 'center',
   gap: '11.42px',
   paddingTop: '32px',
})
const UiBox = styledMui('div')({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '10px',
   gap: '10px',
})
const InputStyle = styledMui(TextField)({
   '&': {
      width: '300px',
      paddingTop: '10px',
      fieldset: {
         borderRadius: '10px',
      },
   },
})

const ButtonStyle = styledMui(Button)({
   '&': {
      padding: '16px 38px',
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      marginTop: '14px',
      borderRadius: '10px',
   },
})
const Line = styledMui('div')({
   borderLeft: '10px solid #3977C0',
   height: '100%',
   position: 'absolute',
   left: '42%',
   top: '0px',
})
const InfoBoxStyle = styledMui('div')({
   width: '57vw',
   height: '300px',
   background: '#FEFBFB80',
   position: 'absolute',
   left: '42.8%',
   top: '0',
   color: '#346EFB',
   fontFamily: 'Manrope',

   '& h3': {
      padding: '30px 0 0 30px',
      fontWeight: 600,
      lineHeight: '25px',
      fontSize: '18px',
   },
   '& p': {
      paddingLeft: '30px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '19px',
      marginTop: '18px',
   },
   '& ul': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
      marginLeft: '30px',
      '& li': {
         paddingTop: '6px',
      },
      '& li:last-child': {
         color: 'red',
      },
   },
})
