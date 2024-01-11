import React from 'react';
import img from '../../img/assets/camera.png';

export default function ZoneD() {
    return (
        <>
            <div className="zone-view">
                <div className="zone-grid">
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                    <span className='cam'>
                        <img src={img} alt="" />
                        <p className='cam-angle'>Camera angle : <span></span></p>
                    </span>
                </div>
                <div className="zone-det">
                    <h3>Location : <span></span></h3>
                    <p>
                        <p className='left'>Total Triggers : <span></span></p>
                        <p className='left'>Total Criminal Record : <span></span></p>
                        <p className='left'>Current Time : <span></span></p>
                    </p>
                </div>
            </div>
        </>
    )
}
