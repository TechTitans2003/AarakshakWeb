import { createContext, useContext, useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database';
// import { arrayUnion, doc, updateDoc } from 'firebase/firestore/lite';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { db } from '../../Firebase';


const DataContext = createContext();

export function useGlobalData() {
    return useContext(DataContext);
}

const DataState = (props) => {

    
        // const showAlert = (device, message) => {
        //     // console.log({ device, message });
        //     // if (sameAlert) {
        //     //   return;
        //     // }
        //     // setSameAlert(true);
        //     const path = window.location.pathname;
        //     if (path === '/login' || path === '/signup' || path === '/') {
        //         // console.log(path);
        //         return;
        //     }
        //     else {
        //         toast.error(`${device} ${message}`);
        //         return;
        //     }
        // };
    

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
                    writeData(detection, `detection`, `object`);
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

    async function writeData(value, collectionName, equipment) {
        try {
            const tempRef = doc(db, collectionName, equipment);
            // console.log({ tempRef });

            await updateDoc(tempRef, {
                // current: value,
                details: arrayUnion({
                    label: value['Class Label'],
                    Time: value['Time'],
                    Date: value['Date'],
                    Location: value['Location']
                }),
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    const [triggers, setTriggers] = useState([]);

    // fuction to read or fetch data from firestore
    const fetchData = async (collection, subCollection, param) => {
        try {
            const docRef = doc(db, `${collection}`, `${subCollection}`);
            // const docRef = doc(db, `${collection}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data()) ;
                param(docSnap.data());
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    useEffect(() => {
        readData('Detection_Results', setDetection);

        // eslint-disable-next-line
    }, [detection])

    const [data, setData] = useState(triggers['details']);

    useEffect(() => {
        fetchData('detection', 'object', setTriggers);
        setData(triggers['details'])
        // console.log(triggers['details']);        
    }, [triggers])


    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        //   setTimeout(() => {
        setShowAlert(true);
        //   }, 5000);
    }, [])


    const state = {
        showAlert,
        setShowAlert,
        getCurrentDate,
        getCurrentTime,
        detection,
        triggers,
        data,
    };

    return (
        <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
    );
};

export default DataState;
