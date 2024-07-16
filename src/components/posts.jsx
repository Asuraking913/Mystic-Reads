import React from 'react'
import thumb from "../assets/likes.svg"
import comment from "../assets/comment.png"
import { Link } from 'react-router-dom'
import trash from "../assets/trash.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Post({profile, username, active, post, comments, likes}) {
  return (
    <div className='sm:w-[100%] relative sm:rounded-[10px] rounded-[5px] flex items-center justify-center gap-[1em] shadow-md shadow-[--accent1] bg-[--accent1] p-[.5em] sm:p-[2em]'>
        <div className='sm:block hidden'><img src={profile} className='w-[150px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover h-[120px]' alt="" /></div>
        <div className='w-[100%] flex gap-[.2em] flex-col'>
          <h2 className='sm:text-2xl text-xl roboto font-bold text-[--accent]'>{username}</h2>
          <h4 className='text-[.9rem] text-[--bg]'>{active}</h4>
          <p className='text-[--bg] sm:text-[1rem] text-[0.9rem] line roboto'>{post}</p>
          <div className='flex w-full gap-[2em] mt-[.2em]'>
              <p>
                <span className='flex items-center text-[.9rem] justify-center roboto font-bold gap-[1em] text-[--accent] text'><img src={thumb} className='sm:w-[30px] w-[20px]' alt="" />{likes}</span>
              </p>
              <p>
                <span className='flex items-center text-[.9rem] justify-center roboto font-bold gap-[1em] text-[--accent] text'><img src={comment} className='sm:w-[28px] w-[18px]' alt="" />{comments}</span>
              </p>
          </div>
          <Link className='text-[1rem] absolute hover:text-[--accent] right-[2em] bottom-[1em] text-[--bg] font-sans underline'>
            View Post
          </Link>
          <Link className='text-[1rem] hover:text-[--accent] active:scale-[1] absolute right-[2em] hover:scale-125 duration-[0.5s] top-[1em] text-[--bg] font-sans underline'>
            <FontAwesomeIcon icon={faTrash}/>
          </Link>
        </div>
    </div>
  )
}

export default Post