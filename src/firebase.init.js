// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYUqEQ9nncQWcHsyRQ4SGupdDm5b-o1HE",
  authDomain: "router-firebase-integrat-c0029.firebaseapp.com",
  projectId: "router-firebase-integrat-c0029",
  storageBucket: "router-firebase-integrat-c0029.appspot.com",
  messagingSenderId: "326664441043",
  appId: "1:326664441043:web:440837c46357acdef79826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;