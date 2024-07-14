import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import edit from '../assets/edit.svg'
import { Link } from 'react-router-dom'
import likes from "../assets/likes.svg"
import posts from "../assets/post1.svg"
import book from "../assets/book.svg"
import person from "../assets/person4.jpeg"
import user from "../assets/user.svg"
import update from "../assets/update.svg"

function Profile() {

    const [file, setfile] = useState(false);
    const [file1, setFile1] = useState(false)
    const [image, setImage] = useState(null);
    const [profile, setProfile] = useState(user)
    const [error, setError] = useState("")

    const handleFile = () => {
      setfile(!file)
    }

    const handlefile1 = () => {
      setFile1(!file)
    }

    const handleImage = (event) => {
      const file = event.target.files[0]
      if(file && allowedExtensions(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result)
      }

      reader.readAsDataURL(file)
      setfile(!file)
      return
      }
      setError("Invalid file")
      setInterval(() => {
        setError("")
      }, [4000])
      event.target.value = ""
      setfile(!file)
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

  return (
    <article className='min-h-[150vh]'>
      {error && <p className='text-2xl rounded-[1em] animate-bounce text-white roboto absolute z-[1000] bg-[--accent1] p-[.5em] px-[1em] left-[45%] top-[4em]'>{error}</p>}
      <Nav />
      <div className='h-[50vh] relative w-full linear'>
          <div className='h-[80vh] flex flex-col  z-[20] top-[40%] left-[--pdx] shadow-md shadow-[--accent1] absolute rounded-[10px] bg-[--accent1] gap-[1em] px-[1.5em] w-[380px]'>
              <div className='h-[50%] flex items-center justify-center'>
                <img src={profile} className='w-[200px] border-2 border-[--accent1] linear shadow-sm shadow-black object-cover rounded-[50%] h-[250px]' alt="" />
                <Link onClick={handlefile1} className='absolute top-[35%] right-[6em] hover:scale-125 duration-[0.5s]'><img src={update} className='w-[30px] h-[30px] ' alt="" /></Link>
              </div>
              <div className=' text-center flex flex-col items-center gap-[.5em]'>
              {file1 && <input className='text-[1rem] w-[50%]' type='file' name='file' onChange={handleProfile} id='file'/>}
                <h2 className='text-center text-[--accent] roboto text-xl font-bold'>Alexandro Garnacho</h2>
                <p className='italic text-[--wh]'>Active: now</p>
                <div className='text-left flex flex-col gap-[1em] pr-[4em]'>
                  <h2 className='text-xl text-[--accent] font-bold roboto'>About Me</h2>
                  <p className='roboto text-[1.1rem] text-[--wh] line'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, fuga. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div>
                <p className='text-[1.1rem] text-[--wh]'>Location:  Rivers State</p>
              </div>
          </div>
          <img src={image} className='w-full h-full  object-cover' alt="" />
      </div>
      <div className='h-[60px] items-center justify-center px-[4em] flex relative bg-[--accent1]'>
      <ul className='flex ml-[8em] gap-[10em]'>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={posts} title='Posts' className='w-[40px] h-[50px]' alt="" /></Link>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={book}  title='Puslished' className='w-[40px] h-[50px]'alt="" /></Link>
          <Link className='hover:bg-[--accent] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={likes} title='Likes' className='w-[40px] h-[50px]' alt="" /></Link>
        </ul>
        <Link onClick={handleFile} className=' duration-[0.5s] right-[1em] flex absolute top-[-2em] items-center roboto font-bold text-black'>
          {!file && <p className='flex text1 items-center gap-[.3em] text-xl hover:scale-110 duration-[0.5s]' id='edit'><img src={edit} className='w-[30px] h-[30px]' alt="" /> Edit</p>}
        </Link>
        {file && <input className='absolute top-[-2em] right-0' type='file' name='file' onChange={handleImage} id='file'/>}
        
      </div>
      <div className='min-h-[60vh]  w-full'>

      </div>
    </article>
  )
}

export default Profile