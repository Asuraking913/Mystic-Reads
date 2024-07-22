import React from 'react'
import { Link } from 'react-router-dom'
import fantasy from "../assets/story4.jpeg"
import action from "../assets/action.jpeg"
import romance from "../assets/romance.jpeg"
import comedy from "../assets/comedy.jpeg"
import adventure from "../assets/adventure.jpeg"
import martial from "../assets/martial.jpeg"
import horror from "../assets/horror.jpeg"
import Genre from '../components/genre'

// Swiper
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// people
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import person5 from "../assets/person5.jpeg"
import Comments from '../components/comments'

function Display() {

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
    <section className='flex flex-col justify-center gap-[3em] mt-[3em] sm:mt-[0em] sm:py-0 pt-[2em] h-[83vh] sm:h-[50vh] px-[1em] sm:px-[--pdx]'>
        <div className='items-center sm:flex-row flex-col gap-[2em] flex w-[100%] hero1'>
          <div className='flex flex-col gap-[1em]'>
              <h1 className='sm:text-[3rem] text-[2rem] text-[--accent] uppercase font-[audio] font-bold line'><span className='text-[--accent1] block'>Read more,</span> enjoy more.</h1>
              <p className='roboto  text-[1.1rem] text-[--accent1] font-bold'>Get Lost in MysticReads fantasies and never find your way to reality </p>
              <div className='flex gap-[2em] py-[1em]'>
                  <Link to={"/"} className='p-[.5em] active:scale-[0.9] active:bg-[--accent] active:text-[white] sm:hover:bg-[--accent] sm:duration-[0.5s] sm:hover:text-white sm:hover:scale-110 duration-[0.05s] flex items-center justify-center px-[1.5em] border-2 border-[--accent] rounded-[1.5em] roboto text-[--accent] text-[1.2rem] font-bold'>
                    Collections
                  </Link>
                  <Link to={"/feeds"} className='p-[.5em] px-[2em] active:scale-[0.9] active:bg-[--accent1] sm:hover:bg-[--accent1] sm:hover:scale-110 duration-[0.05s] sm:duration-[0.5s] flex items-center justify-center bg-[--accent] text-[--wh] rounded-[1.5em] roboto  text-[1.2rem] font-bold'>
                    Feeds
                  </Link>
              </div>
          </div>
          <div className='cursor-pointer sm:z-[0]  w-[100%] sm:w-[60%] target'>
              <Swiper id='swiper1'
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
        </section>
  )
}

export default Display