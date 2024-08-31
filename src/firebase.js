// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBb70M84epYJQs4eQwCZuIWy-WQXHa_iLA",
  authDomain: "charitydonation-dd7ea.firebaseapp.com",
  projectId: "charitydonation-dd7ea",
  storageBucket: "charitydonation-dd7ea.appspot.com",
  messagingSenderId: "456873064677",
  appId: "1:456873064677:web:391e645b294a72da7b3c0c",
  measurementId: "G-JFFVLQYE7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Firebase Storage

export { db, storage }; // Export Firestore and Storage instances for use in other files
