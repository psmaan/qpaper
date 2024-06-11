// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRqEgdw1xa3OI2Vojk0e1lGtGJRH7cm3k",
    authDomain: "otp-questionpaper.firebaseapp.com",
    projectId: "otp-questionpaper",
    storageBucket: "otp-questionpaper.appspot.com",
    messagingSenderId: "762044606289",
    appId: "1:762044606289:web:596fc7e688ca8a7f649570",
    measurementId: "G-NJQR53072W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);