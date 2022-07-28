import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAp9GKLf-EAeni2ldgAGvVpYHcUSRVJLqw",
    authDomain: "portfolio-4d4c6.firebaseapp.com",
    projectId: "portfolio-4d4c6",
    storageBucket: "portfolio-4d4c6.appspot.com",
    messagingSenderId: "170138047972",
    appId: "1:170138047972:web:2cf52eaf8a4451cbd6e3f1"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db;