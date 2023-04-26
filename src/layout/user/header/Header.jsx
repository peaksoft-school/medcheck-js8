import { Grid, IconButton, Menu } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import GeoPoint from '../../../assets/icons/GeoPoint.svg'
import Timer from '../../../assets/icons/Timer.svg'
import { ReactComponent as ProfileIcon } from '../../../assets/icons/ProfileIcon.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/icons/InstagramIcon.svg'
import { ReactComponent as TelegramIcon } from '../../../assets/icons/TelegramIcon.svg'
import { ReactComponent as WhatsappIcon } from '../../../assets/icons/WhatsappIcon.svg'
import { ReactComponent as TelephoneIcon } from '../../../assets/icons/PhoneIcon.svg'
import MainIcon from '../../../assets/icons/MainIcon.svg'
import MedcheckIcon from '../../../assets/icons/MedCheckIcon.svg'
import {
   HeaderStyled,
   AddressTitle,
   Box,
   ContactsBox,
   Container,
   ContainedButtonStyled,
   GeoIconStyled,
   IconBox,
   InfoBox,
   Line,
   TimeIconStyled,
   OutlinedButtonStyled,
   PhoneBox,
   TimeTitle,
   SecondBox,
   NumberTitle1,
   NumberTitle2,
   MainIconStyled,
   MedcheckIconStyled,
   StyledHeaderGlobalContainer,
   StyledPhoneIconButton,
   ProfileButtonStyled,
   ProfileBox,
   SearchInputBox,
   MenuItemStyled,
   NavlinkStyle,
   NavlinkStyled,
} from './header-styled'
import Dropdown from '../../../components/UI/Dropdown'
import SearchInput from '../../../components/UI/SeacrchInput'

export const services = [
   {
      name: 'Анестезиология',
      id: '1',
   },
   {
      name: 'Анестезиология',
      id: '2',
   },
   {
      name: 'Вакцинация',
      id: '3',
   },
   {
      name: 'Гинекология',
      id: '4',
   },
   {
      name: 'Дерматология',
      id: '5',
   },
   {
      name: 'Кардиология',
      id: '6',
   },
   {
      name: 'Неврология',
      id: '7',
   },
   {
      name: 'Нейрохирургия',
      id: '8',
   },
]
export const data = [
   {
      name: 'Онкология',
      id: '9',
   },
   {
      name: 'Ортопедия',
      id: '10',
   },
   {
      name: 'Оториноларингология',
      id: '11',
   },
   {
      name: 'Офтальмология',
      id: '12',
   },
   {
      name: 'Проктология',
      id: '13',
   },
   {
      name: 'Психтерапия',
      id: '14',
   },
   {
      name: 'Пульмонология',
      id: '15',
   },
   {
      name: 'Ревмотология',
      id: '16',
   },
]
export const info = [
   {
      name: 'Терапия',
      id: '17',
   },
   {
      name: 'Урология',
      id: '18',
   },
   {
      name: 'Флебология',
      id: '19',
   },
   {
      name: 'Эндокринология',
      id: '20',
   },
   {
      name: 'Физиотерапия',
      id: '21',
   },
   {
      name: 'Психтерапия',
      id: '22',
   },
]

const Header = () => {
   const navigate = useNavigate()
   const [anchorEl, setAnchorEl] = useState(null)

   const userRole = 'USER'

   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const navigateResultHandler = () => {
      navigate('/getResults')
   }
   const navigateOnlineAppointmentHandler = () => {
      navigate('/onlineAppointment')
   }
   return (
      <HeaderStyled position="static">
         <StyledHeaderGlobalContainer>
            <Container>
               <Grid>
                  <Box>
                     <GeoIconStyled src={GeoPoint} alt="geopoint" />
                     <AddressTitle>
                        <span>106452, г. Бишкек, Гражданская 119</span>
                     </AddressTitle>
                  </Box>
                  <Box>
                     <TimeIconStyled src={Timer} alt="timer" />
                     <TimeTitle style={{ color: 'black' }}>
                        <span>пн-сб </span>
                        08:00 до 18:00
                     </TimeTitle>
                  </Box>
               </Grid>
               <SearchInputBox>
                  <SearchInput />
               </SearchInputBox>
               <ContactsBox>
                  <IconBox>
                     <IconButton>
                        <NavLink to="https://www.instagram.com/peaksoft.house/">
                           <InstagramIcon />
                        </NavLink>
                     </IconButton>
                     <IconButton>
                        <NavLink to="https://web.telegram.org/z/">
                           <TelegramIcon />
                        </NavLink>
                     </IconButton>
                     <IconButton>
                        <NavLink to="https://www.whatsapp.com/?lang=ru">
                           <WhatsappIcon />
                        </NavLink>
                     </IconButton>
                  </IconBox>
                  <PhoneBox>
                     <StyledPhoneIconButton>
                        <TelephoneIcon />
                     </StyledPhoneIconButton>
                     <Grid>
                        <NumberTitle1>
                           <span>+996(800) 000 000</span>
                        </NumberTitle1>
                        <NumberTitle2>
                           <span>+996(505) 000 000</span>
                        </NumberTitle2>
                     </Grid>
                     <ProfileBox>
                        <ProfileButtonStyled
                           id="basic-button"
                           aria-controls={open ? 'basic-menu' : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? 'true' : undefined}
                           onClick={handleClick}
                        >
                           <ProfileIcon />
                        </ProfileButtonStyled>
                        <Menu
                           id="basic-menu"
                           anchorEl={anchorEl}
                           open={open}
                           onClose={handleClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                        >
                           {userRole === 'GUEST' ? (
                              <>
                                 <NavlinkStyle to="/">
                                    <MenuItemStyled onClick={handleClose}>
                                       Войти
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                                 <NavlinkStyle to="/">
                                    <MenuItemStyled onClick={handleClose}>
                                       Регистрация
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                              </>
                           ) : (
                              <>
                                 <NavlinkStyle to="/myApplications">
                                    <MenuItemStyled onClick={handleClose}>
                                       Мои записи
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                                 <NavlinkStyle to="/profile">
                                    <MenuItemStyled onClick={handleClose}>
                                       Профиль
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                                 <NavlinkStyle to="/">
                                    <MenuItemStyled onClick={handleClose}>
                                       Выйти
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                              </>
                           )}
                        </Menu>
                     </ProfileBox>
                  </PhoneBox>
               </ContactsBox>
            </Container>

            <Line />

            <SecondBox>
               <Grid>
                  <NavlinkStyled to="/">
                     <MainIconStyled src={MainIcon} alt="mainIcon" />
                     <MedcheckIconStyled
                        src={MedcheckIcon}
                        alt="MedcheckIcon"
                     />
                  </NavlinkStyled>
               </Grid>
               <InfoBox>
                  <NavlinkStyled to="about">О клинике</NavlinkStyled>
                  <NavlinkStyled to="service">
                     <Dropdown services={services} data={data} info={info}>
                        Услуги
                     </Dropdown>
                  </NavlinkStyled>
                  <NavlinkStyled to="doctors">Врачи</NavlinkStyled>
                  <NavlinkStyled to="price">Прайс</NavlinkStyled>
                  <NavlinkStyled to="contacts">Контакты</NavlinkStyled>
               </InfoBox>
               <Grid>
                  <OutlinedButtonStyled
                     variant="oultined"
                     onClick={navigateResultHandler}
                  >
                     получить результаты
                  </OutlinedButtonStyled>
                  <ContainedButtonStyled
                     variant="contained"
                     onClick={navigateOnlineAppointmentHandler}
                  >
                     запись онлайн
                  </ContainedButtonStyled>
               </Grid>
            </SecondBox>
         </StyledHeaderGlobalContainer>
      </HeaderStyled>
   )
}

export default Header
