import React, { useEffect, useState } from 'react'
import Nav from './nav'
import userDefault from "../assets/user.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import SendMessage from './sendMessenger.jsx'
import { Link } from 'react-router-dom'
import InputMessage from './inputWindow.jsx'

function Messenger() {

    const [currentUser, setCurrentUser] = useState('Asura')
    const [active, setActive] = useState('active 3 hrs ago')


  return (
    <>
            <div className='fixed bg-[#DDBDB2] z-[1000] top-0 p-[1em] w-full flex justify-between items-center  px-[1em] text-[--accent1]'>
                <Link to={"/"} className=''>
                    <FontAwesomeIcon className='text-4xl text-[--accent1]' icon={faHome}/>
                </Link>
                <h1 className='text-3xl roboto font-bold'>Inbox</h1>
            </div>
    <article className='w-full h-screen pt-[4em] t-[5%] relative flex flex-col'>
        <nav className='w-full flex fixed px-[1em] z-[1000000]'>
            <div className='py-[.5em] w-[40%] left-0 flex flex-col gap-[.5em] bg-[#DDBDB2]'>
                     <h2 className='text-2xl font-extrabold text-[--accent1] roboto'>Chats</h2>
                     <form action="">
                         <p className='relative'>
                         <FontAwesomeIcon icon={faSearch} className='text-2xl absolute top-[8px] left-[8px] text-[--accent1]'/>
                             <input className='shadow-sm shadow-[--accent1] w-[95%] p-[.5em] rounded-[2em] pl-[2.5em] outline-none text-[--accent1]' placeholder='Search' type="text" name="search" id="search" />
                             </p>
                     </form>
                </div>
                <div className='w-[60%] flex items-center justify-between px-[1em] '>
                    <div className='flex gap-[.5em] items-center'>
                        <div className='w-[50px] bg-[--accent] shadow-sm shadow-[black]  rounded-[50%] h-[50px]'>
                                <img src={userDefault} className='rounded-[50%] h-[50px] w-[50px] object-cover'  alt="" />
                        </div>
                        <div>
                            <h3 className='roboto font-bold text-[--accent1]'>{currentUser}</h3>
                            <p className='text-[0.9rem] roboto text-[#534947]'>{active}</p>
                        </div>
                    </div>
                        <Link className='hover:bg-[--accent1] p-[.3em] px-[.4em] rounded-[50%] hover:text-[white] text-[--accent1] flex items-center justify-center duration-[0.2s] shadow-sm shadow-[--accent1] animate-spin hover:animate-none'>
                            <FontAwesomeIcon className='text-3xl roboto' icon={faEllipsis}/>
                        </Link>
                    </div>
                <div className='w-[40%]'>

                </div>
        </nav>
        
        <div className='flex h-full '>
            <section className='w-[40%] overflow-scroll hide-scrollbar px-[1em]'>
                <div className='pt-[em]'>
                    <SendMessage />
                    <SendMessage />
                    <SendMessage />
                </div>
            </section>
            <section className='w-[60%] relative shadow-sm shadow-[--accent1] ' >
                <div className='h-[15vh] '>

                </div>
                <InputMessage />
            </section>
            <section className='w-[40%] bg-[#ddbdb269] overflow-scroll hide-scrollbar'>
                <div className='relative mt-[4em]'>
                    <div className='blur-sm bg-[#00000081] absolute w-full h-full'>
                    </div>
                    <p className='z-[10]'>sdf</p>
                </div>

            </section>
        </div>
    </article>
    </>
  )
}

export default Messenger