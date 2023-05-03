import React, { useMemo } from 'react'
import { Grid, IconButton, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AppTable from '../../../components/UI/Table'
import SwitchApp from '../../../components/UI/switch/Switch'
import { item } from '../../../utlis/constants/commons'
import { ReactComponent as TrashIcon } from '../../../assets/icons/TrashTable.svg'
import { ReactComponent as UpdateIcon } from '../../../assets/icons/updateIcon.svg'
import Button from '../../../components/UI/Button'
import SearchInput from '../../../components/UI/SeacrchInput'
import { ReactComponent as Plus } from '../../../assets/icons/plus.svg'

const Specialists = () => {
   const navigate = useNavigate()
   const column = useMemo(
      () => [
         {
            header: '№',
            key: 'id',
            index: true,
         },
         {
            header: 'Статус',
            key: 'statue',
            render: () => (
               <Grid>
                  <SwitchApp />
               </Grid>
            ),
         },
         {
            header: 'Специалист',
            key: 'specialist',
         },
         {
            header: 'Отделение',
            key: 'department',
         },
         {
            header: 'Расписение до',
            key: 'schedule',
         },
         {
            header: 'Действия',
            key: 'action',
            render: () => (
               <Grid>
                  <IconButton
                     style={{
                        display: 'flex',
                        gap: '25px',
                     }}
                  >
                     <UpdateIcon />
                     <TrashIcon />
                  </IconButton>
               </Grid>
            ),
         },
      ],
      []
   )

   return (
      <div>
         <MainContainer>
            <BoxTitleAndButton>
               <Title>Специалисты</Title>
               <StyledContainerButton
                  onClick={() => {
                     navigate(`addspecialist`)
                  }}
               >
                  <Plus /> Добавить специалиста
               </StyledContainerButton>
            </BoxTitleAndButton>
            <SearchInputBox>
               <SearchInput placeholder="Поиск" />
            </SearchInputBox>
            <AppTable columns={column} rows={item} />
         </MainContainer>
      </div>
   )
}

export default Specialists

const MainContainer = styled('div')(() => ({
   '&': {
      width: '100%',
      height: '100vh',
      background: 'rgba(245, 245, 245, 0.61)',
      padding: '30px 70px',
   },
}))

const BoxTitleAndButton = styled('div')(() => ({
   '&': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const Title = styled('p')(() => ({
   '&': {
      fontFamily: 'Manrope',
      fontWeight: 400,
      fontSize: '22px',
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

const StyledContainerButton = styled(Button)(() => ({
   '&': {
      paddingLeft: '18px',
      paddingRight: '24px',
      paddingTop: '12px',
      paddingBottom: '12px',
      display: 'flex',
      gap: '12px',
   },
}))
