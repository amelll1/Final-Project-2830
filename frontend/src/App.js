import React, { useState } from 'react';
import axios from 'axios';  // For making HTTP requests
import './App.css';  // Optional stylesheet

function App() {
    const [username, setUsername] = useState('');  // State to store username input
    const [password, setPassword] = useState('');  // State to store password input
    const [errorMessage, setErrorMessage] = useState('');  // State for displaying login errors

    // Function to handle login submission
    const handleLogin = () => {
        axios.post('http://localhost:3500/login', { username, password })  // Replace with correct backend endpoint
            .then(response => {
                console.log('Login successful:', response.data);
                setErrorMessage('');  // Clear any error messages

                // Add logic to redirect or handle successful login, e.g., navigate to a new page or store a token
            })
            .catch(error => {
                console.error('Login failed:', error);
                setErrorMessage('Invalid username or password');  // Update error message
            });
    };

    return (
        <div className="container">
            <h1>Login</h1>

            {errorMessage && <p className="error">{errorMessage}</p>} 

            <form onSubmit={e => { e.preventDefault(); handleLogin(); }}> 
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}  // Update state on input
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}  // Update state on input
                    />
                </div>

                <button type="submit">Login</button> 
            </form>
        </div>
    );
}

export default App;
