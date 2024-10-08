import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAlignRight, faBars, faBell, faMessage, faPowerOff, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import user from "../assets/user.svg"
import AuthContext from '../utils/fetchUserPic';
import { userPicContext } from '../utils/fetchUserPic';
import Cookies from 'js-cookie';
import Axios913 from '../utils/Axios913';

function Nav() {

  const [search, setSearch] = useState(true);
  const [nav, setNav] = useState(false)
  const [menu, setMenu] = useState(true)
  const profile = useContext(userPicContext)
  const navigate = useNavigate()
  const {auth, setAuth, setLoading} = useContext(AuthContext)

  const handleNav = () => {
    document.body.classList.add('no-scroll')
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
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className='text-[--accent] z-[100000000000] bg-[--accent1] fixed  sm:sticky top-0 font-bold  right-0 w-full px-[1em] sm:px-[--pdx] h-[60px] sm:mt] items-center flex justify-between'>
        <a href="" className='text-2xl audio'>Mystic<span className='text-[--wh]'>Reads</span></a>

        <nav className='roboto sm:block hidden'>

          
          {
            menu ?
            <ul className='flex text-[1.1rem] gap-[2em]'>
            <li>
              <Link to={"/"} onClick={() => (window.scrollTo({top : 0, behavior : 'smooth'}))} className='hover:underline decoration-white hover:animate-pulse'>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link onClick={handleTrend} className='hover:underline decoration-white hover:animate-pulse'>
                <p>Trending</p>
              </Link>
            </li>
            <li>
              <Link onClick={handleRecommend} className='hover:underline decoration-white hover:animate-pulse'>
               <p>Recommended</p>
              </Link>
            </li>
            <li>
              <Link onClick={handleContact} className='hover:underline decoration-white hover:animate-pulse duration[0.5s]'>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          :

          ""
          
        }
        </nav>
        {
          !auth ?

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
              <FontAwesomeIcon className='text-3xl sm:active:scale-[0.95] hover:scale-125 duration-[0.5s]' onClick={handleSearch} icon={faSearch}/>
              :
              <form action="#" onSubmit={handleSubmit}>
                <p><input type="text" className='py-[.5em] rounded-[2em] pl-[.5em] placeholder-[--accent] bg-[white]' name="search" id="navSearch" placeholder='Search...' /></p>
              </form>
            }
          </Link>
        </ul>

        :

        <ul className='gap-[1em] duration-[0.5s] text-[1.1rem] items-center roboto sm:flex hidden'>
          <button onClick={async () => {
              setAuth(null)
              const response = await Axios913.get("/api/logout").then(response => alert(response.data.message))
              navigate("/")
              }}   className='relative text-[--accent]'>
            <FontAwesomeIcon icon={faPowerOff} className='text-4xl'/>
          </button>
          <Link to = {"/feeds"}  className='relative'>
            <div className='h-[13px] w-[13px] bg-red-500 absolute right-0 text-white text-[0.7rem] rounded-[50%] flex items-center justify-center'>1</div>
            <FontAwesomeIcon icon={faBell} className='text-4xl'/>
          </Link>
          <Link to = {"/sendSms"}  className='relative'>
            <div className='h-[13px] w-[13px] bg-red-500 absolute right-0 text-white text-[0.7rem] rounded-[50%] flex items-center justify-center'>1</div>
            <FontAwesomeIcon icon={faMessage} className='text-4xl'/>
          </Link>
          <Link to={"/profile"}>
            <div className='w-[40px] bg-[--accent] shadow-sm shadow-[black]  rounded-[50%] h-[40px]'>
              {profile ? <img src={profile} className='rounded-[50%] w-[40px] h-[40px] object-cover bg-[--accent] shadow-sm shadow-[black]' alt="" /> : <img src={user} className='rounded-[50%] h-[40px] w-[40px] object-cover'  alt="" />}
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
              <Link to={"/"} className='hover:underline hover:animate-pulse'>
                <li>Home</li>
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
              !auth ?
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

          <ul className=' flex gap-[1.5em] flex-col right-[1em] text-[1.1rem] items-center roboto'>
             <button  className='relative text-[--accent]'>
            <FontAwesomeIcon onClick={async () => {
              setAuth(null)
              const response = await Axios913.get("/api/logout").then(response => alert(response.data.message))
              navigate("/")
              }} icon={faPowerOff} className='text-4xl'/>
          </button>
            <Link to = {"/feeds"}  className='relative text-[--accent]'>
            <div className='h-[13px] w-[13px] bg-red-500 absolute right-0 text-white text-[0.7rem] rounded-[50%] flex items-center justify-center'>1</div>
            <FontAwesomeIcon icon={faBell} className='text-4xl'/>
          </Link>
          <Link to = {"/sendSms"}  className='relative text-[--accent]'>
            <div className='h-[13px] w-[13px] bg-red-500 absolute right-0 text-white text-[0.7rem] rounded-[50%] flex items-center justify-center'>1</div>
            <FontAwesomeIcon icon={faMessage} className='text-4xl'/>
          </Link>
          <Link to={"/profile"}>
            <div className=' rounded-[50%] bg-[--accent] shadow-sm shadow-[black]'>
              <img src={profile} className='rounded-[50%] h-[40px] w-[40px] object-cover '  alt="" />
            </div>
          </Link>
            <Link >
              {
                search ?
                <FontAwesomeIcon className='text-4xl hover:scale-125 duration-[0.5s]' onClick={() => (setSearch(!search))} icon={faSearch}/>
                :
                <form action="#" onSubmit={handleSubmit}>
                  <p><input type="text" className='py-[.5em] rounded-[2em] w-[350px] text-black absolute top-[85%] right-[2%] pl-[.5em] placeholder-[--accent] bg-[white] outline-none' name="search" id="navSearch" placeholder='Search...' /></p>
                </form>
              }
                  <FontAwesomeIcon icon={faTimes} onClick={() => (setNav(!Nav))} className='text-4xl absolute top-[120%] z-[20] left-[50%]'/>

            </Link>
          </ul>
        }
          </div>
        </div>

        :

        <FontAwesomeIcon onClick={handleNav} className='sm:hidden block text-4xl' icon={faAlignRight}/> }
    </div>
  )
}

export default Nav