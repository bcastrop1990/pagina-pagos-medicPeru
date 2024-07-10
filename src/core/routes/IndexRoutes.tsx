import { lazy, Suspense } from "react"
import {  Navigate, Route, Routes } from "react-router-dom"
import { IndexLayout } from "../layout/IndexLayout"

const AppointmentHistoryPage = lazy(()=> import('../pages/AppointmentHistory'))
const PendingApointmentsPages = lazy(()=> import('../pages/PendingApointmentsPages'))
const SpecialtiesPage = lazy(()=> import('../pages/SpecialtiesPage'))
const DoctorsPage = lazy(()=> import('../pages/DoctorsPage'))
const ChatWithDoctorsPage = lazy(()=> import('../pages/ChatWithDoctorsPage'))
const ChatWithIAPage = lazy(()=> import('../pages/ChatWithIAPage'))
const StorePage = lazy(()=> import('../pages/StorePage'))
const SettingPage = lazy(()=> import('../pages/SettingPage'))
const ProfilePage = lazy(()=> import('../pages/ProfilePage'))


const IndexRoutes = () => {
  return (
      <Routes>
        <Route element={<IndexLayout/>}>
          {/* Menu */}
          <Route path="/citas/pendientes"element={
              <Suspense fallback="Cargando...">
                <PendingApointmentsPages/>
              </Suspense>
            }index/>
          <Route path="/citas/historial"element={
            <Suspense fallback="Cargando...">
              <AppointmentHistoryPage/>
            </Suspense>
          }/>

          <Route path="/especialidades"element={
            <Suspense fallback="Cargando...">
              <SpecialtiesPage/>
            </Suspense>
          }/>
          <Route path="/doctores"element={
            <Suspense fallback="Cargando...">
              <DoctorsPage/>
            </Suspense>
          }/>
          <Route path="/chat/doctor"element={
            <Suspense fallback="Cargando...">
              <ChatWithDoctorsPage/>
            </Suspense>
          }/>
          <Route path="/chat/ia"element={
            <Suspense fallback="Cargando...">
              <ChatWithIAPage/>
            </Suspense>
          }/>
          <Route path="/tienda"element={
            <Suspense fallback="Cargando...">
              <StorePage/>
            </Suspense>
          }/>
          {/* -----Menu---- */}
          {/* Configuracion*/}
          <Route path="/configuracion"element={
            <Suspense fallback="Cargando...">
              <SettingPage/>
            </Suspense>          
          }/>
          <Route path="/perfil"element={
            <Suspense fallback="Cargando...">
              <ProfilePage/>
            </Suspense>          
          }/>
          {/*-------Configuracion-----*/}

        </Route>
        <Route path="/*" element={<Navigate to="/pendientes" />} />
      </Routes>
  )
}

export default IndexRoutes

