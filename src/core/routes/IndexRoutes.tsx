import { lazy, Suspense } from "react"
import {  Route, Routes } from "react-router-dom"
import { IndexLayout } from "../layout/IndexLayout"

const AppointmentHistoryPage = lazy(()=> import('../pages/AppointmentHistory'))
const PendingApointmentsPages = lazy(()=> import('../pages/PendingApointmentsPages'))
const ProfilePage = lazy(()=> import('../pages/ProfilePage'))

const IndexRoutes = () => {
  return (
      <Routes>
        <Route element={<IndexLayout/>}>
          <Route path="/historial"element={
            <Suspense fallback="Cargando...">
              <AppointmentHistoryPage/>
            </Suspense>
          }/>
          <Route path="/pendientes"element={
            <Suspense fallback="Cargando...">
              <PendingApointmentsPages/>
            </Suspense>
          }index/>
          <Route path="/perfil"element={
            <Suspense fallback="Cargando...">
              <ProfilePage/>
            </Suspense>          
          }/>
        </Route>
      </Routes>
  )
}


export default IndexRoutes

