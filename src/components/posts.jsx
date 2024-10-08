import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import Truncate from '../utils/truncate'
import { useLocation } from 'react-router-dom'
import Axios913 from '../utils/Axios913'

function Post({profile, username, active, post, comments, likes, postId, deleted, onDelete}) {

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.pathname)
  const handleDelete = () => {
    onDelete(postId)
  }

  return (
    <div className='sm:w-[100%] relative sm:h-auto sm:rounded-[10px] rounded-[5px] flex items-center justify-center gap-[1em] shadow-md shadow-[--accent1] bg-[--accent1] p-[.5em] sm:p-[2em]'>
        <div className='sm:block hidden'><img src={profile} className='w-[150px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover h-[120px]' alt="" /></div>
        <div className='w-[100%] flex gap-[.2em] flex-col'>
          <h2 className='sm:text-2xl capitalize text-xl roboto font-bold text-[--accent]'>{username}</h2>
          <h4 className='text-[.9rem] text-[--bg]'>{active}</h4>
          <p className='text-[--bg] w-[90%] py-[.5em] sm:text-[1rem] text-[0.9rem] line roboto'><Truncate text={post} maxLength={350} subLength={290}/></p>
          {/* <p className='text-[--bg] w-[90%] py-[.5em] sm:text-[1rem] text-[0.9rem] line roboto'>{post}</p> */}
          <div className='flex w-full gap-[2em] mt-[.2em]'>
              <p>
                <span className='flex items-center text-[.9rem] justify-center roboto font-bold gap-[1em] text-[--bg] text'><FontAwesomeIcon icon={faThumbsUp} className='text-xl mr-[.1em] text-[--bg]'/>{likes}</span>
              </p>
              <p>
                <span className='flex items-center text-[.9rem] justify-center roboto font-bold gap-[1em] text-[--bg] text'><FontAwesomeIcon icon={faComment} className='text-xl mr-[.1em] text-[--bg]'/>{comments}</span>
              </p>
          </div>
          <button onClick={() => {
            navigate(`/viewPost?${postId}`)
            // console.log('event')
          }}  className='text-[1rem] absolute hover:text-[--accent] right-[1em] bottom-[1em] text-[--bg] font-sans underline'>
            View Post
          </button>
          {
            location.pathname === "/foreignView" ? 

            ""

            :

            <button onClick={async () => {
              const response = await Axios913.get(`/api/delete_post/${postId}`).then(response => {
                console.log(response.data)
                handleDelete()
              })
            }} className='text-[1rem] hover:text-[--accent] active:scale-[1] absolute right-[1em] hover:scale-125 duration-[0.5s] top-[1em] text-[--bg] font-sans underline'>
            <FontAwesomeIcon icon={faTrash}/>
          </button>
          
          }
        </div>
    </div>
  )
}

export default Post