import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/FirebaseConfig";
import { useState } from "react";
import { ref, set } from "firebase/database";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUpFunc = () => {
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const mail = userCredential.email;
        const uid = userCredential.uid;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }

  return (
    <>
      <div className="signUpbg">
        <div className="signUpContainer">
          <h2>Sign Up</h2>
          <form onSubmit={() => SignUpFunc()} className="signInForm">
            <label htmlFor="html">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
