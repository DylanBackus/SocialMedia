import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { useState } from "react";

const LogIn = () => {

    return (
        <>
            <div className="signUpbg">
                <div className="signUpContainer">
                    <h2>Sign Up</h2>
                    <form action="login" className="signInForm">
                        <label htmlFor="html">Email address</label>
                        <input
                            type="email"
                            
                            className="inputField"
                        />
                        <label htmlFor="html">Username</label>
                        <input
                            type="text"
                            className="inputField"
                        />
                        <label htmlFor="html">password</label>
                        <input
                            type="pass"
                
                            className="inputField"
                        />
                        <button type="submit">
                            sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default LogIn;
