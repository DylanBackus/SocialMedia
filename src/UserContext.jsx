// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext(null);

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
    
//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => useContext(UserContext);
// src/UserContext.jsx
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(' test'
  );

  const setNewUser = ({item}) => {
    setUser(item);
  }

  return (
    <UserContext.Provider value={{ user, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);

}

export {useUserContext, UserProvider};

