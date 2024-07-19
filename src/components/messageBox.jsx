import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"

function SmsBox() {

    const msgList = [
        {
            img: person3, 
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            msg: "I do too", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            msg: "There's actually a reason for that", 
            time: "2:14pm"
        }, 
        {
            img: person1, 
            msg: "Love sucks for some people", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            msg: "Am leveling up my game", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            msg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquam dolores voluptates qui enim?", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        
    ]



  return (
    <div id='message' className='sm:h-[48%] h-full left-0  sm:z-0 z-[1000] sm:rounded-[1em] fixed sm:top-0 top-[3.7em] sm:relative  shadow-sm shadow-[--accent1] overflow-scroll hide-scrollbar'>
        <div className='sm:rounded-t-[1em] p-[1em] flex justify-between border-b-[2px] z-[3] sticky top-0 w-full bg-[--accent1] border-b-[--accent1]'>
            <Link id='smsIcon' className='cursor-pointer'>
                <FontAwesomeIcon className='text-2xl text-[--bg]  sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faMessage}/>
            </Link>
            <Link onClick={() => {
                document.getElementById('box').style.display = 'none';
                document.body.classList.remove('no-scroll')
                document.getElementById('notify').style.zIndex = 1000

                
                }}>
                <FontAwesomeIcon className='sm:hidden text-xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faTimes}/>
            </Link>
        </div>
        <div className='h-full pt-[0em]'>
            
            {msgList.map((items, i )=> (
                <div key={i} className='flex items-center cursor-pointer sm:hover:bg-[#f3ddd0] active:bg-[#e3cec2] gap-[2em] relative justify-between px-[1em] shadow-sm shadow-[--accent1] py-[1em]'>
                    <FontAwesomeIcon icon={faTrash} className='absolute cursor-pointer right-[5px] top-[5px] text-[0.9rem] text-[--accent1] sm:hover:scale-125 sm:active:scale-[1] sm:duration-[0.5s]'/>
                    <img src={items.img} className='sm:w-[50px] sm:h-[50px] w-[50px] h-[50px] rounded-[50%] object-cover' alt="" />
                    {/* <p className='text-[--accent1] font-bold roboto'>{(items.msg.length > 34) ? items.msg + items.msg[34 : items.msg }</p> */}
                    {/* {'sd'.} */}
                    <p className=''>{(items.msg.length > 27) ? items.msg.substring(0, 25).trim() + "..." : items.msg}</p>
                    <p className='text-[0.9rem]'>{items.time}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SmsBox