import AuthContext from "../utils/fetchUserPic";
import { useState, useEffect } from "react";
import Axios913 from "../utils/Axios913";
import { io } from "socket.io-client";

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
    const [loading, setLoading] = useState(false)
    const socket = io("https://mystic-reads.vercel.app", {
        autoConnect : false,
        transports : ['websocket'], 
        cors : {
            origin : 'https://mystic-reads.vercel.app', 
            
        },
        withCredentials : true
    })


    const handleFetch = async () => {
        if (!auth) {

        try {
        const response = await Axios913.get('/api/profiles_info')

        if (response.status == 200) {
            setAuth(true)
            setLoading(true)
            setBio(response.data.data.bio)
            setBirthday(response.data.data.birthday)
            setGender(response.data.data.gender)
            setJoined(response.data.data.joined)
            setEmail(response.data.data.userEmail)
            setLocation(response.data.data.location)
            setUserId(response.data.data.userId)
            setUserName(response.data.data.userName)
            }
        }

        catch (err) {

            if (err.response.status === 401) {
                
                setLoading(false)
                setAuth(false)

                return
            } 

            if (err.response.status === 500) {
                setAuth(false)
                setLoading(false)
            }
        }
    }
    }

    useEffect(() => {  
        
           handleFetch()

    },  [])

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
            email, setEmail, 
            socket
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider