import React from 'react';
import { Navigate } from "react-router-dom";
import {useAuth} from "./AuthContext";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth();
    console.log("Authentication: ", isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;