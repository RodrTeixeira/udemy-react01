import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCefxgEZwELGkpKX3prC1ujVxgAAejbWTU",
    authDomain: "curso-a034b.firebaseapp.com",
    projectId: "curso-a034b",
    storageBucket: "curso-a034b.appspot.com",
    messagingSenderId: "290879039768",
    appId: "1:290879039768:web:a1bb1de5d9722e4cd9966d",
    measurementId: "G-1WEBF2YNWN"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  export { db };