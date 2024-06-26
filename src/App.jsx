// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { createContext, useState } from 'react';
import Home from './homeComponents/Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { UserProvider } from './UserContext';

// const MyContext = createContext();

// const MyProvider = ({ children }) => {
//   const [state, setState] = useState("Initial State");

//   return (
//     <MyContext.Provider value={{ state, setState }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

function App() {
  return (

      <UserProvider>
        <div className="app">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </div>
      </UserProvider>

  );
}

export default App;

