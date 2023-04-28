import React from 'react'
import { Outlet } from 'react-router'

const ProfileLayout = () => {
   return (
      <div>
         <h2>Профиль</h2>
         <Outlet />
      </div>
   )
}

export default ProfileLayout
