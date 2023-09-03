import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { writeUserData } from "./database.js";
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyCqdRFXYfChIyW0Mhu-iE9hxhp_Fe2VgdU",
  authDomain: "otap-website-auth.firebaseapp.com",
  projectId: "otap-website-auth",
  storageBucket: "otap-website-auth.appspot.com",
  messagingSenderId: "889589100403",
  appId: "1:889589100403:web:1f171ee5454fb2cf831f06",
  measurementId: "G-7CRCM9B89S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase(app);

document.getElementById("register").addEventListener("click", function() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email =  document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const volunteerHours = 0;
    const volunteerHoursId = "volunteerHours";

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            volunteerHours: volunteerHours,
            password: password,
        };

        set(ref(db, 'users/' + user.uid), userData); 
        const volunteerHoursElement = document.getElementById('volunteerHours');
    if (volunteerHoursElement) {
        volunteerHoursElement.innerText = `${volunteerHoursId.charAt(0).toUpperCase() + volunteerHoursId.slice(1)}: ${volunteerHours} hours`;
    } else {
        console.error("Element with id 'volunteerHours' not found in the DOM.");
    }
        document.getElementById("first-name").value = '';
        document.getElementById("last-name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        alert(user.email + " registered successfully");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(error);
    });
});



document.getElementById("login").addEventListener("click", function() {
    const email =  document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.href = 'user_dashboard.html';
z    })
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