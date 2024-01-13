import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';


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

  const state = {
    showAlert
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataState;
