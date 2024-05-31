// signin.js
import { auth, db, onAuthStateChanged } from "./firebase-init.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {
  doc,
  setDoc,
  query,
  where,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Get form
const form = document.querySelector("form");

let isCreation = false;

async function registerUsername(displayName, id) {
  try {
    await setDoc(doc(db, "accounts", id), {
      displayName: displayName,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (isCreation) {
      let displayName = document.querySelector("#username").value;
      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then(() => {
          registerUsername(displayName, user.uid).then(() => {
            document.location.href = "home.html";
          });
        })
        .catch((error) => {
          console.error("Profile update error", error);
        });
    } else {
      document.location.href = "home.html";
    }
  }
});

async function checkUsername(username) {
  let queryDisplayName = query(
    collection(db, "accounts"),
    where("displayName", "==", username)
  );
  let querySnapshot = await getDocs(queryDisplayName);
  return querySnapshot.size < 1;
}

function createAccount(email, password) {
  isCreation = true;
  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    console.error("Error creating user", error);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usernameField = document.querySelector("#username");
  let username = usernameField.value;
  let email = document.querySelector("#email").value;
  let passwordField = document.querySelector("#password");
  let password = passwordField.value;
  let passwordConfirm = document.querySelector("#passwordConfirm").value;

  if (password === passwordConfirm && password.length > 6) {
    passwordField.setCustomValidity("");
  } else if (password !== passwordConfirm) {
    passwordField.setCustomValidity(
      "Les deux mots de passe ne sont pas identiques !"
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
