// src/Posts.jsx
import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/FirebaseConfig';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {posts.map(({ id, text, imageUrl }) => (
        <div key={id}>
          <p>@user</p>
          {imageUrl && <img src={imageUrl} alt="Post image" />}
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
