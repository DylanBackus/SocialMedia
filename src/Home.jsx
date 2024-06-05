import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import HomeLeftSideComponent from "./HomeLeftSideComponent";
import HomeMidComponent from "./HomeMidComponent";
import HomeRightSideComponent from "./HomeRightSideComponent";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzN2L4OzM9VilluD7OzYNlUp9BaIU2GvI",
  authDomain: "social-media-omgeving.firebaseapp.com",
  projectId: "social-media-omgeving",
  storageBucket: "social-media-omgeving.appspot.com",
  messagingSenderId: "860845337240",
  appId: "1:860845337240:web:003c54feaed1e96d12beed",
  measurementId: "G-G0LFTHFN1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Home = () => {

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