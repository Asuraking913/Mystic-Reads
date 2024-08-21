import axios from "axios";
import { useContext } from "react";
import AuthContext from "./fetchUserPic";

const Axios913 = axios.create({
    withCredentials : true,
    // baseURL : "https://mystic-reads-api.vercel.app"
    baseURL : "https://mystic-reads-api.onrender.com"
})


const refresh_token = async () => {
    try {
        const response = await axios.get("/api/refresh_token", {
            withCredentials : true
        })
        console.log('Retrieved new tokens')
    }

    catch(err) {
        // console.log('Unable To Get New Token', err)
    }
}

Axios913.interceptors.request.use(config => {
    config.withCredentials=true
    return config
})

Axios913.interceptors.response.use(response => {
    response.config.withCredentials=true
    return response
},
    async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
    try {
        await refresh_token()
        return Axios913(originalRequest)
    }
    catch (err) {
        // console.log('Unable To get New Access Tokens')
        console.log(err)
        return Promise.reject(err)
    }
    }

    return Promise.reject(error)
}
)

export default Axios913