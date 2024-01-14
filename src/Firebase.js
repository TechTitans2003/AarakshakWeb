import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA3VQDU2Jz7he6gZGmSPzcTGEKP2GKaFD4",
  authDomain: "aarakshak-web-rtdb.firebaseapp.com",
  databaseURL: "https://aarakshak-web-rtdb-default-rtdb.firebaseio.com",
  projectId: "aarakshak-web-rtdb",
  storageBucket: "aarakshak-web-rtdb.appspot.com",
  messagingSenderId: "939793000074",
  appId: "1:939793000074:web:50d12274acfbac77206f73",
  measurementId: "G-GYSPC1PGR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage();
// const storageRef = ref;

export { app, analytics, auth, database, db, storage };