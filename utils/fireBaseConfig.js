import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD7g3mz0GKdbNYsmx92efNwrHQqr2jkacI",
  authDomain: "wisetrips-5e780.firebaseapp.com",
  projectId: "wisetrips-5e780",
  storageBucket: "wisetrips-5e780.appspot.com",
  messagingSenderId: "684880449485",
  appId: "1:684880449485:web:ab2a1388d9cee233e07e84",
  measurementId: "G-F71DZ1JDNX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const analytics = getAnalytics(FIREBASE_APP);