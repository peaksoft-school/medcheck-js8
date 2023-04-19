import React from 'react'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

function ServiceBox({ data }) {
   return (
      <div>
         <GridContainer container>
            {data.map((el) => {
               return (
                  <Grid item xs={6} key={el.id}>
                     <div className="grid">
                        <span className="img">{el.img}</span>
                        <a href="/">{el.title}</a>
                     </div>
                  </Grid>
               )
            })}
         </GridContainer>
      </div>
   )
}

export default ServiceBox

const GridContainer = styled(Grid)(() => ({
   width: '90vw',
   height: '1252px',
   marginLeft: '120px',

   marginBottom: '120px',
   '& .grid': {
      display: 'flex',
      alignItems: 'center',
      width: '430px',
      height: '90px',
      border: '1px solid #D9D9D9',
      borderRadius: '4px',
      ':hover': {
         background:
            'radial-gradient(43.84% 43.84% at 50.16% 55.3%, #FDFDFD 0%, #E4E7EE 100%)',
      },
      '& a': {
         color: '#4D4E51',
         fontFamily: 'Manrope',
         fontSize: '18px',
         fontWeight: 500,
         lineHeight: '24px',
      },
   },
   '& .img': {
      marginLeft: '22px',
   },
   '& a': {
      marginLeft: '23px',
      textDecoration: 'none',
   },
}))
