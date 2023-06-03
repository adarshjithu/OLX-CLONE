import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAwOc0puSNfo-YoPGi3mq17F63lMN_bakM",
    authDomain: "netflixclone-23706.firebaseapp.com",
    projectId: "netflixclone-23706",
    storageBucket: "netflixclone-23706.appspot.com",
    messagingSenderId: "1000696973058",
    appId: "1:1000696973058:web:2aeebf85ea1c645efe641b",
    measurementId: "G-QVHM164NT2"
  };


  const app=initializeApp(firebaseConfig)
  export const storage=getStorage(app)