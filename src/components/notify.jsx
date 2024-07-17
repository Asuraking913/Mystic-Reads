import { faBell, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
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
    <div id='notify' className='w-[100%] shadow-sm shadow-[--accent1] z-[10000000] bg-[#e3cec2d0] sm:bg-transparent sm:z-0 fixed sm:top-0 top-[3.7em] left-0 sm:relative sm:rounded-[1em] h-screen overflow-scroll hide-scrollbar'>
        <div className=' p-[1em] border-b-[2px] z-[10] sticky sm:block flex justify-between top-0 w-full bg-[--accent1] border-b-[--accent1]'>
            <Link>
                <FontAwesomeIcon id='bell' className='sm:text-2xl text-xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faBell}/>
            </Link>
            <Link onClick={() => {
                document.getElementById('box').style.display = 'none';
                document.body.classList.remove('no-scroll')
                document.getElementById('message').style.zIndex = 1000

                
                }}>
                <FontAwesomeIcon className='sm:hidden text-xl text-[--bg] sm:hover:scale-125 sm:duration-[0.5s] sm:active:scale-[1]' icon={faTimes}/>
            </Link>
        </div>
        <div className='h-full pt-[0em]'>
            
            {notifyList.map((items, i )=> (
                <div key={i} className='flex items-center cursor-pointer sm:hover:bg-[#f3ddd0] active:bg-[#e3cec2] relative justify-between px-[1em] shadow-sm shadow-[--accent1] py-[1em]'>
                    <FontAwesomeIcon icon={faTrash} className='absolute cursor-pointer right-[5px] top-[5px] text-[0.9rem] text-[--accent1] sm:hover:scale-125 sm:active:scale-[1] sm:duration-[0.5s]'/>
                    <img src={items.img} className='sm:w-[80px] w-[50px] h-[50px] sm:h-[80px] rounded-[50%] object-cover' alt="" />
                    <p className='text-[--]'>{items.p}</p>
                    <p className='text-[0.9rem]'>{items.time}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Notify