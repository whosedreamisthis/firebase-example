// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZKUygD6unSoOiSkPdYtek-7R8SF1_Yo",
  authDomain: "fir-example-7fa12.firebaseapp.com",
  projectId: "fir-example-7fa12",
  storageBucket: "fir-example-7fa12.appspot.com",
  messagingSenderId: "573474621585",
  appId: "1:573474621585:web:dcbdcefb6164ce53dd9730",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider);
};
export const signOutOfGoogle = async () => signOut(auth);
//console.log("finished init ", response);
