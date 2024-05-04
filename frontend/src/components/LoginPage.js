import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function LoginPage() {
    const [isSignup, setIsSignup] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignup ? 'http://localhost:3500/register' : 'http://localhost:3500/login';
        try {
            const response = await axios.post(endpoint, credentials);
            setSuccessMessage(response.data.message || 'Operation successful.');  // Assuming response.data.message exists
            setErrorMessage('');
        } catch (error) {
            console.error('Request failed:', error);
            setErrorMessage(error.response?.data?.message || "An unknown error occurred");
            setSuccessMessage('');
        }
    };

    return (
        <div className="login-container">
            <h1>{isSignup ? 'Register' : 'Login'}</h1>
            {successMessage && <p className="success">{successMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={credentials.username} placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" value={credentials.password} placeholder="Password" onChange={handleChange} />
                <button type="submit">{isSignup ? 'Register' : 'Login'}</button>
                <button type="button" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? 'Switch to Login' : 'Switch to Register'}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
