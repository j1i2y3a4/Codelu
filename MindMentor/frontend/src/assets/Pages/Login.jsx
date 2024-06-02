import React, { useState } from 'react';
import '../Components/CSS/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    onLogin(username);
                } else {
                    console.log('Login failed:', data.message);
                }
            } else {
                console.error('Failed to login:', response.statusText);
            }
        } catch (error) {
            console.error('Failed to login:', error.message);
        }
    };


    return (
        <div className="login">
            <div className="login-card">
                <h1>MIND MENTOR</h1>
                <h2>LOGIN</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;