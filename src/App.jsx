// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './homeComponents/Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { UserProvider } from './UserContext';

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
