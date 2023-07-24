// Import firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgKvx9hAVea8hikYverarrSfhZ7jb1Byk",
  authDomain: "kempynck-477d0.firebaseapp.com",
  projectId: "kempynck-477d0",
  storageBucket: "kempynck-477d0.appspot.com",
  messagingSenderId: "634730555587",
  appId: "1:634730555587:web:510d518d8495ef19515a76",
  measurementId: "G-6G34DGR0WF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Get Auth
const auth = getAuth();
//Get form
const form = document.querySelector("form");

//Check if user is already loged
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.location.href = "home.html";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.location.href = "home.html";
    })
    .catch((error) => {
      document.querySelector(".wrongInfo").removeAttribute("hidden");
    });
});

document.querySelector(".psw").addEventListener("click", (event) => {
  alert("Dommage je m'en bas les couilles.");
});
