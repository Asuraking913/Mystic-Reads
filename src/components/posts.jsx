import React from 'react'
import thumb from "../assets/likes.svg"
import comment from "../assets/comment.png"
import { Link } from 'react-router-dom'

function Post({profile, username, active, post, comments, likes}) {
  return (
    <div className='w-[100%] relative rounded-[10px] flex gap-[1em] shadow-md shadow-[--accent1] bg-[--accent1] p-[2em]'>
        <div><img src={profile} className='w-[150px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover h-[120px]' alt="" /></div>
        <div className='w-[100%] flex gap-[.2em] flex-col'>
          <h2 className='text-2xl roboto font-bold text-[--accent]'>{username}</h2>
          <h4 className='text-[.9rem] text-[--bg]'>{active}</h4>
          <p className='text-[--bg] line roboto'>{post}</p>
          <div className='flex w-full gap-[2em] mt-[.2em]'>
              <p>
                <span className='flex items-center justify-center roboto font-bold gap-[1em] text-[--accent] text'><img src={thumb} className='w-[30px] ' alt="" />{likes}</span>
              </p>
              <p>
                <span className='flex items-center justify-center roboto font-bold gap-[1em] text-[--accent] text'><img src={comment} className='w-[28px] ' alt="" />{comments}</span>
              </p>
          </div>
          <Link className='text-[1rem] absolute right-[2em] bottom-[1em] text-[--bg] font-sans underline'>
            View Post
          </Link>
        </div>
    </div>
  )
}

export default Post