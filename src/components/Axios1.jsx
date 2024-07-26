import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Axios1 = axios.create({
})

const refresh_token = async () => {
    
    try {
        console.log('refresh_token')
        const response = await axios.get("/api/refresh_token", {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('refresh_token')}`
            }, 
        })
        const access_token = response.data['access_token']
        const refresh_token = response.data['refresh_token']

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

        return access_token

    }

    catch(error) {
        console.log("Unable to get refresh tokken")
        return
    }
}

Axios1.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token'); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}` 
    }

    return config
    },
    error => {
        return Promise.reject(error)
    }

)

Axios1.interceptors.response.use(response => {
        return response; 
},  async error => {
    const originalRequest = error.config;

    console.log(error)
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; 
        try {
            const newAccesstoken = await refresh_token();

            originalRequest.headers.Authorization = `Bearer ${newAccesstoken}`

            return Axios1(originalRequest)
        }

        catch (error) {
            return Promise.reject(error)
        }
    }

    return Promise.reject(error)

}

)

export default Axios1