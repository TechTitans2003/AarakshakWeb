import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import 'firebase/storage';

// rizwan
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