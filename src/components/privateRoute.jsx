import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from './fetchUserPic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall, faBasketball } from '@fortawesome/free-solid-svg-icons'

const PrivateRoutes = () => {

    const {auth : authContext, loading} = useContext(AuthContext)

    return (
        authContext ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes