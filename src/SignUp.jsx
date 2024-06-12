import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const SignUpFunc = () => {
        createUserWithEmailAndPassword(auth, email, username, password)
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

  return (
    <>
      <div className="signUpbg">
        <div className="signUpContainer">
          <h2>Sign Up</h2>
          <form onSubmit={() => SignUpFunc()} action="login" className="signInForm">
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
            <button type="submit">
              sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
