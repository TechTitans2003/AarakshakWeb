import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useGlobalData } from '../../Context/Data/Datastate';
import { useLocation } from 'react-router-dom';
import '../../css/Alert.css';

import aud from './alert.mp3';

export default function Alert() {
    const { showAlert, setShowAlert, detection } = useGlobalData();

    const hideAlert = () => {
        setShowAlert(false);
    };

    // const audio = useRef()

    useEffect(() => {

        if (showAlert === false) {
            window.document.body.style.overflowY = 'scroll';
        } else {
            window.document.body.style.overflowY = 'hidden';
            // setTimeout(_ => {
            //     console.log('hii');
            //     audio.current.play();
            // },1000)
        }
    }, [showAlert]);


    const location = useLocation();
    const path = location.pathname;

    if (path === '/' || path === '/login' || path === '/signup') {
        return null;
    }
    if (detection['Class Label'] === 'Unknown' || detection['Class Label'] == null) {
        return null;
    }

    return ReactDOM.createPortal(
        showAlert && (
            <>
                <div className="alert-background-container"></div>
                <audio src={aud} loop autoPlay></audio>
                <div className="alert-container">
                    <h3 className="center">Alert Weapon Detected</h3>
                    <img src={detection.ImageURL} alt={`Weapon ${detection['Class Label']} detected`} />
                    <div>
                        <p>
                            Weapon : <span>{detection['Class Label']}</span>
                        </p>
                        <p>
                            At Location :{' '}
                            <a href={detection.Location} target="_blank" rel="noopener noreferrer">
                                Click Here To View On Map
                            </a>
                        </p>
                        <p>
                            Time : <span>{detection.Time}</span>
                        </p>
                        <p>
                            Date : <span>{detection.Date}</span>
                        </p>
                    </div>
                    <div onClick={hideAlert} className="alert-close-btn">
                        x
                    </div>
                    {/* <audio ref={audio} src={aud} muted ></audio> */}
                </div>
            </>
        ),
        document.querySelector(`#alert-layer`)
    );
}
