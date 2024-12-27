import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const register = async (userData) => {
        // Implement registration logic (e.g., API call)
        console.log('Registering user:', userData);
    };

    return (
        <AuthContext.Provider value={{ register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};