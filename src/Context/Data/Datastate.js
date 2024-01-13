import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { child, get, getDatabase, ref } from 'firebase/database';


const DataContext = createContext();

export function useGlobalData() {
    return useContext(DataContext);
}

const DataState = (props) => {

    const showAlert = (device, message) => {
        // console.log({ device, message });
        // if (sameAlert) {
        //   return;
        // }
        // setSameAlert(true);
        const path = window.location.pathname;
        if (path === '/login' || path === '/signup' || path === '/') {
            // console.log(path);
            return;
        }
        else {
            toast.error(`${device} ${message}`);
            return;
        }
    };
    // eslint-disable-next-line
    const [detection, setDetection] = useState("");

    function readData(dir, stateName) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `${dir}/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());

                    stateName(snapshot.val());
                    // showAlert(collection,  dir);
                } else {
                    console.log('No data available');
                }
            })
            .then(() => {
                console.log('Loading Done');
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        readData('detection_results', setDetection);
        // console.log(JSON.stringify(detection));
    }, [])




    const state = {
        showAlert
    };

    return (
        <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
    );
};

export default DataState;
