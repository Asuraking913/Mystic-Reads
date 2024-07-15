import React, { useEffect } from 'react'
import fantasy from "../assets/story4.jpeg"
import action from "../assets/action.jpeg"
import romance from "../assets/romance.jpeg"
import comedy from "../assets/comedy.jpeg"
import adventure from "../assets/adventure.jpeg"
import martial from "../assets/martial.jpeg"
import horror from "../assets/horror.jpeg"
import Genre from './genre'

// Swiper
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Link, useLocation } from 'react-router-dom'

// People Image
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import person5 from "../assets/person5.jpeg"
import Comments from './comments'
import Weekly from './week'
import News from './news'
import Topic from './topic'
import Foot from './footer'
import phone from '../assets/phone.png'
import phone1 from '../assets/phone.png'

function Body() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'smooth'})
  }, [])

  useEffect(() => {
    let params = new URLSearchParams(location.search); 
    for (const [key, value] of params.entries()) {
      if(value) {
        document.getElementById(value).scrollIntoView({behavior : 'smooth'})
        
      }
    }
  }, [location])

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

// const imageList = () 

  const genreList = genreImage.map((genre, i) => (<SwiperSlide className='flex text-center justify-center items-center' key={i}>
        <Genre title={genre.title} img={genre.img}/>
          </SwiperSlide>))

  const commentList = commentsList.map((comment, i) => (
    <SwiperSlide key={i} className='flex text-center justify-center items-center'>
      <Comments comment={comment.comment} descrip={comment.descrip} username={comment.username} img={comment.img}/>
    </SwiperSlide>))


  return (
    <>
      <section className='flex flex-col justify-center gap-[3em] sm:mt-[0em] sm:py-0 pt-[2em] sm:h-screen px-[1em] sm:px-[--pdx]'>
        <div className='items-center sm:flex-row flex-col gap-[2em] flex w-[100%] hero1'>
          <div className='flex flex-col gap-[1em]'>
              <h1 className='sm:text-[3rem] text-[2rem] text-[--accent] uppercase font-[audio] font-bold line'><span className='text-[--accent1] block'>Read more,</span> enjoy more.</h1>
              <p className='roboto  text-[1.1rem] text-[--accent1] font-bold'>Get Lost in MysticReads fantasies and never find your way to reality </p>
              <div className='flex gap-[2em] py-[1em]'>
                  <Link className='p-[.5em] sm:active:scale-[1] hover:bg-[--accent] hover:text-white hover:scale-110 duration-[0.5s] flex items-center justify-center px-[1.5em] border-2 border-[--accent] rounded-[1.5em] roboto text-[--accent] text-[1.2rem] font-bold'>
                    Free Trial
                  </Link>
                  <Link className='p-[.5em] sm:active:scale-[1] hover:bg-[--accent1] hover:scale-110 duration-[0.5s] flex items-center justify-center px-[1.5em] bg-[--accent] text-[--wh] rounded-[1.5em] roboto  text-[1.2rem] font-bold'>
                    Buy Plan
                  </Link>
              </div>
          </div>
          <div className='cursor-pointer sm:z-[0]  w-[100%] sm:w-[60%] target'>
              <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
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
          <div className='w-[60%] sm:block hidden'>
              <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView={2}
              loop = {true}
              autoplay = {{delay: 9900}}
              navigation
              pagination = {{clickable: true}}
              className='w-[80%] '
              >
                {commentList}
              </Swiper>
          </div>
        </div>
      </section>
      <section className='min-h-[50vh] px-[1em] sm:px-[--pdx] flex gap-[2em] sm:flex-row flex-col pt-[2em]'>
        <div className='w-full'>
          <div className='border-b-2 border-b-[--accent1] mb-[--pdy]'>
            <h2 className='sm:text-xl text-[1.1rem] mb-[.3em] roboto font-semibold text-[--accent] '>Weekly Spotlight</h2>
          </div>
          <Weekly />
        </div>
        <div className='w-full sm:block hidden'>
        <div className='border-b-2 border-b-[--accent1] mb-[--pdy] ' id='trend'>
            <h2 className='sm:text-xl text-[1.1rem] mb-[.3em] roboto font-semibold text-[--accent] '>News & Trending</h2>
          </div>
          <News />
        </div>
      </section>
      <section className='min-h-[50vh] sm:py-[--pdy] px-[1em] sm:px-[--pdx]' id='recommend'>
        <div className='sm:z-0'>
          <ul className='flex justify-between sm:justify-normal sm:gap-[2em] border-b-2 border-[--accent1]'>
            <Link className='roboto text-[1.1rem] sm:text-xl underline underline-offset-[7px] decoration-[--accent] text-[--accent1] font-bold'>Recommended</Link>
            <Link className='roboto text-[1.1rem] sm:text-xl underline underline-offset-[7px] hover:decoration-[--accent] text-[--accent1] hover:font-bold'>Popular</Link>
            <Link className='roboto text-[1.1rem] sm:text-xl underline underline-offset-[7px] hover:decoration-[--accent] text-[--accent1] hover:font-bold'>What's New?</Link>
          </ul>
          <Topic />
        </div>
      </section>
      <section className='flex sm:flex-row flex-col sm:justify-between sm:gap-[2em] gap-[1em] sm:px-[--pdx] py-[--pdy] pt-0 px-[1em]'>
      <div className='bg-[--accent] overflow-hidden sm:text-left text-center w-full sm:p-[1em] sm:py-[1em] py-[1.5em]  sm:h-[300px] rounded-[1em] flex gap-[1em] items-center'>
          <div className='sm:w-[80%] sm:text-left px-[.2em] text-center items-center sm:items-start flex flex-col gap-[1em]'>
            <h2 className='text-2xl text-white roboto font-semibold'>Gain the best visual experience while reading stories on mystic reads</h2>
            <Link className='px-[1em] hover:bg-white hover:border-[--accent] border-2 border-transparent duration-[0.5s] w-[50%] text-center text-xl text-[--accent] text orb py-[0.5em] bg-[--bg] rounded-[2em]'>
              Read
            </Link>
          </div>
          <div className='h-[200px] sm:block hidden w-[300px]'>
            <img src={phone} alt="" />
          </div>
        </div>
        <div className='bg-[--accent] overflow-hidden sm:text-left text-center w-full sm:p-[1em] sm:py-[1em] py-[1.5em] p-[1em] sm:h-[300px] rounded-[1em] flex gap-[1em] items-center'>
          <div className='sm:w-[80%] w-full flex flex-col gap-[1em] items-center sm:items-start'>
            <h2 className='text-2xl text-white roboto font-semibold'>Join us and publish your own stories to expand the paths to wondrous fantasies</h2>
            <Link className='px-[1em] hover:bg-white hover:border-[--accent] border-2 border-transparent duration-[0.5s] w-[50%] text-center text-xl text-[--accent] text orb py-[0.5em] bg-[--bg] rounded-[2em]'>
              Publish
            </Link>
          </div>
          <div className='h-[200px] sm:block hidden w-[300px]'>
            <img src={phone} alt="" />
          </div>
        </div>
      </section>
      <Foot />
    </>
  )
}

export default Body