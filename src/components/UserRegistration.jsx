import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const UserRegistration = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'donor',
        foodPreferences: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl mb-4">Register</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full mb-4" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 w-full mb-4" />
            <select name="role" onChange={handleChange} className="border p-2 w-full mb-4">
                <option value="donor">Donor</option>
                <option value="recipient">Recipient</option>
                <option value="volunteer">Volunteer</option>
                <option value="admin">Admin</option>
            </select>
            <input type="text" name="foodPreferences" placeholder="Food Preferences" onChange={handleChange} className="border p-2 w-full mb-4" />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
        </form>
    );
};

export default UserRegistration;