import React from 'react';
import { Route, useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    let location = useLocation();

    if(loading){
        return <p>Loading</p>
    }
    if (user.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;