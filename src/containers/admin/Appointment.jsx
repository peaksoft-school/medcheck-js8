import { styled } from '@mui/material/styles'
import { NavLink, Outlet } from 'react-router-dom'
import useToast from '../../hooks/useToast'
import Button from '../../components/UI/Button'
import buttonPlusIcon from '../../assets/icons/ButtonPlusIcon.svg'
import SearchInput from '../../components/UI/SeacrchInput'

const Appointment = () => {
   const { ToastContainer } = useToast()
   // const [open, setOpen] = useState()

   return (
      <MainContainer>
         <HeaderTitleBoxStyle>
            <p>Онлайн Запись</p>
            <ButtonStyle>
               <span>
                  <img src={buttonPlusIcon} alt="plus" />
               </span>{' '}
               Добавить запись
            </ButtonStyle>
         </HeaderTitleBoxStyle>
         <NavLinkBox>
            <NavLinkStyled
               to="online-appointment"
               style={({ isActive }) => ({
                  color: isActive ? '#048741' : '#707070',
                  borderBottom: isActive && '1px solid #048741',
                  paddingBottom: '0.9rem',
               })}
            >
               Онлайн-запись
            </NavLinkStyled>
            <NavLinkStyled
               to="schedule"
               style={({ isActive }) => ({
                  color: isActive ? '#048741' : '#707070',
                  borderBottom: isActive && '1px solid #048741',
               })}
            >
               Расписание
            </NavLinkStyled>
         </NavLinkBox>
         <SearchInputBox>
            <SearchInput placeholder="Поиск" />
         </SearchInputBox>
         <Outlet />

         {ToastContainer}
      </MainContainer>
   )
}

export default Appointment
const MainContainer = styled('div')(() => ({
   '&': {
      width: '100%',
      height: '100vh',
      background: 'rgba(245, 245, 245, 0.61)',
      padding: '30px 70px',
   },
}))
const HeaderTitleBoxStyle = styled('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'Manrope',
      p: {
         fontWeight: 400,
         fontSize: '22px',
         lineHight: '30px',
         color: '#222222',
      },
   },
}))
const ButtonStyle = styled(Button)(() => ({
   '&': {
      padding: '12.5px 30px',
      span: {
         width: '12.6px',
         height: '12.6px',
         marginRight: '15px',
      },
   },
}))
const SearchInputBox = styled('div')(() => ({
   '&': {
      width: '600px',
      marginBottom: '20px',

      div: {
         background: '#FFFFFF',
      },
      input: {
         background: '#FFFFFF',
      },
   },
}))
const NavLinkStyled = styled(NavLink)(() => ({
   textDecoration: 'none',
   fontFamily: 'Manrope',
   fontWeight: 600,
   fontSize: '12px',
   lineHeight: '16px',
   letterSpacing: '1px',
   textTransform: 'uppercase',

   '&:active, &.active': {
      color: '#048741',
   },
}))
const NavLinkBox = styled('div')(() => ({
   '&': {
      display: 'flex',
      gap: '30px',
      margin: '34px 0',
   },
}))
