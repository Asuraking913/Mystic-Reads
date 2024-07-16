import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faTrash } from '@fortawesome/free-solid-svg-icons'
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

    const handleLength = (data) => {
        if (data.length > 34) {
            data + "<Link>Read more</Link>"
            return data
        }
        return data
    }


  return (
    <div className='h-[48%] rounded-[1em] shadow-sm shadow-[--accent1] overflow-scroll hide-scrollbar'>
        <div className='rounded-t-[1em] p-[1em] border-b-[2px] z-[3] sticky top-0 w-full bg-[--accent1] border-b-[--accent1]'>
            <Link>
                <FontAwesomeIcon className='text-2xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faMessage}/>
            </Link>
        </div>
        <div className='h-full pt-[0em]'>
            
            {msgList.map((items, i )=> (
                <div key={i} className='flex items-center gap-[2em] relative justify-between px-[1em] shadow-sm shadow-[--accent1] py-[1em]'>
                    <FontAwesomeIcon icon={faTrash} className='absolute right-[5px] top-[5px] text-[0.9rem] text-[--accent1] sm:hover:scale-125 sm:active:scale-[1] sm:duration-[0.5s]'/>
                    <img src={items.img} className='w-[80px] h-[80px] rounded-[50%] object-cover' alt="" />
                    <p className='text-[--accent1] font-bold roboto'>{handleLength(items.msg)}</p>
                    <p className='text-[0.9rem]'>{items.time}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SmsBox