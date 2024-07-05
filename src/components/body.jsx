import React from 'react'
import fantasy from "../assets/fantasy.jpeg"
import action from "../assets/action.jpeg"
import romance from "../assets/romance.jpeg"
import comedy from "../assets/comedy.jpeg"
import adventure from "../assets/adventure.jpeg"
import martial from "../assets/martial.jpeg"
import horror from "../assets/horror.jpeg"
import Genre from './genre'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Link } from 'react-router-dom'

// People Image
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import person5 from "../assets/person5.jpeg"
import Comments from './comments'


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
    }, 
    {
      title: "Horror", 
      img: horror
    }
  ]

  const commentsList = [
    {
      img: person1, 
      username: "Jane Doe", 
      comment: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
      descrip: "Frontend developer"
    },
    {
      img: person2, 
      username: "Samuel Tarly", 
      comment: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
      descrip: "Full Stack Web developer"
    }, 
    {
      img: person3, 
      username: "Tyrion Lannister", 
      comment: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
      descrip: "DevOps Engineer"
    }, 
    {
      img: person4, 
      username: "Margery Tyrell", 
      comment: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
      descrip: "Mobile Developer"
    }, 
    {
      img: person5, 
      username: "Khal Drogo", 
      comment: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
      descrip: "Cyber Security Expert"
    }
  ]

  const genreList = genreImage.map((genre, i) => (<SwiperSlide className='flex text-center justify-center items-center' key={i}>
        <Genre title={genre.title} img={genre.img}/>
          </SwiperSlide>))

  const commentList = commentsList.map((comment, i) => (
    <SwiperSlide key={i} className='flex text-center justify-center items-center'>
      <Comments comment={comment.comment} descrip={comment.descrip} username={comment.username} img={comment.img}/>
    </SwiperSlide>))


  return (
    <>
      <section className='flex flex-col justify-center gap-[3em] sm:mt-[2em] h-screen px-[--pdx]'>
        <div className='items-center gap-[2em] flex w-[100%] hero1'>
          <div className='flex flex-col gap-[1em]'>
              <h1 className='text-[3rem] text-[--accent] uppercase font-[audio] font-bold line'><span className='text-[--accent1] block'>Read more,</span> enjoy more.</h1>
              <p className='roboto  text-[1.1rem] text-[--accent1] font-bold'>Get Lost in MysticReads fantasies and never find your way to reality </p>
              <div className='flex gap-[2em] py-[1em]'>
                  <Link className='p-[.5em] hover:bg-[--accent] hover:text-white hover:scale-110 duration-[0.5s] flex items-center justify-center px-[1.5em] border-2 border-[--accent] rounded-[1.5em] roboto text-[--accent] text-[1.2rem] font-bold'>
                    Free Trial
                  </Link>
                  <Link className='p-[.5em] hover:bg-[--accent1] hover:scale-110 duration-[0.5s] flex items-center justify-center px-[1.5em] bg-[--accent] text-[--wh] rounded-[1.5em] roboto  text-[1.2rem] font-bold'>
                    Buy Plan
                  </Link>
              </div>
          </div>
          <div className='cursor-pointer w-[60%] target'>
              <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop = {true}
              autoplay = {{delay: 4500}}
              navigation = {true}
              pagination = {{clickable: true}}
              >
                {genreList}
              </Swiper>
          </div>
        </div>
        <div className='hero2 flex '>
          <div className='flex flex-col justify-center h-[200px] gap-[2em]'>
            <div className='flex items-center gap-[1.5em]'>
              <h2 className='text-3xl roboto text-[--accent]'>300K+</h2>
              <div className='border-2 border-[--accent] h-[50px]'></div>
              <p className='roboto font-bold text-[--accent1] text-[0.9rem]'>More than 300 thousand books read by users and still counting</p>
            </div>
            <div className='flex items-center gap-[1.5em]'>
              <h2 className='text-3xl roboto text-[--accent]'>600K+</h2>
              <div className='border-2 border-[--accent] h-[50px]'></div>
              <p className='roboto font-bold text-[--accent1] text-[0.9rem]'>600 thousand and more users signed up already</p>
            </div>
          </div>
          <div className='w-[60%]'>
              <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={2}
              loop = {true}
              autoplay = {{delay: 9900}}
              navigation
              pagination = {{clickable: true}}
              className=''
              >
                {commentList}
              </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body