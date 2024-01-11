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
import './css/Zone.css';

// Elements
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PanelLayout from './Components/Layout/PanelLayout';
import DashboardLayout from './Components/Layout/DashboardLayout';
import ZonalCamLayout from './Components/Layout/ZonalCamLayout';
import ZoneA from './Components/Zone/ZoneA';
import ZoneB from './Components/Zone/ZoneB';
import ZoneC from './Components/Zone/ZoneC';
import ZoneD from './Components/Zone/ZoneD';
import ZoneE from './Components/Zone/ZoneE';
// import Dashboard from './Components/Dashboard/Dashboard';


function App() {

  const title = 'आरक्षक';

  return (
    <div className='App'>
      <Router>
        <Navbar title={title} />
        <Routes>
          <Route path='/' element={<Login title={title} />} />
          <Route path='/login' element={<Login  title={title} />} />
          <Route path='/signUp' element={<SignUp title={title} />} />
          <Route path='/panel' element={<PanelLayout title={title} />} >
            <Route path='/panel/dashboard' element={<DashboardLayout />} />
            <Route path='/panel/zonalcam' element={<ZonalCamLayout />}>
              <Route path='/panel/zonalcam/*' element={`Select Zone To View Cameras`} />
              <Route path='/panel/zonalcam' element={`Select Zone To View Cameras`} />
              <Route path='/panel/zonalcam/zonea' element={<ZoneA />} />
              <Route path='/panel/zonalcam/zoneb' element={<ZoneB />} />
              <Route path='/panel/zonalcam/zonec' element={<ZoneC />} />
              <Route path='/panel/zonalcam/zoned' element={<ZoneD />} />
              <Route path='/panel/zonalcam/zonee' element={<ZoneE />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
