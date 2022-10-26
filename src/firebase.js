import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_WQ4AnGuuhiGZ2mkfbTGBjco3_uLMeP0",
    authDomain: "instagram-clone-react-e6890.firebaseapp.com",
    projectId: "instagram-clone-react-e6890",
    storageBucket: "instagram-clone-react-e6890.appspot.com",
    messagingSenderId: "856290939044",
    appId: "1:856290939044:web:8ab3e4e7df10b503f25631",
    measurementId: "G-QYZ6ZER60J"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};