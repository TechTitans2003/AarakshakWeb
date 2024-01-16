import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyC7zQhz-BT1YrYk8thwZELC6YOYXy6a3YY",
  authDomain: "tensor-flow-detection.firebaseapp.com",
  databaseURL: "https://tensor-flow-detection-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tensor-flow-detection",
  storageBucket: "tensor-flow-detection.appspot.com",
  messagingSenderId: "349194461419",
  appId: "1:349194461419:web:31f27137a27ab0fb159eae",
  measurementId: "G-3H019E02L0"
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