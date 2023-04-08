import { Menu, MenuItem, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import GeoPoint from '../../assets/icons/GeoPoint.svg'
import Timer from '../../assets/icons/Timer.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/InstagramIcon.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/TelegramIcon.svg'
import { ReactComponent as WhatsappIcon } from '../../assets/icons/WhatsappIcon.svg'
import { ReactComponent as TelephoneIcon } from '../../assets/icons/PhoneIcon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/ProfileIcon.svg'
import MainIcon from '../../assets/icons/MainIcon.svg'
import MedcheckIcon from '../../assets/icons/MedCheckIcon.svg'
import {
   HeaderStyled,
   AddressTitle,
   Box,
   ContactsBox,
   Container,
   ContainedButtonStyled,
   DataContainer,
   GeoIconStyled,
   IconBox,
   InfoBox,
   Line,
   TimeIconStyled,
   OutlinedButtonStyled,
   SearchInputStyled,
   ProfileBox,
   ProfileButtonStyled,
   PhoneBox,
   TimeTitle,
   SecondBox,
   NumberTitle1,
   NumberTitle2,
   MainIconStyled,
   MedcheckIconStyled,
   PopoverStyled,
   ServiceButtonStyled,
   StyledHeaderGlobalContainer,
   StyledPhoneIconButton,
} from './header-styled'

const services = [
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
const data = [
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
const info = [
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
   const [anchorEl, setAnchorEl] = useState(null)
   const [popover, setPopover] = useState(null)

   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const handlePopoverOpen = (event) => {
      setPopover(event.currentTarget)
   }

   const handlePopoverClose = () => {
      setPopover(null)
   }

   const openPopover = Boolean(popover)
   const id = openPopover ? 'simple-popover' : undefined

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
               <SearchInputStyled placeholder="Поиск по сайту" />
               <ContactsBox>
                  <IconBox>
                     <IconButton>
                        <a href="/">
                           <InstagramIcon />
                        </a>
                     </IconButton>
                     <IconButton>
                        <a href="/">
                           <TelegramIcon />
                        </a>
                     </IconButton>
                     <IconButton>
                        <a href="/">
                           <WhatsappIcon />
                        </a>
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
                           <MenuItem onClick={handleClose}>Войти</MenuItem>
                           <MenuItem onClick={handleClose}>
                              Регистрация
                           </MenuItem>
                        </Menu>
                     </ProfileBox>
                  </PhoneBox>
               </ContactsBox>
            </Container>

            <Line />

            <SecondBox>
               <Grid>
                  <MainIconStyled src={MainIcon} alt="mainIcon" />
                  <MedcheckIconStyled src={MedcheckIcon} alt="MedcheckIcon" />
               </Grid>
               <InfoBox>
                  <li>О клинике</li>
                  <ServiceButtonStyled
                     aria-describedby={id}
                     onMouseOver={handlePopoverOpen}
                  >
                     Услуги
                  </ServiceButtonStyled>
                  <PopoverStyled
                     id={id}
                     open={openPopover}
                     anchorEl={popover}
                     onClose={handlePopoverClose}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     disableRestoreFocus
                  >
                     <DataContainer>
                        <div>
                           {services.map((service) => (
                              <div key={service.id}>
                                 <a href="/">{service.name}</a>
                              </div>
                           ))}
                        </div>
                        <div>
                           {data.map((el) => {
                              return (
                                 <div key={el.id}>
                                    <a href="/">{el.name}</a>
                                 </div>
                              )
                           })}
                        </div>
                        <div>
                           {info.map((el) => {
                              return (
                                 <div key={el.id}>
                                    <a href="/">{el.name}</a>
                                 </div>
                              )
                           })}
                        </div>
                     </DataContainer>
                  </PopoverStyled>
                  <li>Врачи</li>
                  <li>Прайс</li>
                  <li>Контакты</li>
               </InfoBox>
               <Grid>
                  <OutlinedButtonStyled variant="oultined">
                     получить результаты
                  </OutlinedButtonStyled>
                  <ContainedButtonStyled variant="contained">
                     запись онлайн
                  </ContainedButtonStyled>
               </Grid>
            </SecondBox>
         </StyledHeaderGlobalContainer>
      </HeaderStyled>
   )
}

export default Header
