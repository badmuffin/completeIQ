import React from 'react';
import { Navigate } from "react-router-dom";
import {useAuth} from "./AuthContext";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default ProtectedRoute;