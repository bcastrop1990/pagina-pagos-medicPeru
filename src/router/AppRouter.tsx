import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import  IndexRoutes  from '../core/routes/IndexRoutes'

//todo----> FALTA CREAR VALIDACION QUE ESTE REGISTRADO

export const AppRouter = () => {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/*" element={<IndexRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes/>} />
      </Routes>
    </BrowserRouter>
  )
}
