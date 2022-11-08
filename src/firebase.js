// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTxW54u0kF6QXohE1vGYujeI6_LcrnCWA",
  authDomain: "chat-app-yt-26834.firebaseapp.com",
  projectId: "chat-app-yt-26834",
  storageBucket: "chat-app-yt-26834.appspot.com",
  messagingSenderId: "73383060074",
  appId: "1:73383060074:web:825213e5f68e4ad667a013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)