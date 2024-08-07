import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import sms from "../assets/sms.png"
import bell from "../assets/bell.png"
import feeds from "../assets/menu.png"

function FeedNav() {
    const new_location = useLocation()
    const handleSms = () => {
        if (new_location.pathname === "/feeds") {
            window.scrollTo({top : 400, behavior : 'smooth'})
        document.body.classList.add('no-scroll')
        document.getElementById('box').style.display = 'flex'
        document.getElementById('message').style.display = 'block'
        document.getElementById('message').style.backgroundColor = "#DDBDB2"
        // document.getElementById('notify').style.display = 'none'
        // document.getElementById('message').style.zIndex = 230000000000000
        document.getElementById('notify').style.zIndex = 0
        document.getElementById('box').classList.remove('notify')
        document.getElementById('box').classList.add('sms')
        document.getElementById('smsIcon').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('smsIcon').classList.remove('sm:animate-bounce')
        }, 4000)
        }
        
    }

    const handleNotify = () => {
        if (new_location.pathname === "/feeds") {
            window.scrollTo({top : 400, behavior : 'smooth'})
        document.body.classList.add('no-scroll')
        document.getElementById('message').style.zIndex = 0
        // document.getElementById('swiper1').style.display = 'none'
        document.getElementById('notify').style.backgroundColor = "#DDBDB2"
        document.getElementById('box').style.display = 'flex'
        document.getElementById('box').classList.remove('sms')
        document.getElementById('box').classList.add('notify')
        document.getElementById('bell').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('bell').classList.remove('sm:animate-bounce')
        }, 4000)
        }
        
    }

    const handleFeeds = () => {
        if (new_location.pathname == "/feeds") {
            window.scrollTo({top : 1000, behavior : 'smooth'})   
            const scrollPost  = document.getElementById('newbox')
            scrollPost.scrollIntoView({top : 0, behavior : 'smooth'})
            document.getElementById('thumb').classList.add('sm:animate-bounce')
            setInterval(() => {
            document.getElementById('thumb').classList.remove('sm:animate-bounce')
            }, 2000)
            document.getElementById('comment-icon').classList.add('sm:animate-bounce')
            setInterval(() => {
            document.getElementById('comment-icon').classList.remove('sm:animate-bounce')
            }, 2000)
        }
        
    }

  return (
    <div id='feednav' className='bg-[--accent1] z-[5] h-[60px] w-full sticky top-[3.74em] my-[1em] px-[--pdx]'>
        <div className='h-full w-full sm:px-[8em] duration-[0.5s]'>
            <ul className='flex items-center  h-full w-full justify-between'>
                <Link onClick={handleFeeds} className='sm:text-xl active:bg-[--accent] active:text-[--accent1] text-[1.1rem] relative sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-[--accent] py-1 px-[.5em] rounded-[5px] font-bold text-white roboto'>
                <img src={feeds} className='sm:w-[40px] w-[40px] h-[40px] sm:h-[40px]' alt="" />
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link onClick={handleSms} className='sm:text-xl active:bg-[--accent] active:text-[--accent1] text-[1.1rem] relative sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-[--accent] py-1 px-[.5em] rounded-[5px] font-bold text-white roboto'>
                    <img src={sms} className='sm:w-[40px] w-[40px] h-[40px] sm:h-[40px]' alt="" />
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link onClick={handleNotify} className='sm:text-xl active:bg-[--accent] active:text-[--accent1] text-[1.1rem] sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-[--accent] py-1 px-[.5em] relative rounded-[5px] font-bold text-white roboto'>
                <img src={bell} className='sm:w-[40px] w-[40px] h-[40px] sm:h-[40px]' alt="" />

                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>2</div>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default FeedNav