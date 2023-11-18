import React, { useContext } from 'react'
import { AuthContent } from '../../AuthProvider/AuthProvider'
import Loader from './Loader'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const pathname= useLocation()
    const {user,loading} = useContext(AuthContent)

    if (loading) {
        return <Loader/>
    }
    if (user==null){
        return <Navigate state={pathname} to="/login"/>
    }
    return children
}

export default PrivateRoute
