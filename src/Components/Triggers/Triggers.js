import React from 'react';
import { useGlobalData } from '../../Context/Data/Datastate';

import '../../css/Triggers.css';
import img from '../../img/assets/bg.jpg';

export default function Triggers() {

    const { data } = useGlobalData();



    const showTriggers = () => {
        if (data && data.length > 0) {
            // Assuming you want to display information for all elements in the 'data' array
            return data.map((item, i) => (
                <div className='trigger-element' key={i}>
                    <div className="trigger-content">
                        <p>
                            Weapon Detected: <span>{item.label}</span>
                        </p>
                        <p>
                            Time: <span>{item.Time}</span>
                        </p>
                        <p>
                            Date: <span>{item.Date}</span>
                        </p>
                        <p>
                            Location: <a href={item.Location}>Click Here To View Location</a>
                        </p>
                    </div>
                    <div className="trigger-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            ));
        }

        // Return null or some default content if 'data' is falsy or empty
        return null;
    };

    if (!data) {
        return 'Loading .....';
    }
    return (
        // showTriggers()
        <>
            <div className="trigger-grid">
                {showTriggers()}
            </div>
        </>
    )
}
