// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG5jv4eZOkhF3DvadIobvruZkToljpUzg",
  authDomain: "movixgpt.firebaseapp.com",
  projectId: "movixgpt",
  storageBucket: "movixgpt.appspot.com",
  messagingSenderId: "549684190189",
  appId: "1:549684190189:web:51aeaf36e21b2ead42e5e4",
  measurementId: "G-4GBW1378GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

