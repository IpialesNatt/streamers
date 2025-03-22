// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ZcAObvXzq7X-HZtCuaYvJTtDlky2h2c",
  authDomain: "peskapp-9c007.firebaseapp.com",
  databaseURL: "https://peskapp-9c007-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "peskapp-9c007",
  storageBucket: "peskapp-9c007.firebasestorage.app",
  messagingSenderId: "623641511150",
  appId: "1:623641511150:web:71915f8ba5e5deb2c3dfff",
  measurementId: "G-X4LPZZR3T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;