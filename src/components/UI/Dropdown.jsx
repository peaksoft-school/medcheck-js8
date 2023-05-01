import React, { useState } from 'react'
import {
   DataContainer,
   PopoverStyled,
   ServiceButtonStyled,
} from '../header/header-styled'

const Dropdown = ({ children, services, data, info }) => {
   const [popover, setPopover] = useState(null)

   const handlePopoverOpen = (event) => {
      setPopover(event.currentTarget)
   }

   const handlePopoverClose = () => {
      setPopover(null)
   }

   const openPopover = Boolean(popover)
   const id = openPopover ? 'simple-popover' : undefined

   return (
      <div>
         <ServiceButtonStyled
            aria-describedby={id}
            onMouseEnter={handlePopoverOpen}
         >
            {children}
         </ServiceButtonStyled>
         <PopoverStyled
            id={id}
            open={openPopover}
            anchorEl={popover}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
            }}
            BackdropProps={{ invisible: true }}
         >
            <DataContainer onMouseLeave={handlePopoverClose}>
               <div>
                  {services.map((service) => (
                     <div key={service.id}>
                        <a href="/">{service.name}</a>
                     </div>
                  ))}
               </div>
               <div>
                  {data.map((service) => (
                     <div key={service.id}>
                        <a href="/">{service.name}</a>
                     </div>
                  ))}
               </div>
               <div>
                  {info.map((service) => (
                     <div key={service.id}>
                        <a href="/">{service.name}</a>
                     </div>
                  ))}
               </div>
            </DataContainer>
         </PopoverStyled>
      </div>
   )
}

export default Dropdown
