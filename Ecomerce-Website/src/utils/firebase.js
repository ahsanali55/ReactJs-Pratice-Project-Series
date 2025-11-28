// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuapUuOheQjHKEblEIFdyBdDFtRSePaCI",
  authDomain: "ahsan-store.firebaseapp.com",
  projectId: "ahsan-store",
  storageBucket: "ahsan-store.firebasestorage.app",
  messagingSenderId: "721070181844",
  appId: "1:721070181844:web:3acc55819b62b6fba95a41",
  measurementId: "G-D0V2RFKZ0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
