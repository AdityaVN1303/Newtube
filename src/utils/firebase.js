// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDINfe5rZAeM7zgtU6xk_6Gr8FQuQVIlNQ",
  authDomain: "newtube-48114.firebaseapp.com",
  projectId: "newtube-48114",
  storageBucket: "newtube-48114.appspot.com",
  messagingSenderId: "182729213499",
  appId: "1:182729213499:web:5a7d7217f550a473abfe1e",
  measurementId: "G-NF7PZE49FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);