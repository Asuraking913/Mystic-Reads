import { faArrowsToDot, faComment, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function FeedsCont({img, post, username, descrip}) {

  const [postNav, setPostNav] = useState(false)

  const handlePostNav = () => {
    setPostNav(!postNav)
  }

  const [likes, setLikes] = useState(20)

  return (
    <div className='flex gap-[1em] shadow-sm shadow-[--accent1] w-full flex-col relative p-[1em] rounded-[10px]'>
        <div className='flex items-center w-[100%] justify-between'>
            <Link>
              <img src={img} className='w-[60px] h-[60px] object-cover rounded-[50%] shadow-sm shadow-[--accent1]' alt="" />
            </Link>
            <div className='text-center'>
              <h2 className='sm:text-2xl text-[--accent1] text-xl roboto font-semibold '>{username}</h2>
              <p className='orb'>{descrip}</p>
            </div>
            <FontAwesomeIcon onClick={handlePostNav} className='text-xl cursor-pointer text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faArrowsToDot}/>
        </div>
        <p className=''>{post}</p>
        <div className='flex items-center justify-center gap-[2em] border-[--accent1]'>
          <Link className='flex p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
            <FontAwesomeIcon icon={faThumbsUp} className='text-xl'/>
            <p className='inline'>{likes}</p>
          </Link>
          <Link className='flex p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
            <FontAwesomeIcon icon={faComment} className='text-xl'/>
            <p className='inline'>{likes}</p>
          </Link>
        </div>
        { postNav &&
          <div  className='absolute top-0 left-0 w-full h-full rounded-[5px] bg-[#000000c5]'>
            <FontAwesomeIcon onClick={handlePostNav} className='text-2xl cursor-pointer right-[0.7em] text-white absolute top-[1.4em] text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faTimes}/>

              <ul className='flex flex-col items-center justify-between h-full '>
                <Link className='flex items-center text- justify-center sm:hover:text-[--bg] sm:hover:bg-[--accent1] orb text-xl bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Delete Post
                </Link>
                <Link className='flex items-center justify-center sm:hover:text-[--bg] sm:hover:bg-[--accent1] orb text-xl bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Report Post
                </Link>
                <Link className='flex items-center justify-center sm:hover:text-[--bg] sm:hover:bg-[--accent1] orb text-xl bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Others
                </Link>
              </ul>
          </div>
        }
    </div>
  )
}

export default FeedsCont