import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/storage';

// import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIErp6lsivbbzLkfLs1Hi-1_BHt3v6OFs",
  authDomain: "object-detection-4b3de.firebaseapp.com",
  databaseURL: "https://object-detection-4b3de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "object-detection-4b3de",
  storageBucket: "object-detection-4b3de.appspot.com",
  messagingSenderId: "595470443083",
  appId: "1:595470443083:web:a0763a88bee3d31f6d23ce",
  measurementId: "G-PTKQ2H406Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage();
const storageRef = ref;

export { app, analytics, auth, database, db, storage, storageRef };