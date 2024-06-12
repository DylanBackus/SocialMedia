import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { useState } from "react";
const SignUp = () => {
    const SignUpFunc = async() => {
        const email = document.getElementById("mail").value;
        const password = document.getElementById("password").value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }
    
    return(
        <>
        <div className="signUpbg">
            <div className="signUpContainer">
                <h2>Sign Up</h2>
                <form action="#" className="signInForm">
                    <label htmlFor="html">Email address</label>
                    <input type="email" className="inputField" id="mail"/>
                    <label htmlFor="html">Username</label>
                    <input type="text" className="inputField" id="username"/>
                    <label htmlFor="html">password</label>
                    <input type="pass" className="inputField" id="password"/>
                    <button type="button" onClick={SignUpFunc()} >sign up</button>
                </form>
                
            </div>
        </div>
        </>
    )
}
export default SignUp