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
                    // console.log(snapshot.val());

                    stateName(snapshot.val());
                    // showAlert(collection,  dir);
                } else {
                    console.log('No data available');
                }
            })
            .then(() => {
                // console.log('Loading Done');
            })
            .catch((error) => {
                console.error(error);
            });
    }



    const getCurrentDate = (separator = '-') => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        // console.log(`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`);
        return (`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`);
    }

    const getCurrentTime = (separator = ':') => {

        let newDate = new Date()
        let hour = newDate.getHours();
        let min = newDate.getMinutes();
        let sec = newDate.getSeconds();

        // console.log(`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`);
        return (`${hour}${separator}${min}${separator}${sec}`);
    }

    useEffect(() => {
        readData('detection_results', setDetection);
        // setDate(getCurrentDate());
        // console.log(JSON.stringify(detection));
    }, [])




    const state = {
        showAlert,
        getCurrentDate,
        getCurrentTime
    };

    return (
        <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
    );
};

export default DataState;
