import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"

function SendMessage({onUsername, onImage, onSearch}) {


    const msgList = [
        {
            img: person3, 
            username: 'Dai Tan', 
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            username: 'Tang WuTong', 
            msg: "I do too", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            username: 'Miles Morales', 
            msg: "There's actually a reason for that", 
            time: "2:14pm"
        }, 
        {
            img: person1, 
            username: 'Frodo Baggins', 
            msg: "Love sucks for some people", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            username: "Thor Odinson",
            msg: "Am leveling up my game", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            username: 'Thousand Hands Doluo', 
            msg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquam dolores voluptates qui enim?", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            username: "Hiroshi Kantana",
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            username: 'Charlie Wade',
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person2, 
            username: "Hiroshi Kantana",
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        {
            img: person4, 
            username: 'Charlie 123Wade',
            msg: "Hey there, How's the day going", 
            time: "2:14pm"
        }, 
        
    ]


  return (
    <div className='flex flex-col px-[.1em] gap-[.5em]'>
        {(onSearch === 'invalid') ? msgList.map((items, i) => (
        <div key={i} onClick={(e) => {
            onImage(items.img)
            onUsername(items.username)
            const Notification = document.getElementById('small-sms')
            const sectBox = document.getElementById('sect-box')
            const search = document.getElementById('search-sect')
            search.classList.remove('flex')
            search.classList.add('hidden')
            sectBox.classList.remove('block')
            sectBox.classList.add('hidden')
            Notification.classList.remove('hidden')
            Notification.classList.add('block')
            console.log(Notification)
        }} className='shadow-sm gap-[0em] duration-[0.3s] hover:cursor-pointer active:bg-[#f3ddd0] active:duration[0.1s] sm:hover:bg-[#f3ddd0] justify-between shadow-[--accent1] rounded-[.5em] h-[75px] w-full flex items-center p-[.5em]'>
            <div className='text-start flex items-center gap-[.5em]'>
                <div className=''><img src={items.img} className='w-[50px] h-[50px] object-cover rounded-[50%] border-[1.5px] shadow-sm shadow-[--accent1]' alt="" /></div>
                <div className=''>
                    <p className='roboto font-semibold text-[0.9rem] text-[--accent1]'>{items.username.length > 17 ? items.username.substring(0, 14) + "..." : items.username}</p>
                    <p className='roboto text-[0.8rem]'>{(items.msg.length > 27) ? items.msg.substring(0, 25) + "..." : items.msg}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[.5em]'>
                <p className='text-[0.8rem]'>{items.time}</p>
                <div className='text2 rounded-[50%] h-[15px] w-[15px] flex items-center justify-center'>
                    <p className='text-[.8em] text-white roboto font-bold'>1</p>
                </div>
            </div>
        </div>
        )) : 
        
        msgList.filter(items => (items.username.toLowerCase().includes(onSearch.toLowerCase()))).map((items, i) => (
            <div key={i} onClick={(e) => {
                onImage(items.img)
                onUsername(items.username)
                console.log(onSearch)
            }} className='shadow-sm gap-[0em] duration-[0.3s] hover:cursor-pointer hover:bg-[#f3ddd0] justify-between shadow-[--accent1] rounded-[.5em] h-[80px] w-full flex items-center p-[.5em]'>
                <div className='text-start flex items-center gap-[.5em]'>
                    <div className=''><img src={items.img} className='w-[50px] h-[50px] object-cover rounded-[50%] border-[1.5px] shadow-sm shadow-[--accent1]' alt="" /></div>
                    <div className=''>
                        <p className='roboto font-semibold text-[0.9rem] text-[--accent1]'>{items.username.length > 17 ? items.username.substring(0, 14) + "..." : items.username}</p>
                        <p className='roboto text-[0.8rem]'>{(items.msg.length > 27) ? items.msg.substring(0, 25) + "..." : items.msg}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[.5em]'>
                    <p className='text-[0.8rem]'>{items.time}</p>
                    <div className='text2 rounded-[50%] h-[15px] w-[15px] flex items-center justify-center'>
                        <p className='text-[.8em] text-white roboto font-bold'>1</p>
                    </div>
                </div>
            </div>
            )) 

        }
    </div>
  )
}

export default SendMessage