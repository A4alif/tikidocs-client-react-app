import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useIsAdmin from '../hooks/useIsAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isLoading] = useIsAdmin();
    const location = useLocation();

    if(loading || isLoading){
        return <div> <LoadingSpinner /> </div>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to={'/'} state={location.pathname} />
}

export default AdminRoute