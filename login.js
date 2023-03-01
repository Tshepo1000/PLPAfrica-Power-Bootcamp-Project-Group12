import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCIiJp_pFt3FjowGNhar0WicFSYTJ5efiI",
    authDomain: "management-system-86cc1.firebaseapp.com",
    projectId: "management-system-86cc1",
    storageBucket: "management-system-86cc1.appspot.com",
    messagingSenderId: "61982505734",
    appId: "1:61982505734:web:b6ab25cdd341568a91bc87",
    measurementId: "G-L27E00X4WS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const main = document.getElementById("main");
const createAcct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnbtn = document.getElementById("return-btn");
const signup = document.getElementById("sign-up");

var email, 
    password, 
    signupEmail, 
    signupPassword, 
    confirmSignupEmail, 
    confirmSignupPassword;

createacctbtn.addEventListener("click", () => {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if(signupEmail != confirmSignupEmail){
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignupPassword = confirmSignupPasswordIn.value;
    if(signupPassword != confirmSignupPassword){
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    if(
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmSignupPassword == null
    ){
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    if(isVerified == true){
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(() =>{
        window.alert("Successfully Created Account");
        window.location = "create-task.html";

    })
    .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);

        //window.alert("Error Occurred. Try Again");
    });
}
});

submitButton.addEventListener("click", () => {
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password).then(() => {
        window.alert("Success! Welcome Back.");
        window.location = "./createTask.html";
    }).catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
    });
});

signup.addEventListener("click", () => {
    main.style.display = "none";
    createAcct.style.display = "block";   
});

returnbtn.addEventListener("click", () => {
    createAcct.style.display = "none";
    main.style.display = "block";
});

