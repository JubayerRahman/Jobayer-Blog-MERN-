import React from 'react'
import { useContext } from 'react'
import { AuthContent } from '../../AuthProvider/AuthProvider'
import Loader from '../PrivateRoute/Loader'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const {user,loading, isAdmin}=useContext(AuthContent)

    if (loading) {
        return <Loader/>
    }
    if (!isAdmin || isAdmin == null) {
        return <Navigate to="/"/>
    }

  return children
}

export default AdminRoute
