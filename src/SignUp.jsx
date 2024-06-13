import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const writeUserData = async (mail, uid) => {
            await setDoc(doc(db, "users", uid), {
                email: mail,
                name: ""
            });
            console.log("Data saved successfully!");
    };

    const SignUpFunc = (event) => {
        event.preventDefault(); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            const mail = user.email;
            const uid = user.uid;
            writeUserData(mail, uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };

    return (
        <>
            <div className="signUpbg">
                <div className="signUpContainer">
                    <h2>Sign Up</h2>
                    <form onSubmit={SignUpFunc} className="signInForm">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inputField"
                        />
                        <label htmlFor="username">Username</label>
                        <input  
                            type="text"
                            id="username"
                            className="inputField"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputField"
                        />
                        <button type="submit" className="submitButton">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
