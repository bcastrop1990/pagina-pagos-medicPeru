import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter.tsx'
import './css/index.css'
import './css/satoshi.css';
import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
