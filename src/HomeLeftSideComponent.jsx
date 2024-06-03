import React from "react";

const HomeLeftSideComponent = () => {

    return (
        <>
            <div className="main-left">
                <div className="profile-area">
                  <img src="images/placeholder.png" className="pfp"/> 
                  <div className="row"> 
                    <div className="profile-icon">
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size"/>
                        </a>
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size"/>
                        </a>
                        <a href="profile" className="max-size">
                            <img src="images/user.png"  className="max-size"/>
                        </a>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}
export default HomeLeftSideComponent