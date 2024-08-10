import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:5000", {
    autoConnect : false,
    transports : ['websocket'], 
    cors : {
        origin : 'https://127.0.0.1:5000:5173'
    }
})

export default socket