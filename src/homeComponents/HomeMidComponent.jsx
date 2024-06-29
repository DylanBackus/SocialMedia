import React from 'react';
import CreatePost from '../CreatePost';
import Posts from '../Posts';

const HomeMidComponent = () => {
  return (
    <div className="home-mid-component">
      <div className="create-post-section">
        <CreatePost />
      </div>
      <div className="posts-section">
        <Posts />
      </div>
    </div>
  );
};

export default HomeMidComponent;
