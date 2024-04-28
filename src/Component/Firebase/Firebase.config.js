// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLKsnnX7DCzoPQmw68Ah0F-3O4gnJpbBE",
  authDomain: "assignment-project-8fa27.firebaseapp.com",
  projectId: "assignment-project-8fa27",
  storageBucket: "assignment-project-8fa27.appspot.com",
  messagingSenderId: "447872249846",
  appId: "1:447872249846:web:61a1139cf6f35d4685e1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;