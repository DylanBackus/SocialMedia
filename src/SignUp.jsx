import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth, db, storage } from "./firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytes } from "firebase/storage";


const SignUp = () => {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [profilePic, setProfilePic] = useState("")
    const writeUserData = async (mail, uid, user, pfp) => {
        console.log("executing func...")
            await setDoc(doc(db, "users", uid), {
                email: mail,
                name: user,
                profilePicture: profilePic,

            });
            console.log("Data saved successfully!");
    };
    const handleChange = (event) => {
        setProfilePic(event.target.files[0])
    }
    const SignUpFunc = (event) => {
        event.preventDefault(); 
        console.log(profilePic)

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("updating prof..")
            updateProfile(user, {
                displayName: username,
                photoURL: profilePic
              })
              console.log("done")
            const dname = username;
            const mail = user.email;
            const uid = user.uid;
            writeUserData(mail, uid, dname, pfp);
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
                        <input type="file" onChange={handleChange}/>
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
