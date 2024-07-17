import React from 'react'
import { Link } from 'react-router-dom'

function FeedNav() {
    const handleSms = () => {
        window.scrollTo({top : 400, behavior : 'smooth'})
        document.body.classList.add('no-scroll')
        document.getElementById('box').style.display = 'flex'
        document.getElementById('notify').style.zIndex = 0
        document.getElementById('box').classList.remove('notify')
        document.getElementById('box').classList.add('sms')
        document.getElementById('smsIcon').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('smsIcon').classList.remove('sm:animate-bounce')
        }, 4000)
    }

    const handleNotify = () => {
        window.scrollTo({top : 400, behavior : 'smooth'})
        document.body.classList.add('no-scroll')
        document.getElementById('message').style.zIndex = 0
        document.getElementById('box').style.display = 'flex'
        document.getElementById('box').classList.remove('sms')
        document.getElementById('box').classList.add('notify')
        document.getElementById('bell').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('bell').classList.remove('sm:animate-bounce')
        }, 4000)
    }

    const handleFeeds = () => {
        window.scrollTo({top : '400', behavior : 'smooth'})
        document.getElementById('thumb').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('thumb').classList.remove('sm:animate-bounce')
        }, 2000)
        document.getElementById('comment-icon').classList.add('sm:animate-bounce')
        setInterval(() => {
        document.getElementById('comment-icon').classList.remove('sm:animate-bounce')
        }, 2000)
    }

  return (
    <div className='bg-[--accent1] z-[5] h-[60px] w-full sticky top-[3.74em] my-[1em] px-[--pdx]'>
        <div className='h-full w-full sm:px-[8em] duration-[0.5s]'>
            <ul className='flex items-center  h-full w-full justify-between'>
                <Link onClick={handleFeeds} className='sm:text-xl active:bg-gray-200 active:text-[--accent1] text-[1.1rem] relative sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] rounded-[5px] font-bold text-white roboto'>
                    Feeds
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link onClick={handleSms} className='sm:text-xl active:bg-gray-200 active:text-[--accent1] text-[1.1rem] relative sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] rounded-[5px] font-bold text-white roboto'>
                    Messages
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link onClick={handleNotify} className='sm:text-xl active:bg-gray-200 active:text-[--accent1] text-[1.1rem] sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] relative rounded-[5px] font-bold text-white roboto'>
                    Notifications
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>2</div>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default FeedNav