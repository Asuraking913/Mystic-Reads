import React from 'react'
import story1 from "../assets/story1.jpg"
import story2 from "../assets/story2.jpeg"
import story3 from "../assets/story3.jpeg"
import story4 from "../assets/story4.jpeg"
import story5 from "../assets/story5.jpeg"
import story6 from "../assets/story6.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function News() {

    const newsList = [
        {
            img: story1,
            h3: "Dolou Dalu", 
            views: 200,
            likes: 400
        }, 
        {
          img: story2,
          h3: "Dolou Dalu", 
          views: 200,
          likes: 400
        },
        {
          img: story3,
          h3: "Dolou Dalu", 
          views: 200,
          likes: 400
        },
        {
          img: story4,
          h3: "Dolou Dalu", 
          views: 200,
          likes: 400
        },
        {
          img: story6,
          h3: "Dolou Dalu", 
          views: 200,
          likes: 400
        },
        {
          img: story5,
          h3: "Dolou Dalu", 
          views: 200,
          likes: 400
        },
    ] 

    const news = newsList.map((items, i) => (
    <li key={i} className='flex gap-[1em] border-b-2 border-[--accent1] py-[.5em]'>
        <img src={items.img} className='object-cover rounded-[1em] w-[120px] h-[100px] ' alt="" />
        <div className='  w-[30%] gap-[.2em] flex justify-center flex-col'>
            <h3 className='text-xl roboto text-[--accent1]'>{items.h3}</h3>
            <div className='flex justify-between'>
                <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon className='' icon={faEye}/>{items.views}</p>
                <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon icon={faHeart}/>{items.likes}</p>
            </div>
            <div className='flex'>
                <Link className='text-[1.1rem] active:scale-[0.9] sm:hover:scale-110 duration-[0.5s] active:text-white active:bg-[accent] hover:text-white hover:bg-[--accent] px-[1em] text-center border-[2px] text-[--accent] border-[--accent] roboto rounded-[.5em]'>Read More</Link>
            </div>
        </div>
    </li>))

  return (
    <ul className='flex flex-col '>
        {news}
    </ul>
  )
}

export default News