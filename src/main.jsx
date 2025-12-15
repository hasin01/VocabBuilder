import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { app } from './firebaseConfig/firebaseConfig.js'


console.log(app);  

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/VocabBuilder/" element={<App />} />
      <Route path="/VocabBuilder/login" element={<Login />} />
      <Route path="/VocabBuilder/register" element={<Register />} />
    </Routes>
  </BrowserRouter>

  </StrictMode>,
)
