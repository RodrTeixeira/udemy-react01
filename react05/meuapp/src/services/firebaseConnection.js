import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAs1EVAIKlVpqoD-o-pU6uLjtN8-a6YzYo",
    authDomain: "tickets-cc74f.firebaseapp.com",
    projectId: "tickets-cc74f",
    storageBucket: "tickets-cc74f.appspot.com",
    messagingSenderId: "854226426892",
    appId: "1:854226426892:web:3fcc76002f8263764a6229",
    measurementId: "G-NQS6J6BGWR"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export {auth, db, storage};
