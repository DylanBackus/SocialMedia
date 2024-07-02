import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { db } from './firebase/FirebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const q = query(collection(db, 'post/post/posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  const handleUsernameClick = (username) => {
    navigate(`/profile/${username}`);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <div className="username" onClick={() => handleUsernameClick(post.username)}>
              @{post.username}
            </div>
          </div>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}
          <div className="post-text">{post.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
