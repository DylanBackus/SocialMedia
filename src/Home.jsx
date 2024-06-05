import React from "react";
import HomeLeftSideComponent from "./HomeLeftSideComponent";
import HomeMidComponent from "./HomeMidComponent";
import HomeRightSideComponent from "./HomeRightSideComponent";

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