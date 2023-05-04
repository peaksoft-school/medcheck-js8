import styled from '@emotion/styled'
import { styled as muiStyle } from '@mui/material/styles'

import {
   Grid,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

import React from 'react'

const AppTable = ({ rows, columns, boolean = true }) => {
   return (
      <Grid>
         <PaperStyled>
            <TableContainer>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        {columns.map((column) => (
                           <TableCell
                              key={`header-${column.key}`}
                              align={column.align || 'left'}
                              style={
                                 column.minWidth
                                    ? { minWidth: column.minWidth }
                                    : {}
                              }
                           >
                              <TableHeaderStyled>
                                 {column.header}
                              </TableHeaderStyled>
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  {boolean ? (
                     <TableBody>
                        {rows.map((row, rowIndex) => {
                           return (
                              <TableRow key={row.id.toString()}>
                                 {columns.map((column) => {
                                    if (column.render) {
                                       return (
                                          <TableCell key={column.key}>
                                             {column.render(row)}
                                          </TableCell>
                                       )
                                    }
                                    const value = column.index
                                       ? rowIndex + 1
                                       : row[column.key]
                                    return (
                                       <TableCell
                                          key={`row-${column.key}`}
                                          align={column.align}
                                       >
                                          <TableBodyTitleStyled>
                                             {value}
                                          </TableBodyTitleStyled>
                                       </TableCell>
                                    )
                                 })}
                              </TableRow>
                           )
                        })}
                     </TableBody>
                  ) : (
                     <TableBody>
                        {rows.map((row, rowIndex) => {
                           return (
                              <StyledTableCell key={row.id.toString()}>
                                 {columns.map((column) => {
                                    if (column.render) {
                                       return (
                                          <TableCell key={column.key}>
                                             {column.render(row)}
                                          </TableCell>
                                       )
                                    }
                                    const value = column.index
                                       ? rowIndex + 1
                                       : row[column.key]
                                    return (
                                       <TableCell
                                          key={`row-${column.key}`}
                                          align={column.align}
                                       >
                                          <TableBodyTitleStyled>
                                             {value}
                                          </TableBodyTitleStyled>
                                       </TableCell>
                                    )
                                 })}
                              </StyledTableCell>
                           )
                        })}
                     </TableBody>
                  )}
               </Table>
            </TableContainer>
         </PaperStyled>
      </Grid>
   )
}

export default AppTable

const StyledTableCell = muiStyle(TableRow)(({ theme }) => ({
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.primary.backgroundAdmin,
   },
}))
const PaperStyled = styled(Paper)`
   width: 100%;
   overflow: hidden;
   margin: 0 auto;
   height: 100vh;
`
const TableHeaderStyled = styled('h3')`
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 19px;
`

const TableBodyTitleStyled = styled('p')`
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
`
