import React from "react";
import HomeLeftSideComponent from "./homeComponents/HomeLeftSideComponent";
import { db, auth } from './firebase/FirebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
        } else {
            window.location = "signup"
        }
    });
    return (
        <>
        </>
    )
}
export default Profile