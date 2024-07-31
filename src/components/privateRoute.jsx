import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './fetchUserPic'

const PrivateRoutes = () => {

    const {auth : authContext} = useContext(AuthContext)

    let auth = {token : authContext}

    return (
        auth.token ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes