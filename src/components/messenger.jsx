import React, { useEffect } from 'react'
import Nav from './nav'
import user from "../assets/user.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import SendMessage from './sendMessenger.jsx'
import { Link } from 'react-router-dom'
import InputMessage from './inputWindow.jsx'

function Messenger() {


  return (
    <article>
        {/* <Nav profile={user}/> */}
        <main className='h-[100vh] flex flex-col overflow-hidden py-[1em]'>
            <div className='p-[1em] w-full flex justify-between items-center  px-[--pdx] text-[--accent1] shadow-md shadow-[--accent1]'>
                <Link to={"/"} className=''>
                    <FontAwesomeIcon className='text-4xl text-[--accent1]' icon={faHome}/>
                </Link>
                <h1 className='text-3xl roboto font-bold'>Inbox</h1>
            </div>
            <div className='flex h-full'>
                <section className='w-[30%] px-[1em] shadow-sm shadow-black'>
                    <div className='py-[.5em] flex flex-col gap-[.5em]'>
                        <h2 className='text-2xl font-extrabold text-[--accent1] roboto'>Chats</h2>
                        <form action="">
                            <p className='relative'>
                            <FontAwesomeIcon icon={faSearch} className='text-2xl absolute top-[8px] left-[8px] text-[--accent1]'/>
                                <input className='w-full shadow-sm shadow-[--accent1] p-[.5em] rounded-[2em] pl-[2.5em] outline-none text-[--accent1]' placeholder='Search' type="text" name="search" id="search" />
                                </p>
                        </form>
                    </div>
                    <div className='h-[76%] overflow-scroll hide-scrollbar py-[.5em]'>
                        <SendMessage />
                    </div>
                </section>
                <section className='w-[60%] shadow-sm shadow-black'>
                    <InputMessage />
                </section>
                <section className='w-[30%] shadow-sm shadow-black'>
                    sect3
                </section>
            </div>
        </main>
    </article>
  )
}

export default Messenger