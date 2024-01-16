import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../css/Alert.css';
import img from '../../img/bg.jpg';
import { useGlobalData } from '../../Context/Data/Datastate';
import { useLocation } from 'react-router-dom';

export default function Alert() {

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
