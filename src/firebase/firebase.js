// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn5TCg87FWfb2O7jh3SAfRSkM2a4WYQVk",
  authDomain: "fir-learning-7da76.firebaseapp.com",
  projectId: "fir-learning-7da76",
  storageBucket: "fir-learning-7da76.appspot.com",
  messagingSenderId: "702254343863",
  appId: "1:702254343863:web:ea6870e0d271f35a2b0f32",
  measurementId: "G-MRF9MQEG4C"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;