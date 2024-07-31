import React, { createContext, useRef, useState } from "react"
import { useEffect } from "react"
import Axios913 from "./Axios913"


export const userPicContext = createContext()

const AuthContext = createContext({
    auth : null, 
    userId : null, 
    userName: null,
    bio: null,
    location: null,
    joined: null, 
    birthday: null,
    gender: null, 
    email: null, 
    setAuth: () =>{}, 
    setUserId: () =>{},
    setUserName: () =>{},
    setLocation: () =>{},
    setBirthday: () =>{},
    setJoined: () =>{},
    setEmail: () =>{},
    setBio: () =>{},
    setGender: () =>{},
    loading : true

})

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null); 

    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)
    const [bio, setBio]= useState(null)
    const [location, setLocation] = useState(null)
    const [joined, setJoined] = useState(null)
    const [birthday, setBirthday] = useState(null)
    const [gender, setGender] = useState(null)
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {   
           const handleFetch = async () => {
               const response = await Axios913.get('/api/profiles_info').then(response => {
             

                if (response.status == 200) {
                setAuth(true)
                setBio(response.data.data.bio)
                setBirthday(response.data.data.birthday)
                setGender(response.data.data.gender)
                setJoined(response.data.data.joined)
                setEmail(response.data.data.userEmail)
                setLocation(response.data.data.location)
                setUserId(response.data.data.userId)
                setUserName(response.data.data.userName)
                }
               }).catch((err) => console.log('Error', err))
           }
            handleFetch()
           setLoading(false)
    },  [auth])

    console.log(loading)

    return (
        <AuthContext.Provider value={{
            auth, setAuth,
            userId, setUserId,
            userName, setUserName,
            location, setLocation,
            birthday, setBirthday,
            joined, setJoined,
            bio, setBio,
            gender, setGender,
            email, setEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}
