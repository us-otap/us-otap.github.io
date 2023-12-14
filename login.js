import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { writeUserData } from "./database.js";
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';
import  { firebaseConfig, db } from "./constants.js";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

document.getElementById("login").addEventListener("click", function() {
  const email =  document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location.href = 'user_dashboard.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage);
  });
});



/*document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
        console.log('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
      }).catch((error) => {
        console.log('An error happened.');
      });		  		  
});*/