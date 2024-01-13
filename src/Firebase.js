import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2VphySRT4jc2lMSY23AtOr_cbbVz-7dg",
  authDomain: "aarakshak-monitoringsystem.firebaseapp.com",
  projectId: "aarakshak-monitoringsystem",
  storageBucket: "aarakshak-monitoringsystem.appspot.com",
  messagingSenderId: "116370673853",
  appId: "1:116370673853:web:4087c128845f759442e7d4",
  measurementId: "G-K4PVC2W4RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };