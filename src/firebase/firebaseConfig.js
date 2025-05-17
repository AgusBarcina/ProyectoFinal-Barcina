// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClp35UvAqoGQRMK2rSmk29Yrju3qvQiBs",
  authDomain: "productos-71948.firebaseapp.com",
  databaseURL: "https://productos-71948-default-rtdb.firebaseio.com",
  projectId: "productos-71948",
  storageBucket: "productos-71948.firebasestorage.app",
  messagingSenderId: "751454832697",
  appId: "1:751454832697:web:6d6c31215569c70917a5e8",
  measurementId: "G-07PVJTD8T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);