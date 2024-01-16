import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useGlobalData } from '../../Context/Data/Datastate';
import { useLocation } from 'react-router-dom';

import '../../css/Alert.css';
// import img from '../../img/bg.jpg';

export default function Alert() {

    const img = 'https://firebasestorage.googleapis.com/v0/b/aarakshak-web-rtdb.appspot.com/o/alert-img%2Fbg.jpg?alt=media&token=350e274e-8a95-4b74-9fd6-8eefaaed9381';

    const { showAlert, setShowAlert, detection } = useGlobalData();

    const hideAlert = () => {
        setShowAlert(false);
    }

    useEffect(() => {
        // setShowAlert(true);
        if( showAlert === false)
        {document.body.style.overflowY = `scroll`;}
        else
        {document.body.style.overflowY = `hidden`;}

    }, [showAlert])

    const location = useLocation();
    const path = location.pathname;


    if (path === '/' || path === '/login' || path === '/signup') {
        return null;
    }
    if (detection['Class Label'] === 'Unknown' || detection['Class Label'] == null) {
        return;
    }
    // return (
    return ReactDOM.createPortal(
        showAlert &&
        <>
            <div className="alert-background-container"></div>
            <div className="alert-container">
                <h3>Alert Weapon Detected</h3>
                <img src={img} alt="" />
                <div>
                    <p>
                        At Location : <span>{detection.Location}</span>
                    </p>
                    <p>
                        Time : <span>{detection.Time}</span>
                    </p>
                    <p>
                        Weapon : <span>{detection['Class Label']}</span>
                    </p>
                </div>
                <div onClick={hideAlert} className="alert-close-btn">x</div>
            </div>
        </>
        ,document.querySelector(`#alert-layer`)
    )
}
