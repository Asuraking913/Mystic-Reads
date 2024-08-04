import AuthContext from "./fetchUserPic";
import { useState, useEffect } from "react";
import Axios913 from "./Axios913";

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

    const handleFetch = async () => {

        try {
        const response = await Axios913.get('/api/profiles_info')

        if (response.status == 200) {
            console.log(response.data)
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
            console.log("Error", err)

            if (err.response.status === 401) {
                console.log('Error Occured here')
                setLoading(false)
                setAuth(true)
                return
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
            email, setEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider