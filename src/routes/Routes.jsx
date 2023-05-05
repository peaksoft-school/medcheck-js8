/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoutes'
import { UserRoles } from '../utlis/constants/commons'
import UserLayout from '../layout/user/UserLayout'
import NotFoundPage from '../pages/NotFoundPage'
import AboutClinic from '../pages/user/AboutClinic'
import Service from '../pages/user/Service'
import GetResults from '../pages/user/GetResults'
import ServiceDetails from '../pages/user/ServiceDetails'
import Doctors from '../pages/user/Doctors'
import DoctorDetails from '../pages/user/DoctorDetails'
import Price from '../pages/user/Price'
import Contacts from '../pages/user/Contacts'
import Main from '../pages/user/Main'
import AdminLayout from '../layout/admin/Index'
import Appointment from '../pages/admin/Appointment'
import Applications from '../pages/admin/Applications'
import Specialists from '../pages/admin/Specialists'
import Patients from '../pages/admin/Patients'
import ProfileLayout from '../pages/user/personal-account/profile/ProfileLayout'
import PersonalData from '../pages/user/personal-account/profile/PersonalData'
import ChangePassword from '../pages/user/personal-account/profile/ChangePassword'
import MyApplications from '../pages/user/personal-account/myApplications/MyApplications'
import MyApplicationDetails from '../pages/user/personal-account/myApplications/MyApplicationDetails'

const AppRoutes = () => {
   const role = 'ADMIN'

   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   const getUserPage = (component) => (
      <ProtectedRoute
         isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
         fallbackPath="/admin/appointment"
         component={component}
      />
   )

   const getAdminPage = (component) => (
      <ProtectedRoute
         isAllowed={isAllowed([UserRoles.ADMIN])}
         fallbackPath="/"
         component={component}
      />
   )

   return (
      <Routes>
         <Route path="/" element={getUserPage(UserLayout)}>
            <Route index element={getUserPage(Main)} />
            <Route path="about" element={getUserPage(AboutClinic)} />
            <Route path="service" element={getUserPage(Service)} />
            <Route
               path="service/:id/details"
               element={getUserPage(ServiceDetails)}
            />
            <Route path="doctors" element={getUserPage(Doctors)} />
            <Route
               path="doctors/:id/details"
               element={getUserPage(DoctorDetails)}
            />
            <Route path="price" element={getUserPage(Price)} />
            <Route path="contacts" element={getUserPage(Contacts)} />
            <Route path="getResults" element={getUserPage(GetResults)} />
            <Route path="profile" element={getUserPage(ProfileLayout)}>
               <Route
                  path="personal-data"
                  element={getUserPage(PersonalData)}
               />
               <Route
                  path="change-password"
                  element={getUserPage(ChangePassword)}
               />
            </Route>
            <Route
               path="myApplications"
               element={getUserPage(MyApplications)}
            />
            <Route
               path="myApplications/:id/details"
               element={getUserPage(MyApplicationDetails)}
            />
         </Route>
         <Route path="/admin" element={getAdminPage(AdminLayout)}>
            <Route path="appointment" element={getAdminPage(Appointment)} />
            <Route path="applications" element={getAdminPage(Applications)} />
            <Route path="specialists" element={getAdminPage(Specialists)} />
            <Route path="patients" element={getAdminPage(Patients)} />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}

export default AppRoutes
