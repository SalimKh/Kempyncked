// Import firebase SDKs
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from './firebase-init.js';

// Get form
const form = document.querySelector("form");

// Check if user is already logged in
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
