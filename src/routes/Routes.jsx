/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoutes'
import { UserRoles } from '../utlis/constants/commons'
import UserLayout from '../layout/user/UserLayout'
import NotFoundPage from '../pages/NotFoundPage'
import AboutClinic from '../pages/AboutClinicPage'
import ServiceBox from '../components/UI/servicebox/ServiceCard'
import ServiceInnerPage from '../pages/ServiceInnerPage'
import GetResults from '../pages/GetResults'

const AppRoutes = () => {
   const role = 'GUEST'

   const isAllowed = (roles) => {
      return roles.includes(role)
   }

   return (
      <Routes>
         <Route
            path="/"
            element={
               <ProtectedRoute
                  isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                  fallbackPath="/admin/online-appointment"
                  component={UserLayout}
               />
            }
         >
            <Route
               index
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={() => <p>Main page</p>}
                  />
               }
            />
            <Route
               path="about"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={AboutClinic}
                  />
               }
            />
            <Route
               path="service"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={ServiceBox}
                  />
               }
            />
            <Route
               path="doctors"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={() => <p>Doctors Page</p>}
                  />
               }
            />
            <Route
               path="price"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={() => <p>Price Page</p>}
                  />
               }
            />
            <Route
               path="contacts"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={() => <p>Contacts Page</p>}
                  />
               }
            />
            <Route
               path="getResults"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={GetResults}
                  />
               }
            />
            <Route
               path="service/:id/details"
               element={
                  <ProtectedRoute
                     isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                     fallbackPath="/admin/online-appointment"
                     component={ServiceInnerPage}
                  />
               }
            />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}

export default AppRoutes
