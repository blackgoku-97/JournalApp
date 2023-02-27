// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyBDUaKdJnbh-0MhJoG6sRhY1WiPE3dCJJ4",
  authDomain: "react-journal-3b7bd.firebaseapp.com",
  projectId: "react-journal-3b7bd",
  storageBucket: "react-journal-3b7bd.appspot.com",
  messagingSenderId: "272528337023",
  appId: "1:272528337023:web:b08190701d610591b9374a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( FirebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );