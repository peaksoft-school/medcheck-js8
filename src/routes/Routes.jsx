/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoutes'
import { UserRoles } from '../utlis/constants/commons'
import UserLayout from '../layout/user/UserLayout'
import NotFoundPage from '../containers/NotFoundPage'
import AboutClinic from '../containers/user/AboutClinic'
import Service from '../containers/user/Service'
import GetResults from '../containers/user/GetResults'
import ServiceDetails from '../containers/user/ServiceDetails'
import Doctors from '../containers/user/Doctors'
import DoctorDetails from '../containers/user/DoctorDetails'
import Price from '../containers/user/Price'
import Contacts from '../containers/user/Contacts'
import Main from '../containers/user/Main'
import AdminLayout from '../layout/admin/Index'
import Appointment from '../containers/admin/Appointment'
import Specialists from '../containers/admin/Specialists'
import Patients from '../containers/admin/Patients'
import ProfileLayout from '../containers/user/personal-account/profile/ProfileLayout'
import PersonalData from '../containers/user/personal-account/profile/PersonalData'
import ChangePassword from '../containers/user/personal-account/profile/ChangePassword'
import MyApplications from '../containers/user/personal-account/myApplications/MyApplications'
import MyApplicationDetails from '../containers/user/personal-account/myApplications/MyApplicationDetails'
import ApplicationsPage from '../containers/admin/Applications.Page'

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
            <Route
               path="applications"
               element={getAdminPage(ApplicationsPage)}
            />
            <Route path="specialists" element={getAdminPage(Specialists)} />
            <Route path="patients" element={getAdminPage(Patients)} />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}

export default AppRoutes
