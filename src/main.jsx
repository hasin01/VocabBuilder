import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../App.jsx'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dictionary from './pages/Dictionary.jsx'
import Recommend from './pages/Recommend.jsx'
import Training from './pages/Training.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/VocabBuilder/" element={<App />} />
      <Route path="/VocabBuilder/login" element={<Login />} />
      <Route path="/VocabBuilder/register" element={<Register />} />
      <Route path="/VocabBuilder/dictionary" element={<Dictionary />} />
      <Route path="/VocabBuilder/recommend" element={<Recommend />} />

      <Route path="/VocabBuilder/training" element={<Training />} />



    </Routes>
  </BrowserRouter>
</AuthProvider>
  </StrictMode>,
)
