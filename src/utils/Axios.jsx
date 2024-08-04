import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
})

const refresh_token = async () => {
    try {
        const response = axios.get("/api/refresh_token", {
            withCredentials : true
        })
        // console.log('Retrieved new tokens')
    }

    catch(err) {
        // console.log('Unable To Get New Token', err)
    }
}

Axios.interceptors.request.use(config => {
    config.withCredentials=true
    return config
})

Axios.interceptors.response.use(response => {
    response.config.withCredentials=true
    return response
},
    async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
    try {
        await refresh_token()
        return Axios(originalRequest)
    }
    catch (err) {
        console.log('Unable To get New Access Tokens')
        return Promise.reject(err)
    }
    }

    return Promise.reject(error)
}
)

export default Axios