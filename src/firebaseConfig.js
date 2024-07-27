// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ4L3mZnAmuVgy1DkZ7nKI5lsz5rNFfiQ",
  authDomain: "student-management-syste-659e9.firebaseapp.com",
  projectId: "student-management-syste-659e9",
  storageBucket: "student-management-syste-659e9.appspot.com",
  messagingSenderId: "971255789562",
  appId: "1:971255789562:web:418cd516ece6123a9e5643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize Firestore
const db = getFirestore(app)

export {db} 