// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxtgRillGq3-grgV_6SiEajj_ZGQg1tGY",
  authDomain: "logincrud-cb1e8.firebaseapp.com",
  projectId: "logincrud-cb1e8",
  storageBucket: "logincrud-cb1e8.appspot.com",
  messagingSenderId: "698191489945",
  appId: "1:698191489945:web:2c2b857b15eb1952de4108",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get reference to the database service
const db = getDatabase(app);