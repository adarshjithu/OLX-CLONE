// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwOc0puSNfo-YoPGi3mq17F63lMN_bakM",
  authDomain: "netflixclone-23706.firebaseapp.com",
  projectId: "netflixclone-23706",
  storageBucket: "netflixclone-23706.appspot.com",
  messagingSenderId: "1000696973058",
  appId: "1:1000696973058:web:2aeebf85ea1c645efe641b",
  measurementId: "G-QVHM164NT2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
