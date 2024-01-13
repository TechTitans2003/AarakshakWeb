import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// Toastify For Alerts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Zone from './Components/Zone/Zone';
import Videouploader from './Components/VideoUploader/Videouploader';
// import Dashboard from './Components/Dashboard/Dashboard';

// Data Context
import DataState from './Context/Data/Datastate';

// Firebase Config File
import { auth } from './Firebase';

// Img logo
import logo from './img/assets/logo.png';

function App() {

    const title = 'आरक्षक';

    const [userName, setUserName] = useState("");

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user){
            setUserName(user.displayName)
        }
        else(
            setUserName("")
        )
        // console.log(user);
      })
    
    }, [])
    

    return (
        <div className='App'>
            <DataState>
                <Router>
                    <Navbar title={title} logo={logo} />
                    <Routes>
                        <Route path='/' element={<Login title={title} logo={logo} />} />
                        <Route path='/login' element={<Login title={title} logo={logo} />} />
                        <Route path='/signUp' element={<SignUp title={title} logo={logo} />} />
                        <Route path='/panel' element={<PanelLayout title={title} useName={userName} />} >
                            <Route path='/panel/dashboard' element={<DashboardLayout />} />
                            <Route path='/panel/zonalcam' element={<ZonalCamLayout />}>
                                <Route path='/panel/zonalcam/*' element={<Zone />} />
                                <Route path='/panel/zonalcam' element={<Zone />} />
                                <Route path='/panel/zonalcam/zonea' element={<ZoneA />} />
                                <Route path='/panel/zonalcam/zoneb' element={<ZoneB />} />
                                <Route path='/panel/zonalcam/zonec' element={<ZoneC />} />
                                <Route path='/panel/zonalcam/zoned' element={<ZoneD />} />
                                <Route path='/panel/zonalcam/zonee' element={<ZoneE />} />
                            </Route>
                            <Route path='/panel/videouploader' element={<Videouploader />} />
                        </Route>
                    </Routes>
                </Router>
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    draggable={true}
                    progress={undefined}
                    theme="colored"
                    type="error"
                />
            </DataState>
        </div>
    );
}

export default App;
