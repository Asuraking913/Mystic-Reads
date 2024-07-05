import React from 'react'
import fantasy from "../assets/fantasy.jpeg"
import action from "../assets/action.jpeg"
import romance from "../assets/romance.jpeg"
import comedy from "../assets/comedy.jpeg"
import adventure from "../assets/adventure.jpeg"
import martial from "../assets/martial.jpeg"
import Genre from './genre'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Link } from 'react-router-dom'

function Body() {

  const genreImage = [
    {
      title: "Fantasy", 
      img: fantasy, 
    }, 
    {
      title: "Action", 
      img: action
    }, 
    {
      title: "Romance", 
      img: romance
    }, 
    {
      title: "Comedy", 
      img: comedy
    }, 
    {
      title: "Adventure", 
      img: adventure
    }, 
    {
      title: "Matial Arts", 
      img: martial
    }
  ]

  const genreList = genreImage.map(genre => (<SwiperSlide className='flex text-center justify-center items-center'>
        <Genre title={genre.title} img={genre.img}/>
          </SwiperSlide>))

  return (
    <>
      <section className='flex h-screen px-[--pdx]'>
        <div className='items-center gap-[2em] flex w-[100%]'>
          <div className='flex flex-col gap-[1em]'>
              <h1 className='text-[3rem] text-[--accent] uppercase font-[audio] font-bold line'><span className='text-[--accent1] block'>Read more,</span> enjoy more.</h1>
              <p className='roboto  text-[1.1rem] text-[--accent1] font-bold'>Get Lost in MysticReads fantasies and never find your way to reality </p>
              <div className='flex gap-[2em] py-[1em]'>
                  <Link className='p-[.5em] flex items-center justify-center px-[1.5em] border-2 border-[--accent] rounded-[1.5em] roboto text-[--accent] text-[1.2rem] font-bold'>
                    Free Trial
                  </Link>
                  <Link className='p-[.5em] flex items-center justify-center px-[1.5em] bg-[--accent] text-[--wh] rounded-[1.5em] roboto  text-[1.2rem] font-bold'>
                    Buy Plan
                  </Link>
              </div>
          </div>
          <div className='cursor-pointer w-[60%]'>
              <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop = {true}
              autoplay = {{delay: 4500}}
              navigation
              pagination = {{clickable: true}}
              >
                {genreList}
              </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body