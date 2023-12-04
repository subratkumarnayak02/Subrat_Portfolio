import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZWkFNX4SIf31jte7169CFZtG3EkCSn7g",
  authDomain: "react-portfolio-subrat.firebaseapp.com",
  projectId: "react-portfolio-subrat",
  storageBucket: "react-portfolio-subrat.appspot.com",
  messagingSenderId: "194831885110",
  appId: "1:194831885110:web:d0ff34a40428bbe9eac997",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
