import axios from "axios";

const Axios913 = axios.create({

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
    try {
        await refresh_token()
        return Axios913(originalRequest)
    }
    catch (err) {
        // console.log('Unable To get New Access Tokens')
    }
    }
}
)

export default Axios913