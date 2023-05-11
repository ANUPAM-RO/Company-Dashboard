// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLiSDlmnLoDdqGK1MWiKOoabKwqAa7VBs",
  authDomain: "dashboard-68727.firebaseapp.com",
  projectId: "dashboard-68727",
  storageBucket: "dashboard-68727.appspot.com",
  messagingSenderId: "305433646470",
  appId: "1:305433646470:web:fb703868344d43be768807",
  measurementId: "G-1NQ9RQ2LS7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
