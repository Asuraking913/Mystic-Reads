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

// Swiper
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

function Topic() {

    const topicList = [
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
            img: story5,
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

    const topic = topicList.map((items, i) => (<SwiperSlide key={i} className='h-[370px] z-[0] flex flex-col gap-[.5em]'>
        <img src={items.img} className='sm:w-[200px] z-[-30] object-cover h-[200px] sm:h-[250px] rounded-[1em]' alt="" />
        <h3 className='text-[1.1rem] roboto font-bold text-[--accent]'>{items.h3}</h3>
        <div className='flex sm:flex-row flex-col justify-between'>
          <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon className='' icon={faEye}/>{items.views}</p>
          <p className='flex items-center gap-[1em] text-[--accent1] orb'><FontAwesomeIcon icon={faHeart}/>{items.likes}</p>
        </div>
        <div className='flex items-center justify-center'>
          <Link className='text-[.9rem] active:scale-[0.9] sm:text-[1.1rem] sm:hover:scale-110 duration-[0.5s] active:text-white active:bg-[accent] hover:text-white hover:bg-[--accent] w-full text-center border-[2px] text-[--accent] border-[--accent] roboto rounded-[.5em]'>Start Reading</Link>
        </div>
      </SwiperSlide>))

  return (

    <>
        <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        autoplay = {{delay: 9900}}
        navigation
        pagination = {{clickable: true}}
         className='sm:flex hidden p-[1em] sm:z-[0] gap-[1em] topic'>
            {topic}
        </Swiper>
        <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={3}
        slidesPerView={3}
        navigation
        pagination = {{clickable: true}}
         className='sm:hidden flex p-[1em] px-0 gap-[0em] topic'>
            {topic}
        </Swiper>
    </>
  )
}

export default Topic