import React from "react";

const HomeLeftSideComponent = () => {
    
    return(
        <>
        <div className="home-container">
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
            <div className="mid-home"></div>
            <div className="search-area"></div>
        </div>
        </>
    )
}
export default HomeLeftSideComponent