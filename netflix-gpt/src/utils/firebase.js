// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2woxwXa-QWYvMFaKjpYwP6lnvGirxAGU",
  authDomain: "netflix-gpt-d4.firebaseapp.com",
  projectId: "netflix-gpt-d4",
  storageBucket: "netflix-gpt-d4.firebasestorage.app",
  messagingSenderId: "104253745070",
  appId: "1:104253745070:web:b18f4e427ede4ea5814a3f",
  measurementId: "G-1P24487L5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);