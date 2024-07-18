import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import google from "../assets/google.svg"
import svg from "../assets/svg1.svg"

function Login() {
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
    <section className='bg-[#ffffffea] flex-col gap-[1em] rounded-[1em] sm:rounded-l-[0em] sm:h-[90vh] w-full flex items-center justify-center sm:px-0 px-[1em] sm:py-0 py-[2em]'>
        <h1 className='text-3xl audio text-[#c16b63af] mg-[1em]'>Mystic<span className='text-[--accent1]'>Reads</span></h1>
        <form action="" className='flex flex-col gap-[1.2em]'>
            <p>
                <label className='text-[1.1rem] text-[--accent1]' htmlFor="username/email">Username or email</label>
                <input className='w-full p-[.5em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="text" name="username/email" id="user" />
            </p>
            <p>
                <label className='text-[1.1rem] text-[--accent1]' htmlFor="password">Password</label>
                <input className='w-full p-[.5em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="password" name="password" id="password" />
            </p>
            <Link className='text-right underline'>
                <p className='text-[1rem] text-[--accent1] capitalize'>
                        forgot password
                </p>
            </Link>
            <input  type="submit" value="Log In" className='p-[.5em] bg-[#c16b63af] roboto text-white text-xl font-bold cursor-pointer rounded-[5px] hover:bg-[#ffffff65] border-2 border-transparent hover:border-[--accent] duration-[0.5s] hover:text-[--accent]' />
        </form>

        <div className='w-full px-[8em] py-[1em] flex items-center justify-center'>
        <div className='w-full border-[--accent1] border-[1px] relative'> </div>
            <p className='roboto px-[1em]'>Or</p>
        <div className='w-full border-[--accent1] border-[1px] relative'> </div>
        </div>
        <Link className='flex gap-[1em] text-[0.9rem] roboto hover:underline items-center capitalize'>
            <img src={google} className='w-[25px] h-[25px]' alt="" />
            <span className='text-[--accent1]'>Log In with google</span>
        </Link>
        <p className='roboto text-[1rem]'>
            Are you new? <Link to={"/signup"} className='underline text-[--accent1] ml-[.5em] animate-pulse duration-[0.5s]'><span>Create an account</span></Link>
        </p>
    </section>
   </article>
  )
}

export default Login