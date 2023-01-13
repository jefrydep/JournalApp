// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth}from 'firebase/auth'
import{getFirestore} from 'firebase/firestore/lite'
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy4Nw7w-VFCkquPXnbYoQN5BhbyPQmqto",
  authDomain: "react-proyects-a9615.firebaseapp.com",
  projectId: "react-proyects-a9615",
  storageBucket: "react-proyects-a9615.appspot.com",
  messagingSenderId: "1061081016946",
  appId: "1:1061081016946:web:30d5d3b02ee99f03aff0eb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)