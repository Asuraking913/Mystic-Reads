import axios from "axios";

const token = localStorage.getItem('token');

const Axios = axios.create({
    headers : {
        Authorization : `Bearer ${token}`,
        "Content-Type" : "application/json", 
        'Content-Encoding' : 'utf-8'
    },  
    // baseURL : "http://127.0.0.1:5000"
})

export default Axios