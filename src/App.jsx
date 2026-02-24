import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import './firebaseConfig/firebaseConfig.js'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Dictionary from './pages/Dictionary.jsx'
import Recommend from './pages/Recommend.jsx'
import Training from './pages/Training.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import {AppProviders}  from './context/AppProviders.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  


  return (
 <AppProviders>
  <Router>
    <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

    
      <Route element={<PrivateRoute />}>
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/training" element={<Training />} />
        <Route path="/recommend" element={<Recommend />} />
      </Route>

    </Routes>
  </Router>
  <ToastContainer />

</AppProviders>
  );
}

export default App;
