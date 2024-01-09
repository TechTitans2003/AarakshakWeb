import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// CSS
import './css/App.css';
import './css/Form.css';
import './css/Sidemenu.css';
import './css/Dashboard.css';

// Elements
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PanelLayout from './Components/Layout/PanelLayout';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/panel' element={<PanelLayout />} >
            <Route path='/panel/dashboard' element={<DashboardLayout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
