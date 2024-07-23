import React from 'react'
import axios from 'axios'

const Axios = axios.create(
    {
        // withCredentials : true,
        // headers : 'access_token', 
        // xsrfHeaderName: 'access_token',
        // xsrfCookieName : 'access_token'
        // withCredentials : true,
        'headers' : {
            Accept : 'access_token',
            Authorization : 'Bearer <JWT>'
        }
    }
)


export default Axios