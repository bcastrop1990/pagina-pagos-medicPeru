import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { lazy, Suspense } from "react"

const LoginPage = lazy(()=> import('../pages/LoginPage'))
const RegisterPage = lazy(()=> import('../pages/RegisterPage'))


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/" element={
          <Suspense fallback="Cargando..."> 
            <LoginPage/>
          </Suspense>
        }index/>
        <Route path="/register" element={
          <Suspense fallback="Cargando...">
            <RegisterPage/>
          </Suspense>
        }/>
      </Route>
    </Routes>
  )
}
