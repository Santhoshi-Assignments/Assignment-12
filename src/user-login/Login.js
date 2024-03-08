import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../user-login/Login.css'

 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
 
    const handleLogin = () => {
        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
        if (registeredUser && username === registeredUser.username && password === registeredUser.password) {
            navigate('/dashboard');
            message.success('login successful! ');
        } else {
            message.error('Invalid username or password');
        }
    };
 
    return (
        <div className="login-container">
            <h2>Login</h2>
            <Form layout="vertical">
                <Form.Item label="Username">
                    <Input
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     addonBefore={<FontAwesomeIcon icon={faUser} className="fa" />}
                     />
                </Form.Item>

                <Form.Item label="Password">
                    <Input 
                    type="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    addonBefore={<FontAwesomeIcon icon={faLock} className="fa" />}
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" onClick={handleLogin}>Sign In</Button>
                </Form.Item>
            </Form>
            <p>
                Not registered? <Link to="/registration">Sign up here</Link>.
            </p>
        </div>
    );
};
 
export default Login;