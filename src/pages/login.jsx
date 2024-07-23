import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from "../assets/google.svg"
import svg from "../assets/svg1.svg"
import axios from 'axios'

function Login() {

    const [userData, setUserData] = useState("")
    const [userPass, setUserpass] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            userName : userData, 
            userPass : userPass
        }

        if (data['userName'].length <= 5) {
            setError("Username must be more than 5 characters")
            setInterval(() => (
                setError("")
            ), [4000])
            return
        }

        if (data['userPass'].length <= 5) {
            setError("Password must be more than 5 characters")
            setInterval(() => (
                setError("")
            ), [4000])
            return
        }

        try {
        const response = await axios.post("/api/auth/login", data).then(response => {
            if (response.status == 200) {
                console.log(response.data['data'])
                localStorage.setItem('userName', response.data['data']['userName'] )
                localStorage.setItem('userEmail', response.data['data']['userEmail'], )
                localStorage.setItem( 'member', response.data['data']['joined'])
                localStorage.setItem('userId', response.data['data']['userId'])
                localStorage.setItem('gender', response.data['data']['gender'])
                window.location.href = "/"
            }
        })
    }

    catch(error) {
        if (error.response.status == 400)
        setError(error.response.data['message'])
    }
}

  return (
   <article className='sm:h-full h-screen flex items-center p-[2em] px-[1em] sm:px-[10em]'>
     <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} className='absolute top-[1em] left-[1em] text-3xl text-[--accent] hover:scale-125 duration-[0.5s]'/>
      </Link>
    <section className='bg-[#c16b63af] hidden sm:flex flex-col items-center justify-center rounded-l-[1em] h-[90vh] w-full'>
            <div className='mb-[1em] w-full flex justify-center items-center py-[0em]'>
            <img src={svg} className='w-[350px] ml-[2em]' alt="" />
        </div>
        <div className='text-center px-[5em] flex flex-col gap-[.5em]'>
            <h2 className='audio text-2xl font-bold text-[white]'>Read More, Enjoy More</h2>
            <p className='roboto text-[--accent1] text italic text-[1rem]'>Log in and get access to all our features with maximum reading experience</p>
        </div>
    </section>
    <section className='bg-[#ffffffea] flex-col gap-[.5em] rounded-[1em] sm:rounded-l-[0em] sm:h-[90vh] w-full sm:w-[80%] flex items-center justify-center sm:px-0 px-[1em] sm:py-0 py-[2em]'>
        <h1 className='text-3xl audio text-[#c16b63af] mb-[.5em]'>Mystic<span className='text-[--accent1]'>Reads</span></h1>
        {error && <p className='text-center text-[0.9rem] text-[--accent1] animate-bounce'>{error}</p>}

        <form onSubmit={handleSubmit} className='flex flex-col gap-[.7em]'>
            <p className=''>
                <label className='text-[1rem] text-[--accent1]' htmlFor="username/email">Username or email</label>
                <input onChange={(e) => {
                    setUserData(e.target.value)
                }} className='w-full p-[.19em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="text" name="username/email" id="user" />
            </p>
            <p className=''>
                <label className='text-[1rem] text-[--accent1]' htmlFor="password">Password</label>
                <input onChange={(e) => {
                    setUserpass(e.target.value)
                }} className='w-full p-[.19em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="password" name="password" id="password" />
            </p>
            <Link className='text-right animate-pulse underline'>
                <p className='sm:text-[1rem] text-[0.9rem] text-[--accent1] capitalize'>
                        forgot password
                </p>
            </Link>
            <input  type="submit" value="Log In" className='p-[.19em] bg-[#c16b63af] roboto text-white text-xl font-bold cursor-pointer rounded-[5px] active:duration-[0.1s] active:bg-[#ffffff65] sm:hover:bg-[#ffffff65] active:border-[--accent] border-2 sm:hover:border-[--accent] duration-[0.5s] active:text-[--accent] sm:hover:text-[--accent]' />
        </form>

        <div className='w-full px-[2em] sm:px-[8em] py-[1em] flex items-center justify-center'>
        <div className='w-full border-[--accent1] border-[.1px] relative'> </div>
            <p className='roboto sm:text-[1rem] text-[0.9rem] px-[1em]'>Or</p>
        <div className='w-full border-[--accent1] border-[.1px] relative'> </div>
        </div>
        <Link className='flex gap-[1em] mb-[.5em] sm:text-[0.9rem] text-[0.9rem] roboto active:underline active:duration-[0.1s] sm:hover:underline items-center capitalize'>
            <img src={google} className='sm:w-[25px] w-[20px] h-[20px] sm:h-[25px]' alt="" />
            <span className='text-[--accent1]'>Log In with google</span>
        </Link>
        <p className='roboto sm:text-[1rem] text-[0.9rem]'>
            Are you new? <Link to={"/signup"} className='underline text-[--accent1] ml-[.5em] animate-pulse duration-[0.5s]'><span>Create an account</span></Link>
        </p>
    </section>
   </article>
  )
}

export default Login