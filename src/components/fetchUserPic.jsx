import React, { createContext, useState } from "react"
import Axios1 from "./Axios913"
import { useEffect } from "react"
import user from "../assets/user.svg"
import Axios913 from "./Axios913"
import { useLocation } from "react-router-dom"


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

    useEffect(() => {   
           const handleFetch = async () => {
               const response = await Axios913.get('/api/profiles_info').then(response => {
                if (response.status == 200) {
                if(auth == false) {
                setBio(response.data.data.bio)
                setBirthday(response.data.data.birthday)
                setGender(response.data.data.gender)
                setJoined(response.data.data.joined)
                setEmail(response.data.data.userEmail)
                setLocation(response.data.data.location)
                setUserId(response.data.data.userId)
                setUserName(response.data.data.userName)
                console.log(response.data.data.bio, 'szdif')}
            }
               }).catch((err) => console.log('Error', err))
           }
           if (!auth)
            handleFetch()

    },  [auth])

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
