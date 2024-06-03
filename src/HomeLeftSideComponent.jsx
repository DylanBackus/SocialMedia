import React from "react";
import db from './firebase/FirebaseConfig'
import { doc, getDocFromCache } from "firebase/firestore";


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