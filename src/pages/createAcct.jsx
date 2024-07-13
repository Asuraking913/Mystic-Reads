import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Create() {
  return (
    <article className='sm:h-full h-screen flex items-center p-[2em] sm:px-[10em] px-[1em]'>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} className='absolute top-[1em] left-[1em] text-3xl text-[--accent] hover:scale-125 duration-[0.5s]'/>
      </Link>
    <section className='bg-[#c16b63af] sm:flex hidden flex-col items-center justify-center rounded-l-[1em] h-[90vh] w-full'>
            <div className='h-[50%] w-[50%] bg-white mb-[1em]'>

        </div>
        <div className='text-center px-[5em] flex flex-col gap-[.5em]'>
            <h2 className='audio text-2xl font-bold text-[white]'>Read More, Enjoy More</h2>
            <p className='roboto text-[--accent1] text italic text-[1rem]'>Sign Up and Browse through our vast library of addictive novels to pass away time</p>
        </div>
    </section>
    <section className='bg-[#ffffffea] flex-col sm:py-0 py-[2em] gap-[1em] rounded-[1em]  sm:rounded-l-[0em] sm:h-[90vh] w-full flex sm:px-0 px-[1em] sm:items-center justify-center'>
        <h1 className='text-2xl audio text-[#c16b63af] mg-[1em]'>Mystic<span className='text-[--accent1]'>Reads</span></h1>
        <form action="" className='flex flex-col gap-[1em]'>
            <p>
                <label className='text-[1.1rem] text-[--accent1]' htmlFor="username">Username</label>
                <input className='w-full p-[.5em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="text" name="username" id="user" />
            </p>
            <p>
                <label className='text-[1.1rem] text-[--accent1]' htmlFor="email">Email</label>
                <input className='w-full p-[.5em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="text" name="email" id="email" />
            </p>
            <p>
                <label className='text-[1.1rem] text-[--accent1]' htmlFor="password">Password</label>
                <input className='w-full p-[.5em] border-[1.5px] border-[#c16b63af] rounded-[5px]' type="password" name="password" id="password" />
            </p>
            <input  type="submit" value="Sign Up" className='p-[.5em] bg-[#c16b63af] roboto text-white text-xl font-bold cursor-pointer rounded-[5px] hover:bg-[#ffffff65] border-2 border-transparent hover:border-[--accent] duration-[0.5s] hover:text-[--accent]' />
        </form>
        <Link className='flex gap-[1em] text-[0.9rem] roboto hover:underline items-center capitalize'>
            <FontAwesomeIcon icon={faGoogle} className='text-xl' />
            <span className='text-[--accent1]'>Sign In with google</span>
        </Link>
        <p className='roboto text-[1.1rem]'>
            Already have an account? <Link to={"/login"} className='underline text-[--accent1] ml-[.5em] animate-pulse duration-[0.5s]'><span>Log in</span></Link>
        </p>
    </section>
   </article>
  )
}

export default Create