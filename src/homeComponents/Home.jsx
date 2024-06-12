import React from "react";
import HomeLeftSideComponent from "./HomeLeftSideComponent";
import HomeMidComponent from "./HomeMidComponent";
import HomeRightSideComponent from "./HomeRightSideComponent";
import { db, auth } from '../firebase/FirebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
const Home = () => {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/auth.user
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     window.location = "signup"
  //   }
  // });
  return (
    <>
      <div className="home-container">
        <HomeLeftSideComponent />
        <HomeMidComponent />
        <HomeRightSideComponent/>
      </div>
    </>
  )
}
export default Home