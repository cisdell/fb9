import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBs8WX2Q27fxn-OREIGHFj1vndKyoXWMKQ",
  authDomain: "readinglistapp-37762.firebaseapp.com",
  projectId: "readinglistapp-37762",
  storageBucket: "readinglistapp-37762.appspot.com",
  messagingSenderId: "618113375038",
  appId: "1:618113375038:web:3a9aa7bb7ffae691c02a6f",
};

//init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();


//init firebase auth
const auth = getAuth()

export { db, auth };
