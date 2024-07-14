import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/nav'
import edit from '../assets/edit.svg'
import { Link } from 'react-router-dom'
import likes from "../assets/likes.svg"
import posts from "../assets/post1.svg"
import book from "../assets/book.svg"
import person from "../assets/person4.jpeg"
import user from "../assets/user.svg"
import user1 from "../assets/user1.png"
import update from "../assets/update.svg"
import green from "../assets/green.png"
import location from "../assets/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/posts'

function Profile() {

    const [file, setfile] = useState(false);
    const [file1, setFile1] = useState(false)
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(user)
    const [error, setError] = useState("")
    const profileInput = useRef(null)
    const coverInput = useRef(null)

    const handleProfileBtn = () => {
      if(profileInput.current) {
        profileInput.current.click()
      }
    }

    const handleCoverBtn = () => {
      if(coverInput.current) {
        coverInput.current.click()
      }
    }

    const handleCover = (event) => {
      const file = event.target.files[0]
      if(file && allowedExtensions(file.name)) {
        console.log(file.name, file)
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result)
      }

      reader.readAsDataURL(file)
      setCover(!file)
      return
      }
      setError("Invalid file")
      setInterval(() => {
        setError("")
      }, [4000])
      event.target.value = ""
    }

    const handleProfile = (event) => {
      const file = event.target.files[0]
      if(file && allowedExtensions(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result)
      }

      reader.readAsDataURL(file)
      setFile1(!file1)
      return
      }
      setError("Invalid file")
      setInterval(() => {
        setError("")
      }, [4000])
      event.target.value = ""
      setFile1(!file)
    }

    const allowedExtensions = (filename) => {
      const listExtensions = ['png', "jpeg", 'jpg']
      const newExt = filename.split(".").pop()
      return listExtensions.includes(newExt)
    }

    const postList = [
      { 
        likes: 20, 
        comments: 15,
        active: "now", 
        postText: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
        descrip: "Frontend developer"
      },
      { 
        likes: 45, 
        comments: 30,
        active: "2 hours ago", 
        postText: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
        descrip: "Full Stack Web developer"
      }, 
      { 
        likes: 100, 
        comments: 73,
        active: "15 hours ago", 
        postText: "After spending an hour at Mystic Reads!!, I still i have to pay with two more",
        descrip: "DevOps Engineer"
      }
    ]

  return (
    <article className='min-h-[150vh]'>
      {error && <p className='text-2xl rounded-[1em] animate-bounce text-white roboto absolute z-[1000] bg-[--accent1] p-[.5em] px-[1em] left-[45%] top-[4em]'>{error}</p>}
      <Nav />
      <div className='h-[50vh] relative w-full linear'>
        <Link onClick={handleCoverBtn} className='absolute right-[1em] flex gap-[.2em] roboto font-bold text1 justify-center items-center hover:scale-110 duration-[0.5s] top-[90%]'>
          <img src={update} alt="" />
          Change Photo
        </Link>
        <input type="file" className='hidden' name="file" onChange={handleCover} id="cover" ref={coverInput} />
      <img src={cover} className='h-full w-full object-cover' alt="" />


          <div className='min-h-[80vh] overflow-hidden py-[1em] flex flex-col items-center justify-center z-[20] top-[40%] left-[--pdx] shadow-md shadow-[--accent1] absolute rounded-[10px] bg-[--accent1] gap-[1em] px-[1.5em] w-[380px]'>
             <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[200px] w-[200px]'>
                <img src={profile} className=' rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
                <img src={update} onClick={handleProfileBtn} className='absolute cursor-pointer top-[80%] right-[1.5em] hover:scale-125 duration-[0.5s] ' alt="" />
                <input type="file" className='hidden' onChange={handleProfile} ref={profileInput} name="file" id="profile" />
             </div>
             <h2 className='text-2xl font-bold roboto text-[--bg]'>Asura King913</h2>
             <div>
                <p className='line text-center font-sans italic text-[0.9rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis minima velit aut, eveniet perspiciatis? Lorem ipsum dolor sit amet.</p>
             </div>
             <div className='flex justify-between gap-[2em]'>
                <Link className='px-[1em] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                  <FontAwesomeIcon icon={faUserPlus}/>
                  <p>Follow</p>
                </Link>
                <Link className='px-[1em] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                  <FontAwesomeIcon icon={faMessage}/>
                  <p>Message</p>
                </Link>
             </div>
             <div className='w-[120%] border-[1.5px] border-[--accent]'></div>
             <div className='w-full flex flex-col gap-[.5em]'>
                <p className='flex justify-between items-center'>
                  <span className='flex items-center text-[1rem] roboto text-[--bg] font-bold'><img src={location} className='w-[25px]' alt="" />Location:</span>
                    <span className='text-[--bg] roboto'>Nigeria</span>
                </p>
                <p className='flex justify-between items-center'>
                  <span className='flex items-center text-[1rem] roboto text-[--bg] font-bold'><img src={likes} className='w-[25px]' alt="" />Likes:</span>
                  <span className='text-[--bg] roboto'>2 Likes</span>
                </p>
                <p className='flex justify-between items-center'>
                  <span className='flex items-center text-[1rem] roboto text-[--bg] font-bold'><img src={user1} className='w-[25px]' alt="" />Joined:</span>
                  <span className='text-[--bg] roboto'>Member Since Dec 05, 2022</span>
                </p>
             </div>
             
          </div>
      </div>
      <div className='h-[60px] items-center justify-center px-[4em] flex relative bg-[--accent1]'>
      <ul className='flex ml-[8em] gap-[10em]'>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={posts} title='Posts' className='w-[40px] h-[50px]' alt="" /></Link>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={book}  title='Puslished' className='w-[40px] h-[50px]'alt="" /></Link>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={likes} title='Likes' className='w-[40px] h-[50px]' alt="" /></Link>
        </ul>
      </div>
      <section className='h-auto p-[4em] w-[100%] flex flex-col justify-end items-end'>
        <Post profile={profile}/>
      </section>
    </article>
  )
}

export default Profile