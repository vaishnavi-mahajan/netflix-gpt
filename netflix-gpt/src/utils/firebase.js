// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyARSrkFDVLUSd2UG6SBUqdaPMV8Eq1cLAQ",
  authDomain: "netflixgpt-7addc.firebaseapp.com",
  projectId: "netflixgpt-7addc",
  storageBucket: "netflixgpt-7addc.appspot.com",
  messagingSenderId: "15660143347",
  appId: "1:15660143347:web:e4b386f641a2640bd81d86",
  measurementId: "G-RZW08N85BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()