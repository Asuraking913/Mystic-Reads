import axios from "axios";

const Axios = axios.create({
    headers : {
        "Content-Type" : "application/json", 
        'Content-Encoding' : 'utf-8'
    },  
})

const refresh_token = async () => {
    try {
        const response = await axios.get("/api/refresh_token", {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('refresh_token')}`
            }, 
        })
        const access_token = response.data['access_token']
        const refresh_token = response.data['refresh_token']

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

    }

    catch(error) {
        console.log("Unable to get refresh tokken", error)
        return
    }
}

Axios.interceptors.request.use(config => {
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

Axios.interceptors.response.use(response => {
        return response; 
},  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; 
        try {
            const newAccesstoken = await refresh_token();
            console.log(newAccesstoken)
            originalRequest.headers.Authorization = `Bearer ${newAccesstoken}`
            return Axios(originalRequest)
        }

        catch (error) {
            return Promise.reject(error)
        }
    }
    return Promise.reject(error)

}

)

export default Axios