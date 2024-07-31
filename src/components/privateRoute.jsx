import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './fetchUserPic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall, faBasketball } from '@fortawesome/free-solid-svg-icons'

const PrivateRoutes = () => {

    const {auth : authContext, loading} = useContext(AuthContext)

         if (!loading && !authContext) {
            console.log('Event holding')
            return <div className='h-screen w-full flex items-center justify-center bg-[#00000011]'>

                <FontAwesomeIcon icon={faBasketball} className='text-[4rem] text-[--accent1] animate-spin'/>
            </div>
         }
    return (
        authContext ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes