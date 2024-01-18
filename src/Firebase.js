import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import 'firebase/storage';

// rizwan
const firebaseConfig = {
  apiKey: "AIzaSyDIui3lDPhfxUDMfQ6Uzzfi46ro-vbHDx4",
  authDomain: "aarakshak-web-rph.firebaseapp.com",
  databaseURL: "https://aarakshak-web-rph-default-rtdb.firebaseio.com",
  projectId: "aarakshak-web-rph",
  storageBucket: "aarakshak-web-rph.appspot.com",
  messagingSenderId: "842820936593",
  appId: "1:842820936593:web:829f95e2aaf7e26158f030",
  measurementId: "G-PDYJXL6VV4"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC40kHqnUpWwF1fRaHVvqFoYTTMVnz7vH4",
//   authDomain: "aarakshak-web-firebase.firebaseapp.com",
//   databaseURL: "https://aarakshak-web-firebase-default-rtdb.firebaseio.com",
//   projectId: "aarakshak-web-firebase",
//   storageBucket: "aarakshak-web-firebase.appspot.com",
//   messagingSenderId: "234094021667",
//   appId: "1:234094021667:web:1b97a029e7459d40573596",
//   measurementId: "G-0MNR8Q423E"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage();
// const storageRef = ref;

export { app, analytics, auth, database, db, storage };