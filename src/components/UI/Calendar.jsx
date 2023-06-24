import { styled } from '@mui/system'
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const CustomWeek = () => {
   return (
      <div>
         <div>hello</div>
      </div>
   )
}

const CustomEvent = ({ ...data }) => {
   console.log(data)

   const test = [1, 2, 3]
   return test.map((el) => {
      return (
         <div key={el} className={data.className}>
            {data.children}
            {/* asdfasd */}
         </div>
      )
   })
}

const AppCalendar = () => {
   const components = {
      week: {
         header: CustomWeek,
         event: CustomEvent,
      },
      day: {
         event: CustomEvent,
      },
      //   dateCellWrapper: CustomEvent,
      dayColumnWrapper: CustomEvent,
   }
   return (
      <GlobalContainer>
         <CalendarStyle localizer={localizer} components={components} />
      </GlobalContainer>
   )
}

export default AppCalendar
const GlobalContainer = styled('div')``
const CalendarStyle = styled(Calendar)`
   .rbc-label {
      display: none;
   }
`
