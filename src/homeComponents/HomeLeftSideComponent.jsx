import React, { useEffect } from "react";
import { db, auth } from '../firebase/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const HomeLeftSideComponent = () => {
  const [userData, setUserData] = useState(null);
  const [userID, setUserID] = useState();
  const docRef = doc(db, "users", "Q3LricYjI89T1CmqlBoG");
  const user = auth.currentUser;
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
  useEffect(() => {
    getData();
  }, []);



  if (user !== null) {
    const uid = user.uid;
    console.log(uid)
  }
  return (
    <>
      <div className="main-left">
        <div className="profile-area">
          <img src="images/placeholder2.png" className="pfp" />
          <p className="home-username">
            @{user && user.uid}
          </p>
          <div className="row">
            <div className="profile-icon">
              <a href="profile" className="max-size">
                <img src="images/user.png" className="max-size2" />
              </a>
              <a href="profile" className="max-size">
                <img src="images/bookmark.png" className="max-size2" />
              </a>
              <a href="profile" className="max-size">
                <img src="images/settings.png" className="max-size2" />
              </a>
            </div>
          </div>
          <div className="friends-area-home">
            <div className="friends-container">

              <div className="friends-left">
                <img src="../images/placeholder2.png" className="pfp-friendslist" />
              </div>
              <div className="friends-right">
                <a href="#" className="friend-button">
                  <p className="friend-name">@{user && user.uid}</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default HomeLeftSideComponent