import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {token : localStorage.getItem('access_token')}

    return (
        auth.token ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes