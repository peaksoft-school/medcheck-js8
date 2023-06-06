import React from 'react'
import { SelectUi } from '../../components/UI/SelectUi'
import { priceData } from '../../utlis/price/price'

const Contacts = () => {
   return (
      <h1>
         {' '}
         <SelectUi priceData={priceData} />
      </h1>
   )
}

export default Contacts
