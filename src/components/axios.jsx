import React from 'react'
import axios from 'axios'

const token = localStorage.getItem('token')

const Axios = axios.create(
    {
        'headers' : {
            Authorization : `Bearer ${token}`
        }
    }
)


export default Axios