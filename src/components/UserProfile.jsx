import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Food Preferences: {user.foodPreferences}</p>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default UserProfile;