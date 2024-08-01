import React from "react"
import { createContext} from "react"


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

})



export default AuthContext
