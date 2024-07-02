import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db, auth } from './firebase/FirebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import HomeLeftSideComponent from "./homeComponents/HomeLeftSideComponent";

const Profile = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'post/post/posts'), where('username', '==', username));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, [username]);

  return (
    <>
      <div className="home-container">
        <HomeLeftSideComponent />
        <div className="home-mid-component">
          <div className="posts-section">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-header">
                  <div className="username">@{post.username}</div>
                </div>
                {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}
                <div className="post-text">{post.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
