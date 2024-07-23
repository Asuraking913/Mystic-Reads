import React from 'react'
import story1 from "../assets/story1.jpg"
import story2 from "../assets/story2.jpeg"
import story3 from "../assets/story3.jpeg"
import story4 from "../assets/story4.jpeg"
import story5 from "../assets/story5.jpeg"
import story6 from "../assets/story6.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function LibComp() {

    const novelList = [
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


  return (
    <div className='grid grid-cols-6 gap-[.5em] place-items-center'>
        {novelList.map((items, i) => (<div key={i} className='h-[370px] flex flex-col gap-[.5em]'>
        <img src={items.img} className='w-[200px] hover:scale-105 duration-[0.5s] object-cover h-[200px] sm:h-[250px] rounded-[1em]' alt="" />
        <h3 className='text-[1.1rem] roboto font-bold text-[--accent]'>{items.h3}</h3>
        <div className='flex sm:flex-row flex-col justify-between'>
          <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon className='' icon={faEye}/>{items.views}</p>
          <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon icon={faHeart}/>{items.likes}</p>
        </div>
        <div className='flex items-center justify-center'>
          <Link className='sm:text-[1.1rem] px-[.2em] active:scale-[0.95] text-[.9rem] sm:hover:scale-110 duration-[0.5s] active:text-white active:bg-[accent] hover:text-white hover:bg-[--accent] w-full text-center border-[2px] text-[--accent] border-[--accent] roboto rounded-[.5em]'>Start Reading</Link>
        </div>
      </div>))}
    </div>
  )
}

export default LibComp