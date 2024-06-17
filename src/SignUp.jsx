import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth, db } from "./firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const writeUserData = async (mail, uid, user) => {
        console.log("executing func...")
            await setDoc(doc(db, "users", uid), {
                email: mail,
                name: user
            });
            console.log("Data saved successfully!");
    };

    const SignUpFunc = (event) => {
        event.preventDefault(); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("updating prof..")
            updateProfile(user, {
                displayName: username
              })
              console.log("done")
            const dname = username;
            const mail = user.email;
            const uid = user.uid;
            writeUserData(mail, uid, dname);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
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
                            onChange={(e) => setUsername(e.target.value)}
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
