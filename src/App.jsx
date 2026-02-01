import './index.css'
import './firebaseConfig/firebaseConfig.js'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './components/PublicRoute/PublicRoute.jsx'
import Dictionary from './pages/Dictionary.jsx'
import Recommend from './pages/Recommend.jsx'
import Training from './pages/Training.jsx'
import AuthProvider from './context/AuthContext.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'

function App() {
  return (
 <AuthProvider>
  <Router>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/training" element={<Training />} />
        <Route path="/recommend" element={<Recommend />} />
      </Route>

    </Routes>
  </Router>
</AuthProvider>
  );
}

export default App;
