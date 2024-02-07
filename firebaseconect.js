import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAXfA2ZIeCoB8nHZ7F_ceP_gxCTb2vnFPw",
    authDomain: "login-production-f1404.firebaseapp.com",
    databaseURL: "https://login-production-f1404-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "login-production-f1404",
    storageBucket: "login-production-f1404.appspot.com",
    messagingSenderId: "113980090667",
    appId: "1:113980090667:web:ef3f392973b9242380bd6e",
    measurementId: "G-KDHKEQ6F3C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
  register(email, username, password) {
    createUserWithEmailAndPassword(auth, email, username, password)
      .then((_) => {
        window.location.href = "login.html";
        // Mostrar alerta de registro exitoso
        alert("Success. Let's show you the real truth...");
      })
      .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error during Signup " + error.message);
      });
  }

  authenticate(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((_) => {
        window.location.href = "index.html";
        // Mostrar alerta de inicio de sesión exitoso
        alert("Welcome back...");
      })
      .catch((error) => {
        console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Oops, something happened " + error.message);
      });
  }

  signOut() {
    signOut(auth)
      .then((_) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
