import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from './fetchUserPic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall, faBasketball } from '@fortawesome/free-solid-svg-icons'

const PrivateRoutes = () => {

    const {auth : authContext, loading} = useContext(AuthContext)

    if (!authContext & !loading) {
        return (
            <div className='h-screen flex items-center justify-center w-full'>
                <FontAwesomeIcon className='text-[4rem] animate-spin text-[--accent1]' icon={faBaseballBall}/>
            </div>
        )
    }

    return (
        authContext ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes