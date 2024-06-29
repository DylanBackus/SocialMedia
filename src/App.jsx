// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './homeComponents/Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Profile from './Profile';
import { UserProvider } from './UserContext';
import CreatePost from './CreatePost';
import Posts from './Posts';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/create-post' element={<><CreatePost /><Posts /></>} /> ff test voor die glitch */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
