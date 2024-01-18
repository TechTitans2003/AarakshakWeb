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
//   apiKey: "AIzaSyBREplZoXoO6ssvF0mRf967t_XR1xz_YmM",
//   authDomain: "detection-object-e0b3d.firebaseapp.com",
//   databaseURL: "https://detection-object-e0b3d-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "detection-object-e0b3d",
//   storageBucket: "detection-object-e0b3d.appspot.com",
//   messagingSenderId: "235367490831",
//   appId: "1:235367490831:web:8be5ad7a793677b7d64a7a",
//   measurementId: "G-81D6X0TG7P"
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