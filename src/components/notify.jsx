import { faBell, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import { Link } from 'react-router-dom'

function Notify() {

    const notifyList = [
        {
            img: person3, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person1, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        
    ]

  return (
    <div className='w-[100%] shadow-sm shadow-[--accent1] relative rounded-[1em] h-screen overflow-scroll hide-scrollbar'>
        <div className=' p-[1em] border-b-[2px] z-[10] sticky top-0 w-full bg-[--accent1] border-b-[--accent1]'>
            <Link>
                <FontAwesomeIcon className='text-2xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faBell}/>
            </Link>
        </div>
        <div className='h-full pt-[0em]'>
            
            {notifyList.map((items, i )=> (
                <div key={i} className='flex items-center relative justify-between px-[1em] shadow-sm shadow-[--accent1] py-[1em]'>
                    <FontAwesomeIcon icon={faTrash} className='absolute right-[5px] top-[5px] text-[0.9rem] text-[--accent1] sm:hover:scale-125 sm:active:scale-[1] sm:duration-[0.5s]'/>
                    <img src={items.img} className='w-[80px] h-[80px] rounded-[50%] object-cover' alt="" />
                    <p className='text-[--accent1] font-bold roboto'>{items.p}</p>
                    <p className='text-[0.9rem]'>{items.time}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Notify