import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import person1 from "../assets/person4.jpeg"

function Nav() {

  const [search, setSearch] = useState(true);
  const [nav, setNav] = useState(false)
  const [menu, setMenu] = useState(true)
  const [log, setLog] = useState(false)
  const location = useLocation()

  const handleNav = () => {
    setNav(!nav)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(!search)
    setMenu(!menu)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(!search)
    setMenu(!menu)
  }

  const handleHome = () => {
    setNav(!Nav)
    window.scrollTo({top : 0, behavior : 'smooth'})
  }

  const handleTrend =() => {
    if(location.pathname == '/profile') {
      window.location.href = "/?scroll=trend"
    }
    if(location.pathname == "/"){
    document.getElementById('trend').scrollIntoView({behavior : 'smooth'})
  }
  }

  const handleRecommend = () => {
    setNav(!Nav)
    if(location.pathname == '/profile') {
      window.location.href = "/?scroll=recommend"

    }
    if(location.pathname == "/"){
    document.getElementById('recommend').scrollIntoView({behavior : 'smooth'})
  }
  }

  const handleContact = () => {
    
    setNav(!Nav)
    if(location.pathname == '/profile') {
      window.location.href = "/?scroll=foot"
    }
    if(location.pathname == "/"){
    document.getElementById('foot').scrollIntoView({behavior : 'smooth'})
  }
  }

  const handleExit = (event) => {
    if (event.target.id == 'exit') {
      setNav(!Nav)
    }
  }

  return (
    <div className='text-[--accent] z-[100000000000] bg-[--accent1] sticky top-0 font-bold  right-0 w-full px-[1em] sm:px-[--pdx] h-[60px] sm:mt] items-center flex justify-between'>
        <a href="" className='text-2xl font-[audio]'>Mystic<span className='text-[--wh]'>Reads</span></a>

        <nav className='roboto sm:block hidden'>

          
          {
            menu ?
            <ul className='flex text-[1.1rem] gap-[2em]'>
            <Link to={"/"} onClick={() => (window.scrollTo({top : 0, behavior : 'smooth'}))} className='hover:underline decoration-white hover:animate-pulse'>
              <li>Home</li>
            </Link>
            {/* <Link to={"/?scroll=trend"} onClick={() => (document.getElementById('trend').scrollIntoView({behavior : 'smooth'}))} className='hover:underline decoration-white hover:animate-pulse'> */}
            <Link onClick={handleTrend} className='hover:underline decoration-white hover:animate-pulse'>
              <li>Trending</li>
            </Link>
            <Link onClick={handleRecommend} className='hover:underline decoration-white hover:animate-pulse'>
              <li>Recommended</li>
            </Link>
            <Link onClick={handleContact} className='hover:underline decoration-white hover:animate-pulse duration[0.5s]'>
              <li>Contact</li>
            </Link>
          </ul>
          :

          ""
          
        }
        </nav>
        {
          log ?

        <ul className='gap-[1em] text-[1.1rem] items-center roboto sm:flex hidden'>
          <Link to={"/signup"} className='hover:scale-110 border-2 border-[--accent] px-[1.5em] py-[0.5em] rounded-[2em] hover:text-white hover:bg-[--accent] duration-[0.5s]'>
            <li className=' '>Sign Up</li>
          </Link>
          <Link to={"/login"} className='hover:scale-110 text-white py-[0.5em] border-transparent hover:text-[--accent] border-2 hover:border-[--accent] px-[1.5em] rounded-[2em] hover:bg-[--accent1] bg-[--accent] duration-[0.5s]'>
            <li  className=''>Log In</li>
          </Link>
          <Link>
            {
              search ? 
              <FontAwesomeIcon className='text-3xl hover:scale-125 duration-[0.5s]' onClick={handleSearch} icon={faSearch}/>
              :
              <form action="#" onSubmit={handleSubmit}>
                <p><input type="text" className='py-[.5em] rounded-[2em] pl-[.5em] placeholder-[--accent] bg-[white]' name="search" id="navSearch" placeholder='Search...' /></p>
              </form>
            }
          </Link>
        </ul>

        :

        <ul className='gap-[1em] duration-[0.5s] text-[1.1rem] items-center roboto sm:flex hidden'>
          <Link to={"/profile"}>
            <div className='w-[50px] rounded-[50%] bg-white h-[50px]'>
              <img src={person1} className='rounded-[50%]' alt="" />
            </div>
          </Link>
          <Link>
            {
              search ? 
              <FontAwesomeIcon className='text-3xl hover:scale-125 duration-[0.5s]' onClick={handleSearch} icon={faSearch}/>
              :
              <form action="#" onSubmit={handleSubmit}>
                <p><input type="text" className='py-[.5em] rounded-[2em] pl-[.5em] placeholder-[--accent] bg-[white]' name="search" id="navSearch" placeholder='Search...' /></p>
              </form>
            }
          </Link>
        </ul>
        
        }        

        {
        nav ?
        <div className='h-screen fixed z-[0] left-0 w-full top-0 bg-[#0000006c]' id='exit' onClick={handleExit}>
          <div className=' flex relative h-[full] py-[4em] p-[1em] justify-between bg-[#593f3b85] text-white '>
          <nav className='roboto left-[2em]'>
            <ul className='flex flex-col text-[1.1rem] gap-[3em]'>
              <Link onClick={handleHome} className='hover:underline hover:animate-pulse'>
                <li>Home</li>
              </Link>
              <Link onClick={handleTrend} className='hover:underline hover:animate-pulse'>
                <li>Trending</li>
              </Link>
              <Link onClick={handleRecommend} className='hover:underline hover:animate-pulse'>
                <li>Recommended</li>
              </Link>
              <Link onClick={handleContact} className='hover:underline hover:animate-pulse duration[0.5s]'>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
            {
              log ?
          <ul className=' flex gap-[3em] flex-col right-[1em] text-[1.1rem] items-center roboto'>
            <Link to={"/signup"} className='hover:scale-110 border-2 border-[--accent] px-[1.5em] py-[0.5em] rounded-[2em] hover:text-white hover:bg-[--accent] duration-[0.5s]'>
              <li className=''>Sign Up</li>
            </Link>
            <Link to={"/login"} className='hover:scale-110 py-[0.5em] px-[1.5em] rounded-[2em] hover:bg-[--accent1] bg-[--accent] duration-[0.5s]'>
              <li className=' text-white '>Log In</li>
            </Link>
            <Link >
              {
                search ?
                <FontAwesomeIcon className='text-4xl hover:scale-125 duration-[0.5s]' onClick={() => (setSearch(!search))} icon={faSearch}/>
                :
                <form action="#" onSubmit={handleSubmit}>
                  <p><input type="text" className='py-[.5em] rounded-[2em] w-[300px] text-black absolute top-[85%] right-[5%] pl-[.5em] placeholder-[--accent] bg-[white]' name="search" id="navSearch" placeholder='Search...' /></p>
                </form>
              }
                  <FontAwesomeIcon icon={faTimes} onClick={() => (setNav(!Nav))} className='text-4xl absolute top-[120%] z-[20] left-[50%]'/>

            </Link>
          </ul>
          :

          <ul className=' flex gap-[3em] flex-col right-[1em] text-[1.1rem] items-center roboto'>
          <Link to={"/profile"}>
            <div className='h-[50px] w-[50px] rounded-[50%]'>
              <img src={person1} className='rounded-[50%]'  alt="" />
            </div>
          </Link>
            <Link >
              {
                search ?
                <FontAwesomeIcon className='text-4xl hover:scale-125 duration-[0.5s]' onClick={() => (setSearch(!search))} icon={faSearch}/>
                :
                <form action="#" onSubmit={handleSubmit}>
                  <p><input type="text" className='py-[.5em] rounded-[2em] w-[300px] text-black absolute top-[85%] right-[5%] pl-[.5em] placeholder-[--accent] bg-[white]' name="search" id="navSearch" placeholder='Search...' /></p>
                </form>
              }
                  <FontAwesomeIcon icon={faTimes} onClick={() => (setNav(!Nav))} className='text-4xl absolute top-[120%] z-[20] left-[50%]'/>

            </Link>
          </ul>
        }
          </div>
        </div>

        :

        <FontAwesomeIcon onClick={handleNav} className='sm:hidden block text-4xl' icon={faBars}/> }
    </div>
  )
}

export default Nav