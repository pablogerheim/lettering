import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/reset.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<App />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
