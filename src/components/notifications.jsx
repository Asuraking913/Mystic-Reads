import { faBell, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import { Link } from 'react-router-dom'

function MainNotify() {

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
        {
            img: person4, 
            p: "AsuraKing913 liked your photo", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            p: "AsuraKing913 liked ddddddddddddddededdddddddyour photo", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            p: "AsuraKing913 Stop liked your photo", 
            time: "2:14pm"
        }, 
        
    ]

  return (
    <div id='notify' className='w-[100%] px-[1em] pt-[1em] absolute shadow-sm shadow-[--accent1] left-0 h-[vh] bg-[#DDBDB2]  overflow-scroll hide-scrollbar'>
        
        <div className='h-full flex flex-col gap-[.5em]'>
            
            {notifyList.map((items, i )=> (
                <div key={i} className='flex rounded-[10px] items-center h-[80px] cursor-pointer sm:hover:bg-[#f3ddd0] active:bg-[#e3cec2] relative justify-between px-[1em] shadow-sm shadow-[--accent1] py-[1em]'>
                    <FontAwesomeIcon icon={faTrash} className='absolute cursor-pointer right-[5px] top-[5px] text-[0.9rem] text-[--accent1] sm:hover:scale-125 sm:active:scale-[1] sm:duration-[0.5s]'/>
                    <div className='flex gap-[.5em] items-center'>
                    <div className='w-[55px] h-[50px]'><img src={items.img} className='w-[50px] h-[50px] object-cover rounded-[50%] border-[1.5px] shadow-sm shadow-[--accent1]' alt="" /></div>
                        <p className='text-[0.9rem] break-words w-[89%]'>{(items.p.length > 42) ? items.p.substring(0, 42 - 4) : items.p}</p>
                    </div>
                    <p className='text-[0.8rem]'>{items.time}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainNotify