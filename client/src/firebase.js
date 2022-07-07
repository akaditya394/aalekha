// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEi2xCpAvblcEJMFqtCEBA3o5DZ5m2tcs",
  authDomain: "aalekha-eba7a.firebaseapp.com",
  projectId: "aalekha-eba7a",
  storageBucket: "aalekha-eba7a.appspot.com",
  messagingSenderId: "957922439024",
  appId: "1:957922439024:web:4e3f1188683a03250129b5",
  measurementId: "G-CWCEF4R3F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();
export {auth, provider, signOut};
