import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBaCRJExPmOgmVgwQ1LCrwFC-2syVyPguI",
  authDomain: "noseproyecto-7e260.firebaseapp.com",
  projectId: "noseproyecto-7e260",
  storageBucket: "noseproyecto-7e260.appspot.com",
  messagingSenderId: "516567462798",
  appId: "1:516567462798:web:06defe0d60ed93cb31aadf",
  measurementId: "G-F98SPSJ5MP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
