import firebase from "firebase/compat/app";
import 'firebase/storage'




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

     export const Firebase= firebase.initializeApp(firebaseConfig)
    