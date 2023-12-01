
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB66d8dPbk_JEbbA_llBpTam9ohoWZ898w",
  authDomain: "react-portfolio-44c3b.firebaseapp.com",
  projectId: "react-portfolio-44c3b",
  storageBucket: "react-portfolio-44c3b.appspot.com",
  messagingSenderId: "267001750653",
  appId: "1:267001750653:web:e3419bbe632f84ca507d14"
};

 export const app = initializeApp(firebaseConfig);
  export const db=getFirestore();