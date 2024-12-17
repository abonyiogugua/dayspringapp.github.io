
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuqKL0LLBAUPRx6msV9eX_dS32-brLuko",
    authDomain: "dayspring-live-app.firebaseapp.com",
    projectId: "dayspring-live-app",
    storageBucket: "dayspring-live-app.firebasestorage.app",
    messagingSenderId: "838426761447",
    appId: "1:838426761447:web:6983d3be3ccd51d763aa42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        //signup
        const user = userCredential.user;
        alert("login successful")
        window.location.href = "/src/public/home.html";
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

})

//user function===============================
