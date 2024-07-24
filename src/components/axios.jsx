import React from 'react'
import axios from 'axios'

const token = localStorage.getItem('token')

const Axios = axios.create(
    {
        baseURL : "http://127.0.0.1:5000",
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
)


export default Axios