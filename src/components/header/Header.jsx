import {
   AppBar,
   Button,
   Divider,
   Grid,
   Menu,
   MenuItem,
   Popover,
   TextField,
   Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import GeoPoint from '../../assets/icons/GeoPoint.svg'
import Timer from '../../assets/icons/Timer.svg'
import InstagramIcon from '../../assets/icons/InstagramIcon.svg'
import TelegramIcon from '../../assets/icons/TelegramIcon.svg'
import WhatsappIcon from '../../assets/icons/WhatsappIcon.svg'
import TelephoneIcon from '../../assets/icons/PhoneIcon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/ProfileIcon.svg'
import MainIcon from '../../assets/icons/MainIcon.svg'
import MedcheckIcon from '../../assets/icons/MedCheckIcon.svg'

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

   return (
      <HeaderStyled position="static">
         <Grid>
            <Contaianer>
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
                     <img src={InstagramIcon} alt="instagram" />
                     <img src={TelegramIcon} alt="telegram" />
                     <img src={WhatsappIcon} alt="whatsapp" />
                  </IconBox>
                  <PhoneBox>
                     <img src={TelephoneIcon} alt="phone" />
                     <Grid>
                        <NumberTitle>
                           <span>+996(800) 000 000</span>
                        </NumberTitle>
                        <NumberTitle>
                           <span>+996(505) 000 000</span>
                        </NumberTitle>
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
            </Contaianer>

            <Line />

            <SecondBox>
               <Grid>
                  <MainIconStyled src={MainIcon} alt="mainIcon" />
                  <MedcheckIconStyled src={MedcheckIcon} alt="MedcheckIcon" />
               </Grid>
               <InfoBox>
                  <li>О клинике</li>
                  <Typography
                     aria-owns={openPopover ? 'mouse-over-popover' : undefined}
                     aria-haspopup="true"
                     onMouseEnter={handlePopoverOpen}
                     onMouseLeave={handlePopoverClose}
                  >
                     Услуги
                  </Typography>

                  <PopoverStyled
                     id="mouse-over-popover"
                     sx={{
                        pointerEvents: 'none',
                     }}
                     open={openPopover}
                     disablePortal
                     popover={popover}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     onClose={handlePopoverClose}
                     disableRestoreFocus
                  >
                     <div>
                        {services.map((service) => (
                           <p key={service.id}>{service.name}</p>
                        ))}
                     </div>
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
                     запись онлайн{' '}
                  </ContainedButtonStyled>
               </Grid>
            </SecondBox>
         </Grid>
      </HeaderStyled>
   )
}

export default Header
const HeaderStyled = styled(AppBar)(() => ({
   '&': {
      background: '#FFFFFF',
      width: '100%',
      height: '181px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 80px',
   },
}))

const Box = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '12.25px',
      margin: '17px 0 0 10px',
   },
}))
const ProfileButtonStyled = styled(Button)(() => ({
   '&': {
      width: '28px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'end',
   },
}))
const SecondBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
}))

const Contaianer = styled(Grid)(() => ({
   '&': {
      width: '1200px',
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const IconBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '10px',
      marginRight: '30px',
   },
}))
const ContactsBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
   },
}))
const PhoneBox = styled(Grid)(() => ({
   '&': {
      display: 'flex',
      gap: '8.5px',
      alignItems: 'center',
      img: {
         width: '17.19px',
         height: '17.19px',
         alignSelf: 'start',
         marginTop: '22px',
      },
      p: {
         width: '147px',
         height: '22px',
         fontFamily: 'Manrope',
         fontWeight: '400',
         fontSize: '16px',
         lineHeight: '22px',
         marginTop: '4px',
      },
   },
}))
const GeoIconStyled = styled('img')(() => ({
   '&': {
      width: '8.75px',
      height: '14px',
   },
}))
const TimeIconStyled = styled('img')(() => ({
   '&': {
      width: '14px',
      height: '14px',
   },
}))
const SearchInputStyled = styled(TextField)(() => ({
   '&': {
      width: '367px',
      padding: '8px 18px',
      margin: '14px 60px 0 60px',
      color: '#716B6B',
   },
   fieldset: {
      borderRadius: '50px',
      background: '#F3F1F1',
   },
}))
const AddressTitle = styled('p')(() => ({
   '&': {
      width: '263px',
      height: '16px',
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
   },
}))
const TimeTitle = styled('p')(() => ({
   '&': {
      width: '156px',
      height: '16px',
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '16px',
      color: '#000000',
      span: {
         color: '#009344',
      },
   },
}))
const NumberTitle = styled('p')(() => ({
   '&': {
      width: '100px',
      height: '22px',
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#000000',
   },
}))
const ProfileBox = styled(Grid)(() => ({
   '&': {
      marginTop: '8px',
   },
}))
const Line = styled(Divider)(() => ({
   '&': {
      marginTop: '8px',
      width: '100%',
      border: '1px solid #D9D9D9',
   },
}))
const MainIconStyled = styled('img')(() => ({
   '&': {
      width: '67.45px',
      height: '73.16px',
      margin: '8px 12px 5px 0',
   },
}))
const MedcheckIconStyled = styled('img')(() => ({
   '&': {
      width: '136px',
      height: '27px',
      fontFamily: 'Montserrat',
      fontWeight: '600',
      fontSize: '22px',
      lineHeight: '27px',
      marginBottom: '25px',
   },
}))
const InfoBox = styled('ul')(() => ({
   '&': {
      display: 'flex',
      gap: '36px',
      listStyle: 'none',
      fontFamily: 'Manrope',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
      margin: '0 auto',
   },
}))

const OutlinedButtonStyled = styled(Button)(() => ({
   '&': {
      borderRadius: '24px',
      padding: '12px 20px',
      border: '1px solid #048741',
      color: '#048741',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Manrope',
   },
}))
const ContainedButtonStyled = styled(Button)(() => ({
   '&': {
      borderRadius: '24px',
      padding: '12px 20px',
      color: '#FFFFFF',
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      fontFamily: 'Manrope',
      marginLeft: '16px',
   },
}))

const PopoverStyled = styled(Popover)(() => ({
   '&': {
      position: 'absolute',
      left: '31.9rem',
      top: '-18px',
      width: '600px',
      margin: '0',
      div: {
         width: '600px',
         height: '352px',
         display: 'flex',
         overflow: 'hidden',
         flexWrap: 'wrap',
         padding: '30px',
         gap: '15px',
      },
      p: {
         fontFamily: 'Manrope',
         fontStyle: 'normal',
         fontWeight: '400',
         fontSize: '14px',
         // paddingLeft: '41px',
         lineHeight: '19px',
      },
   },
}))
