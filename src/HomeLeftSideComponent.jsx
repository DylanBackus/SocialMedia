import React from "react";
import db from './firebase/FirebaseConfig'
import { doc, getDocFromCache, getDoc } from "firebase/firestore";


const docRef = doc(db, "users", "Q3LricYjI89T1CmqlBoG",);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  console.log(docSnap.data(1))
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
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