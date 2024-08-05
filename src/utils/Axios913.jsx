import axios from "axios";

const Axios913 = axios.create({
    withCredentials : true,
    baseURL : "https://mystic-reads-api.vercel.app"
})

const refresh_token = async () => {
    try {
        const response = await Axios913.get("/api/refresh_token", {
            withCredentials : true, 
            baseURL : "https://mystic-reads-api.vercel.app"
        })
        console.log('Retrieved new tokens')
    }

    catch(err) {
        // console.log('Unable To Get New Token', err)
    }
}

Axios913.interceptors.request.use(config => {
    config.withCredentials=true
    config.baseURL="https://mystic-reads-api.vercel.app"
    return config
})

Axios913.interceptors.response.use(response => {
    response.config.withCredentials=true
    response.config.baseURL="https://mystic-reads-api.vercel.app"
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