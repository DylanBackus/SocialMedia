import React from "react";
import CreatePost from "../CreatePost";
import Posts from "../Posts";

const HomeMidComponent = () => {
  const username = "exampleUser"; // Replace this with actual logic to get the current username

  return (
    <div className="home-mid-component">
      <div className="create-post-section">
        <CreatePost username={username} />
      </div>
      <div className="posts-section">
        <Posts />
      </div>
    </div>
  );
};

export default HomeMidComponent;
