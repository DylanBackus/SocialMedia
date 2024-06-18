// LogIn.jsx
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { setUser } = useUser();
    const navigate = useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                console.log(user); // Debugging: gebruiker wordt getoond in console
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <div className="signUpbg">
            <div className="signUpContainer">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit} className="signInForm">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="inputField"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="inputField"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LogIn;
