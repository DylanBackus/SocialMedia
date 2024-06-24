import React, { useEffect } from "react";
import { db, auth, storage } from '../firebase/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { ref, getDownloadURL } from "firebase/storage";

const HomeLeftSideComponent = () => {
  const [userData, setUserData] = useState(null);
  const [userID, setUserID] = useState();
  const [pfpRef, setPfpRef] = useState();
  const [user, setUser] = useState();
  
  const getImage = () => {
    console.log(storage);
    getDownloadURL(ref(storage, `./files/placeholder.png`))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
  
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
  
      setPfpRef(url);
      console.log(url);
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
  }

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
    
  // const docRef = doc(db, "users", "Q3LricYjI89T1CmqlBoG");
  setUser(auth.currentUser);
  console.log(auth);
    getData();
    getImage();
  }, []);

  const LogOut = async () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  

  return (
    <>
      <div className="main-left">
        <div className="profile-area">
          <button onClick={LogOut}> LOG OUT GANG</button>
          <img src={pfpRef} className="pfp" />
          <p className="home-username">
            @{!user.uid ? '...' : user.uid}
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