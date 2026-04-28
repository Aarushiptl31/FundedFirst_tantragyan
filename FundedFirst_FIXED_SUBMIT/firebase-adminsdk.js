// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsuL_ph582LK8NOJXD2XKWRwhW8XMBOQ",
  authDomain: "fundedfirst-cb894.firebaseapp.com",
  projectId: "fundedfirst-cb894",
  storageBucket: "fundedfirst-cb894.firebasestorage.app",
  messagingSenderId: "643007119298",
  appId: "1:643007119298:web:6d5f2537c4d3f245e4e05b",
  measurementId: "G-Q7N7NDG8RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);