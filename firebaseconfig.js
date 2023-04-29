// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDit1puX50hozYyvkVlTDBzLV4aE-a6omg",
  authDomain: "company-dashboard-10cb7.firebaseapp.com",
  projectId: "company-dashboard-10cb7",
  storageBucket: "company-dashboard-10cb7.appspot.com",
  messagingSenderId: "793579072671",
  appId: "1:793579072671:web:e0bc712a23a03d3dda46aa",
  measurementId: "G-MVH13R5RWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
