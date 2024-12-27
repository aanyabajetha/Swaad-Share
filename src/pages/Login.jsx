import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(credentials);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl mb-4">Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full mb-4" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 w-full mb-4" />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
        </form>
    );
};

export default Login;
