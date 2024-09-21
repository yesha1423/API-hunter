import React, { createContext, useState } from "react";

const authData = {
    isAuth: false,
    token: null,
};

export const AuthContext = createContext(); 

export function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState(authData);

    const loginUser = (token) => {
        setAuthState({ isAuth: true, token });
    };

    const logoutUser = () => {
        setAuthState({ isAuth: false, token: null });
    };

    return (
        <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}
