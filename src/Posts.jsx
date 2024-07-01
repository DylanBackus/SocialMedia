import React, { useEffect, useState } from 'react';
import { db } from './firebase/FirebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Posts = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <div className="profile-pic-placeholder">@username</div>
          </div>
          {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}
          <div className="post-text">{post.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
