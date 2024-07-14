import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import edit from '../assets/edit.svg'
import { Link } from 'react-router-dom'

function Profile() {

    const [file, setfile] = useState(false);
    const [image, setImage] = useState(null);
    const [error, setError] = useState("")

    const handleFile = () => {
      setfile(!file)
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
          <div className='h-[80vh] z-[20] top-[40%] left-[--pdx] absolute bg-white w-[350px]'>

          </div>
          <img src={image} className='w-full h-full  object-cover' alt="" />
      </div>
      <div className='h-[60px] items-center justify-end px-[4em] flex relative bg-[--accent1]'>
        <Link onClick={handleFile} className=' duration-[0.5s] flex absolute top-[-2em] items-center roboto font-bold text-black'>
          {!file && <p className='flex items-center gap-[.3em] text-xl hover:scale-110 duration-[0.5s]' id='edit'><img src={edit} className='w-[30px] h-[30px]' alt="" /> Edit</p>}
        </Link>
        {file && <input className='absolute top-[-2em] right-0' type='file' name='file' onChange={handleImage} id='file'/>}
        <ul>
          {/* <li><img src={posts} alt="" /></li>
          <li><img src={books} alt="" /></li>
          <li><img src={likes} alt="" /></li> */}
        </ul>
      </div>
    </article>
  )
}

export default Profile