import './src/index.css'
import './src/firebaseConfig/firebaseConfig.js'
import { Login } from './src/pages/Login.jsx'
import { Register } from './src/pages/Register.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoute from './src/components/PublicRoute/PublicRoute.jsx'
import Dictionary from './src/pages/Dictionary.jsx'
import Recommend from './src/pages/Recommend.jsx'
import Training from './src/pages/Training.jsx'
import { AuthProvider } from './src/context/AuthContext.jsx'
import PrivateRoute from './src/components/PrivateRoute/PrivateRoute.jsx'

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
