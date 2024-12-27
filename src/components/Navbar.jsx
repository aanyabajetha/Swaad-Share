import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/login" className="text-white ml-4">Login</Link>
            <Link to="/register" className="text-white ml-4">Register</Link>
            <Link to="/dashboard" className="text-white ml-4">Dashboard</Link>
        </nav>
    );
};

export default Navbar;
