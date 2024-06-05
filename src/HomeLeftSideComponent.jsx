import React, { useEffect } from "react";
import db from './firebase/FirebaseConfig'
import { doc, getDocFromCache, getDoc } from "firebase/firestore";
import { useState } from "react";


 
 
const HomeLeftSideComponent = () => {


  const [userData, setUserData] = useState(null);
  const userID = ""
  const docRef = doc(db, "users", "Q3LricYjI89T1CmqlBoG");
  //const usersCollectionRef = collection(db, "users");

  const getData = async () => {
    const data = await getDoc(docRef);
    if (data.exists()) {
      setUserData(data.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("empty");
    }
  }

  getData();

    return (
        <>
            <div className="main-left">
                <div className="profile-area">
                  <img src="images/placeholder.png" className="pfp"/> 
                  <p className="home-username">
                  {userData && userData.username}
                  </p>
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