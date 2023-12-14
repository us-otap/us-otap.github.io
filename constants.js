import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';


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
const db = getDatabase(app);
export { firebaseConfig, db };
