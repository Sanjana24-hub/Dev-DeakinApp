// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP2cEsBNnIq5-exn1lLNMxBF9IDO1h_Os",
  authDomain: "sanjana-fullstackdevelop.firebaseapp.com",
  projectId: "sanjana-fullstackdevelop",
  storageBucket: "sanjana-fullstackdevelop.appspot.com",
  messagingSenderId: "848898208103",
  appId: "1:848898208103:web:dfc21d6dc672e39ad63fc2",
  measurementId: "G-16PRKYC9GS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

