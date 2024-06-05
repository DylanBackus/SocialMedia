import React from "react";
import db from './firebase/FirebaseConfig'
import { doc, getDocFromCache, getDoc } from "firebase/firestore";
import { useState } from "react";


const fetchData = async () => {
  const [userData, setUserData] = useState();

  const docRef = doc(db, "users", "Q3LricYjI89T1CmqlBoG",);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setUserData(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
fetchData();

const HomeLeftSideComponent = () => {

    return (
        <>
            <div className="main-left">
                <div className="profile-area">
                  <img src="images/placeholder.png" className="pfp"/> 
                  <div className="row"> 
                    <div className="profile-icon">
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size2"/>
                        </a>
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size2"/>
                        </a>
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size2"/>
                        </a>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}
export default HomeLeftSideComponent