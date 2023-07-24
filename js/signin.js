// Import firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  query,
  where,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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
//Initialize Db
const db = getFirestore(app);
//Get form
const form = document.querySelector("form");

//Check if user is already loged
onAuthStateChanged(auth, (user) => {
  if (user) {
    //document.location.href = "home.html";
  }
});

async function registerUsername(displayName, id) {
  try {
    await setDoc(doc(db, "accounts", id), {
      displayName: displayName,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function checkUsername(username) {
  let queryDisplayName = query(
    collection(db, "accounts"),
    where("displayName", "==", username)
  );
  let querySnapshot = await getDocs(queryDisplayName);
  return querySnapshot.size < 1;
}

function createAccount(email, password) {
  let displayName = document.querySelector("#username").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then(() => {
          //document.location.href = "home.html";
        })
        .catch((error) => {});
      registerUsername(displayName, userCredential.user.uid);
    })
    .catch((error) => {});
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usernameField = document.querySelector("#username");
  let username = usernameField.value;
  let email = document.querySelector("#email").value;
  let passwordField = document.querySelector("#password");
  let password = passwordField.value;
  let passwordConfirm = document.querySelector("#passwordConfirm").value;

  if (password == passwordConfirm && password.length > 6) {
    passwordField.setCustomValidity("");
  } else if (password != passwordConfirm) {
    passwordField.setCustomValidity(
      "Les deux mots de passes ne sont pas identiques !"
    );
  } else {
    passwordField.setCustomValidity(
      "Le mot de passe doit être supérieur à 6 caractères"
    );
  }

  if (passwordField.reportValidity()) {
    checkUsername(username).then((result) => {
      if (result) {
        createAccount(email, password);
      } else {
        usernameField.setCustomValidity(
          "Ce nom d'utilisateur n'est pas disponible"
        );
      }
    });
  }
});
