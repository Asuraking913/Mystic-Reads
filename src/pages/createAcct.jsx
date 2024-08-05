import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import google from "../assets/google.svg"
import svg from "../assets/svg2.svg"
import axios from 'axios'
import Axios913 from '../utils/Axios913'

function Create() {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [gender, setGender] = useState("")
    const [error1, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setInterval(() => {
            setError("")
        }, 4000)
    }, [])
   

    const handleSumbit = async (event) => {
        event.preventDefault()
        const data = {
            userName: userName,
            userEmail: userEmail, 
            gender: gender, 
            userPass: pass, 
            confirmPass: confirmPass
        }
        
        
        if (data['userName'].length <= 5) {
            setError("Username must be more than 5 characters")
            return
        }

        if (!data['gender']) {
            setError("Please select an option for gender")
            return
        }

        if (data['userPass'].length <= 5) {
            setError("Password must be more than 5 characters")
            return
        }
        

        if (data['userPass'] !== data['confirmPass']) {
            setError("Password fields are not identical")
            return
        }

        try {
            const response = await Axios913.post("/api/auth/register", data).then(response => {
                console.log(response.data)
                if (response.status == 201) {
                    navigate("/login") 
                }
            }) 
        }

    catch(error) {
        if (error.response.status == 400) {
            setError(error.response.data['message'])
        }

        else {
            console.log(error)
        }
    }

    }

  return (
    <article className='sm:h-full h-screen flex items-center p-[2em] sm:px-[10em] px-[1em]'>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} className='absolute top-[1em] left-[1em] text-3xl text-[--accent] hover:scale-125 duration-[0.5s]'/>
      </Link>
    <section className='bg-[#c16b63af] sm:flex hidden flex-col items-center justify-center rounded-l-[1em] h-[90vh] w-full'>
        <div className='mb-[1em]'>
            <img src={svg} className='w-[350px] ml-[2em]' alt="" />
        </div>
        <div className='text-center px-[5em] flex flex-col gap-[.5em]'>
            <h2 className='audio text-2xl font-bold text-[white]'>Read More, Enjoy More</h2>
            <p className='roboto text-[--accent1] text italic text-[1rem]'>Sign Up and Browse through our vast library of addictive novels to pass away time</p>
        </div>
    </section>
    <section className='bg-[#ffffffea] flex-col sm:py-0 py-[2em] gap-[0em] sm:gap-[1em] rounded-[1em]  sm:rounded-l-[0em] sm:h-[90vh] sm:w-[80%] flex sm:px-0 px-[1em] sm:items-center justify-center'>

        <h1 className='text-3xl audio text-[#c16b63af] mb-[.5em] text-center'>Mystic<span className='text-[--accent1]'>Reads</span></h1>
        {error1 && <p className='text-center text-[0.9rem] text-[--accent1] animate-bounce'>{error1}</p>}
        <form onSubmit={handleSumbit} className='flex flex-col gap-[.5em] justfiy-center'>
            <p>
                <label className='text-[1rem] text-[--accent1]' htmlFor="username">Username</label>
                <input onChange={(e) => setUserName(e.target.value)} className='w-full p-[.2em] border-[1.5px] border-[#c16b63af] rounded-[5px]' required type="text" name="username" id="user" />
            </p>
            <p>
                <label className='text-[1rem] text-[--accent1]' htmlFor="email">Email</label>
                <input required onChange={(e) => setUserEmail(e.target.value)} className='w-full p-[.2em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="email" name="email" id="email" />
            </p>
            <p>
                <label className='text-[1rem] text-[--accent1]' htmlFor="password">Password</label>
                <input required onChange={(e) => setPass(e.target.value)} className='w-full p-[.2em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="password" name="password" id="password" />
            </p>
            <p>
                <label className='text-[1rem] text-[--accent1]' htmlFor="password">Confirm Password</label>
                <input required onChange={(e) => setConfirmPass(e.target.value)} className='w-full p-[.2em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="password" name="password" id="confirm" />
            </p>
            <div className='flex justify-between'>
                <p className='flex-items-center justify-center '>
                    <input type="radio" onChange={(e) => {setGender(e.target.value); }} value={"male"} checked ={gender === 'male'} name="gender" id="male" />
                    <label htmlFor="male" className='pl-[1em]'>Male</label>
                </p>
                <p className='flex-items-center justify-center '>
                    <input type="radio" onChange={(e) => {setGender(e.target.value); }} value={"female"} checked ={gender === 'female'} name="gender" id="female" />
                    <label htmlFor="female" className='pl-[1em]'>Female</label>
                </p>
            </div>
            <input  type="submit" value="Sign Up" className='p-[.2em] bg-[#c16b63af] roboto text-white text-xl font-bold cursor-pointer rounded-[5px] active:duration-[0.1s] active:bg-[#ffffff65] sm:hover:bg-[#ffffff65] border-2 border-transparent active:border-[--accent] sm:hover:border-[--accent] duration-[0.5s] active:text-[--accent] sm:hover:text-[--accent]' />
        </form>
        <Link className='flex gap-[1em] text-center justify-center py-[1em] text-[0.9rem] roboto active:underline active:duration-[0.1s] sm:hover:underline items-center capitalize'>
            <img src={google} className='sm:w-[25px] w-[20px] h-[20px]  sm:h-[25px]' alt="" />
            <span className='text-[--accent1]'>Sign In with google</span>
        </Link>
        <p className='roboto sm:text-[1rem] text-[0.9rem] text-center'>
            Already have an account? <Link to={"/login"} className='underline text-[--accent1] ml-[.5em] animate-pulse duration-[0.5s]'><span>Log in</span></Link>
        </p>
    </section>
   </article>
  )
}

export default Create