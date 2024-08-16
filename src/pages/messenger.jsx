import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBell, faEllipsis, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import SendMessage from '../components/sendMessenger.jsx'
import { Link, useLocation } from 'react-router-dom'
import InputMessage from '../components/inputWindow.jsx'
import MainNotify from '../components/notifications.jsx'
import menu from "../assets/menu.png"
import AuthContext from '../utils/fetchUserPic.jsx'
import Axios913 from '../utils/Axios913.jsx'

function Messenger() {

    const [currentUser, setCurrentUser] = useState('')
    const [foreignUserId, setForeignUserId] = useState("")
    const [active, setActive] = useState('active 3 hrs ago')
    const [foreignImage, setForeignImage] = useState("")
    const [search, setSearch] = useState('invalid')
    const {socket, userId} = useContext(AuthContext)
    const [relationId, setRelationId] = useState("")
    const [smsHistoryList, setSmsHistoryList] = useState([])
    
    const location = useLocation()
    const data = {
        userId : userId
    }
    
    useEffect(() => {
        socket.connect()
        
        socket.emit('join_rooms', data)
        
    }, [])
    // console.log(foreignUserId)

    const handlePastSms = (id) => {
        if (id) {
        const response = Axios913.get(`/api/fetch_messages/${id}`).then(response => {
        const newList = response.data.data.messageList.map(items => (
            {
                content : items.content,
                day : items.day, 
                time : items.time, 
                userId : items.userId,
                userName : items.userName
            }
        ))
        setSmsHistoryList([...newList])
        })
    }
      }

      useEffect(() => {
        handlePastSms(relationId)
      }, [relationId])

  return (
    <>
            <div className='fixed bg-[#DDBDB2] z-[1000] top-0 p-[1em] w-full flex justify-between items-center  sm:px-[4em] text-[--accent1]'>
                <button id='back' onClick={() => {
                    const back = document.getElementById('back')
                    back.classList.add('hidden')
                    back.classList.remove('block')
                    const message = document.getElementById('small-sms')
                    const header = document.getElementById('head')
                    const sectBox = document.getElementById('sect-box')
                    const search = document.getElementById('search-sect')
                    search.classList.add('flex')
                    search.classList.remove('hidden')
                    sectBox.classList.remove('hidden')
                    sectBox.classList.add('block')
                    header.classList.remove('flex')
                    header.classList.remove('py-[2em]')
                    header.classList.add('hidden')
                    message.classList.remove('block')
                    message.classList.add('hidden')
                }}  className='sm:hidden hidden'>
                    <FontAwesomeIcon className='sm:text-4xl text-3xl hover:scale-110 active:scale-[1] active:duration-[0.1s] duration-[0.5s] text-[--accent1]' icon={faArrowLeft} title='Home page '/>
                </button>
                <Link to={"/"} className=''>
                    <FontAwesomeIcon className='sm:text-4xl text-2xl hover:scale-110 active:scale-[1] active:duration-[0.1s] duration-[0.5s] text-[--accent1]' icon={faHome} title='Home page '/>
                </Link>
                <Link to={"/feeds"} className='hover:scale-110 active:scale-[1] active:duration-[0.1s] duration-[0.5s]'>
                    {/* <FontAwesomeIcon className='text-4xl text-[--accent1]' icon={faHome}/> */}
                    <img src={menu} className='sm:w-[50px] w-[30px] sm:h-[50px] h-[30px]' alt="" title='Feeds' />
                </Link>
                <h1 className='sm:text-3xl text-2xl roboto font-bold opacity-70'>Inbox</h1>
            </div>
    <article className='w-full h-screen pt-[4em] t-[5%] relative flex flex-col'>
        <nav className='w-full flex fixed h-[15vh] z-[1000000]'>
            <div id='search-sect' className='py-[.5em] justify-center  px-[1em] sm:w-[40.7%] w-full  left-0 flex sm:flex flex-col gap-[.5em] bg-[--accent1] rounded-r-[5px]'>
                     <h2 className='text-2xl font-extrabold text-[#DDBDB2] roboto'>Chats</h2>
                     <form action="">
                         <p className='relative'>
                         <FontAwesomeIcon icon={faSearch} className='text-2xl absolute top-[8px] left-[8px] text-[--accent1]'/>
                             <input className='shadow-sm shadow-[--accent1] w-[95%] p-[.5em] rounded-[2em] pl-[2.5em] outline-none text-[--accent1]' placeholder='Search' type="text" name="search" onChange={(e) => {
                                setSearch(e.target.value)
                             }} id="search" />
                             </p>
                     </form>
                </div>
                <div id='head' className='sm:w-[60%] w-full hidden sm:flex items-center justify-between px-[1em] '>
                    {foreignImage ? <div className='flex gap-[.5em] items-center'>
                        <div className='w-[50px] bg-[#DDBDB2] shadow-sm shadow-[black]  rounded-[50%] h-[50px]'>
                                <img src={foreignImage} className='rounded-[50%] h-[50px] w-[50px] object-cover'  alt="" />
                        </div>
                        <div>
                            <h3 className='roboto font-bold text-[--accent1]'>{currentUser}</h3>
                            <p className='text-[0.9rem] roboto text-[#534947]'>{active}</p>
                        </div>
                    </div> : ""}
                        {foreignImage ?<Link className='sm:hover:bg-[--accent1] active:bg-[--accent1] active:duration-[0.1s] active:animate-bounce p-[.3em] px-[.4em] rounded-[50%] active:text-white sm:hover:text-[white] text-[--accent1] flex items-center justify-center duration-[0.2s] shadow-sm shadow-[--accent1] animate-spin sm:hover:animate-none'>
                            <FontAwesomeIcon className='text-2xl roboto' icon={faEllipsis}/>
                        </Link> : ""}
                </div>
                <div className='w-[40%] rounded-l-[5px] bg-[--accent1] hidden sm:flex items-center justify-between px-[1em]'>
                    <p className='flex items-center text-2xl roboto text-[#DDBDB2] font-bold'>Notifications</p>
                    <Link>
                    <FontAwesomeIcon id='bell' className='sm:text-2xl text-xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faBell}/>
                    </Link>
                </div>
        </nav>
        
        <div className='flex sm:flex-row flex-col h-full '>
            <section id='sect-box' className='sm:w-[40%] block sm:block w-full overflow-scroll hide-scrollbar px-[1em]'>
                <div className='pt-[6.5em]'>
                    <SendMessage onImage={setForeignImage} onRelation={setRelationId} foreignUserId={foreignUserId} onForeignUserId={setForeignUserId} onUsername={setCurrentUser} onSearch={search}/>
                    
                </div>
            </section>
            <section id='small-sms' className='sm:w-[60%] w-full h-full sm:block hidden relative shadow-sm shadow-[--accent1] ' >
                <div className='h-[15vh] '>

                </div>
                {foreignImage ? <InputMessage smsHistory={smsHistoryList} relation_id={relationId} foreignUserId={foreignUserId}  /> : <div className='flex flex-col gap-[8em]'>
                    <p className='text-center roboto text-2xl px-[4em] text-[--accent1] font-bold opacity-[0.8]'>Your chat history will be stored in our database</p>
                    <p className='text-center roboto text-2xl px-[4em] text-[--accent1] font-bold opacity-[0.8]'>
                        Your Privacy Matters
                    </p>
                </div>}
            </section>
            <section id='not' className='sm:w-[40%] w-full bg-white  sm:block hidden shadow-sm shadow-[--accent1] bg-[#ddbdb269] overflow-scroll hide-scrollbar'>
                <div className=' p-[1em] mt-[4.5em] relative'>
                    <MainNotify />
                </div>
            </section>
        </div>
    </article>
    </>
  )
}

export default Messenger