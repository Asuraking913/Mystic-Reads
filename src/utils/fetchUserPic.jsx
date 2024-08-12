import React from "react"
import { createContext} from "react"
import { io } from "socket.io-client"


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
    loading : true, 
    setAuth: () =>{}, 
    setUserId: () =>{},
    setUserName: () =>{},
    setLocation: () =>{},
    setBirthday: () =>{},
    setJoined: () =>{},
    setEmail: () =>{},
    setBio: () =>{},
    setGender: () =>{},
    setLoading: () =>{},
    socket : null

})



export default AuthContext
