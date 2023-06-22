import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchInput from './UI/SeacrchInput'
import useToast from '../hooks/useToast'
import { getGlobalSearchRequest } from '../api/globalSearchService'
import { UserRoles } from '../utlis/constants/commons'

const GlobalSearchInput = ({ openModal }) => {
   const { notify } = useToast()
   const role = useSelector((state) => state.auth.role)

   const [searchInput, setSearchInput] = useState('')
   const [menuData, setMenuData] = useState([])
   const [debouncedQuery] = useDebounce(searchInput, 400)
   const [menuItem, setMenuItem] = useState(false)
   useEffect(() => {
      const getSearchData = async () => {
         try {
            const { data } = await getGlobalSearchRequest(debouncedQuery)
            setMenuData(data)
         } catch (error) {
            notify('error', error.response?.data.message)
         }
      }
      if (role === UserRoles.PATIENT) {
         getSearchData()
      }
   }, [debouncedQuery])

   const open = () => {
      setMenuItem((prev) => !prev)
   }
   const close = () => {
      setMenuItem(false)
      setSearchInput('')
   }
   const globalSearchHandler = (event) => {
      if (role === UserRoles.PATIENT) {
         setSearchInput(event.target.value)
         open()
      } else {
         openModal()
      }
   }
   return (
      <>
         <SearchInputStyle onChange={globalSearchHandler} value={searchInput} />
         <div>
            {menuItem ? (
               <MenuContainer onMouseLeave={close}>
                  {menuData.length === 0 ? (
                     <Title>Не найдено...</Title>
                  ) : (
                     menuData.map((item) => (
                        <StyledInsideContainer key={item.doctorId}>
                           <MenuBox>
                              <NavLinkStyle
                                 to={`doctors/${item.doctorId}/details/`}
                              >
                                 <StyledP>{item.doctorFirstName}</StyledP>
                              </NavLinkStyle>{' '}
                           </MenuBox>
                           <MenuBox2>
                              <NavLinkStyle
                                 to={`doctors/${item.doctorId}/details/`}
                              >
                                 <StyledP>{item.doctorLastName}</StyledP>
                              </NavLinkStyle>
                           </MenuBox2>
                           <MenuBox2>
                              <NavLinkStyle
                                 to={`doctors/${item.doctorId}/details/`}
                              >
                                 <StyledP>{item.departmentName}</StyledP>
                              </NavLinkStyle>
                           </MenuBox2>
                        </StyledInsideContainer>
                     ))
                  )}
               </MenuContainer>
            ) : null}
         </div>
      </>
   )
}

export default GlobalSearchInput

const Title = styled('p')`
   font-size: 16px;
   font-weight: 500;
   padding: 10px 0 0 40px;
   font-family: Manrope;
   color: #4d4e51;
`

const NavLinkStyle = styled(NavLink)`
   text-decoration: none;
   color: #4d4e51;
   font-family: Manrope;
   font-size: 16px;
   font-weight: 500;
`
const MenuContainer = styled('div')`
   position: absolute;
   width: 450px;
   background: #f3f1f1;
   left: 29%;
   padding-left: 30px;
   padding-bottom: 10px;
   top: 65px;
   border-radius: 5px;
   max-height: 250px;
   overflow: auto;
`
const SearchInputStyle = styled(SearchInput)(() => ({
   width: '400px',
   fontFamily: 'Manrope',
}))
const MenuBox = styled('div')`
   display: flex;
   width: 50px;
`
const MenuBox2 = styled('div')`
   display: flex;
   font-family: Manrope;
   font-size: 16px;
   font-weight: 500;
   margin-left: 80px;
   width: 50px;
`

const StyledP = styled('p')`
   text-align: start;
   display: flex;
   align-items: start;
   justify-content: start;
`
const StyledInsideContainer = styled('div')`
   display: flex;
   padding-top: 10px;
`
