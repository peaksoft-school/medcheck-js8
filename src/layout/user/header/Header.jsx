import { Grid, IconButton, Menu } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
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
import SignIn from '../../guest/login/SignIn'
import { UserRoles } from '../../../utlis/constants/commons'
import { signOut } from '../../../redux/reducers/auth/auth.thunk'
import SignUp from '../../guest/login/SignUp'
import ForgotPassword from '../../guest/login/ForgotPassword'
import useToast from '../../../hooks/useToast'

export const services = [
   {
      name: 'Аллергология',
      id: '1',
   },
   {
      name: 'Анестезиология',
      id: '2',
   },
   {
      name: 'Вакцинация',
      id: '8',
   },
   {
      name: 'Гинекология',
      id: '9',
   },
   {
      name: 'Дерматология',
      id: '3',
   },
   {
      name: 'Кардиология',
      id: '10',
   },
   {
      name: 'Неврология',
      id: '11',
   },
   {
      name: 'Нейрохирургия',
      id: '22',
   },
]
export const data = [
   {
      name: 'Онкология',
      id: '13',
   },
   {
      name: 'Ортопедия',
      id: '14',
   },
   {
      name: 'Оториноларингология',
      id: '15',
   },
   {
      name: 'Офтальмология',
      id: '12',
   },
   {
      name: 'Проктология',
      id: '16',
   },
   {
      name: 'Психтерапия',
      id: '17',
   },
   {
      name: 'Пульмонология',
      id: '18',
   },
   {
      name: 'Ревмотология',
      id: '19',
   },
]
export const info = [
   {
      name: 'Терапия',
      id: '20',
   },
   {
      name: 'Урология',
      id: '21',
   },
   {
      name: 'Флебология',
      id: '6',
   },
   {
      name: 'Эндокринология',
      id: '4',
   },
   {
      name: 'Физиотерапия',
      id: '5',
   },
   {
      name: 'Психтерапия',
      id: '17',
   },
]

const Header = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [anchorEl, setAnchorEl] = useState(null)

   const handleClose = () => {
      setAnchorEl(null)
   }
   const [searchParams, setSearchParams] = useSearchParams()
   const { openModal } = Object.fromEntries(searchParams)
   const onCloseModal = () => setSearchParams({})
   const openSignInModal = () => {
      setSearchParams({ openModal: 'sign-in' })
      handleClose()
   }
   const openSignUpModal = () => {
      setSearchParams({ openModal: 'sign-up' })
      handleClose()
   }
   const openForgotModal = () =>
      setSearchParams({ openModal: 'forgot-password' })()
   // const openResetModal = () => setSearchParams({ openModal: 'reset-password' })
   const role = useSelector((state) => state.auth.role)
   const { notify } = useToast()

   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const navigateResultHandler = () => {
      navigate('/getResults')
   }
   const navigateOnlineAppointmentHandler = () => {
      navigate('/onlineAppointment')
   }

   const signOutHandler = () => {
      dispatch(signOut(notify))
      handleClose()
   }

   return (
      <HeaderStyled position="static">
         <StyledHeaderGlobalContainer>
            <Container>
               <SignIn
                  open={openModal === 'sign-in'}
                  onClose={onCloseModal}
                  openSignUpHandler={openSignUpModal}
                  openForgotPassword={openForgotModal}
               />
               <SignUp
                  open={openModal === 'sign-up'}
                  onClose={onCloseModal}
                  openSignInHandler={openSignInModal}
               />
               <ForgotPassword
                  open={openModal === 'forgot-password'}
                  onClose={onCloseModal}
               />
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
                           {role === UserRoles.GUEST ? (
                              <Grid>
                                 <MenuItemStyled onClick={openSignInModal}>
                                    Войти
                                 </MenuItemStyled>
                                 <MenuItemStyled onClick={openSignUpModal}>
                                    Регистрация
                                 </MenuItemStyled>
                              </Grid>
                           ) : (
                              <Grid>
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
                                    <MenuItemStyled onClick={signOutHandler}>
                                       Выйти
                                    </MenuItemStyled>
                                 </NavlinkStyle>
                              </Grid>
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
