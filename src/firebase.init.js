// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7maMLbbfa15yG6Kvoa84xigw_ZqM9Ang",
  authDomain: "genius-car-store-3c868.firebaseapp.com",
  projectId: "genius-car-store-3c868",
  storageBucket: "genius-car-store-3c868.appspot.com",
  messagingSenderId: "445664529571",
  appId: "1:445664529571:web:bb93cf0da0923fd1360316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
