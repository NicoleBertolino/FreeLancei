// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbVFpd_ldY-0K_KiXl0gfVpUyaiEMkoM",
  authDomain: "freelancei-98137.firebaseapp.com",
  projectId: "freelancei-98137",
  storageBucket: "freelancei-98137.firebasestorage.app",
  messagingSenderId: "391865966205",
  appId: "1:391865966205:web:ed161c44800e74254e1b14"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);