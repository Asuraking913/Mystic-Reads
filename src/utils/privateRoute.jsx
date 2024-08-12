import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from './fetchUserPic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {

    const {auth : authContext, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    if (!authContext & !loading) {
        useEffect(() => {
            if(!authContext) {
                navigate("/")

            }
            }, [])

        return (
            <div className='h-screen flex items-center justify-center w-full'>
                <FontAwesomeIcon className='text-[4rem] animate-spin text-[--accent1]' icon={faGear}/>
            </div>
        )
    }

    return (
        authContext ? <Outlet /> : <Navigate to={"/login"}/>
    )

}

export default PrivateRoutes