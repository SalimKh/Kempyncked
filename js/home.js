// Import firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

//Check if user is already loged
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector("body").setAttribute("class", "bgAlien2");
    let tabToShows = document.querySelectorAll(".needAuth");
    tabToShows.forEach((element) => {
      element.removeAttribute("hidden");
    });
  } else {
    let tabToShows = document.querySelectorAll(".authTab");
    tabToShows.forEach((element) => {
      element.removeAttribute("hidden");
    });
  }
});

//Get log out button
const logOutBtn = document.querySelector("#logOut");

logOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      // An error happened.
    });
});
