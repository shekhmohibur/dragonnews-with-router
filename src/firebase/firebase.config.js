// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf0T9nTmWpSqL-h9hMySFUEwR2KHOmyTU",
  authDomain: "dragonnews01.firebaseapp.com",
  projectId: "dragonnews01",
  storageBucket: "dragonnews01.firebasestorage.app",
  messagingSenderId: "35764102372",
  appId: "1:35764102372:web:f9241c3a8933ae707838f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;