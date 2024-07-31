import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjq2naMqHbE_SF8nUKvqn-kGOoJWW0c1A",
  authDomain: "books-web-3b061.firebaseapp.com",
  projectId: "books-web-3b061",
  storageBucket: "books-web-3b061.appspot.com",
  messagingSenderId: "786644938106",
  appId: "1:786644938106:web:57c9a636edf4501d55bac3",
  measurementId: "G-HJ6NL8CB36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);