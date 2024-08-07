import React, { useState } from 'react'
import Axios913 from '../utils/Axios913'

function PostForm({onNew, New, onWrite, Write}) {

  const [content, setContent] = useState("")

  const handleNew = () => {
    onNew(!New)
    setInterval(() => {
      onNew(false)
    }, )
    onWrite(!Write)
    console.log('event')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      content : content
    }

    const response = await Axios913.post("/api/user_posts", data).then(response => console.log(response.data)).catch((err) => console.log("An error Occurred", err))
    handleNew()
  }

  return (
    <div className='sm:px-[--pdx] px-[1em]'>
        <form action="#" onSubmit={handleSubmit}>
            <p>
                <label htmlFor="post" className='roboto text-xl font-bold text-[--accent1]'>Share Your opinion</label>
                <textarea required placeholder='Write something...' onChange={(e) => (setContent(e.target.value))} name="post" id="post" className='w-full rounded-[5px] outline-none text-[--accent1] bg-[#ffffff2c] shadow-sm shadow-[--accent1] resize-none p-[.5em]' cols="30" rows="5"></textarea>
            </p>
            <input type="submit" value="Submit" className='p-[.5em] px-[1em] bg-[--accent1] sm:hover:bg-[#ffffff2c] text-white roboto rounded-[5px] hover:duration-[0.5s] hover:scale-105 sm:hover:shadow-md hover:shadow-[--accent1]  sm:hover:text-[--accent1] cursor-pointer active:text-[--accent1] active:bg-[#ffffff2c] active:scale-100 active:duration-[0.1s]' />
        </form>
    </div>
  )
}

export default PostForm