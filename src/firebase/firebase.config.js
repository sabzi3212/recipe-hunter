// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5a_vOxFg-7wAvMq9gYohE--W6lNCnkI",
  authDomain: "chef-recipes-ee09f.firebaseapp.com",
  projectId: "chef-recipes-ee09f",
  storageBucket: "chef-recipes-ee09f.appspot.com",
  messagingSenderId: "841741142746",
  appId: "1:841741142746:web:62ffb6fa7937f6ac7833e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;