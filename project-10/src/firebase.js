// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3goWMASiJBOCC_Zl7PqihmsEesuM5uc",
  authDomain: "movie-app-b765d.firebaseapp.com",
  projectId: "movie-app-b765d",
  storageBucket: "movie-app-b765d.appspot.com",
  messagingSenderId: "67802682460",
  appId: "1:67802682460:web:66ac9166924f4a6bcfc299",
  measurementId: "G-66EJN5TTJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
