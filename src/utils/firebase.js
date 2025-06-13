// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClN7qzDrKmLdouVY5w84CB-ZNv6LUiTEM",
  authDomain: "netflixgpt-8496c.firebaseapp.com",
  projectId: "netflixgpt-8496c",
  storageBucket: "netflixgpt-8496c.appspot.com", // fixed typo: should be .appspot.com
  messagingSenderId: "1081754855080",
  appId: "1:1081754855080:web:15c99393176027114e049d",
  measurementId: "G-B94E7PZYQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();