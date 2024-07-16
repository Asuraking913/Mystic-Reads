import { faArrowsToDot, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function FeedsCont({img, post, username, descrip}) {

  const [postNav, setPostNav] = useState(false)

  const handlePostNav = () => {
    setPostNav(!postNav)
  }

  return (
    <div className='flex gap-[1em] w-full flex-col relative p-[1em]'>
        <div className='flex items-center justify-between'>
            <img src={img} className='w-[60px] h-[60px] object-cover rounded-[50%]' alt="" />
            <div className='text-center'>
              <h2 className='sm:text-2xl text-[--accent1] text-xl roboto font-semibold '>{username}</h2>
              <p className='orb'>{descrip}</p>
            </div>
            <FontAwesomeIcon onClick={handlePostNav} className='text-xl text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faArrowsToDot}/>
        </div>
        <p className=''>{post}</p>
        { postNav &&
          <div  className='absolute top-0 w-full h-full bg-[#000000a6]'>
            <FontAwesomeIcon onClick={handlePostNav} className='text-2xl right-[1.5em] text-white absolute top-[1.5em] text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faTimes}/>

              <ul className='flex flex-col items-center justify-between h-full '>
                <Link className='flex items-center justify-center sm:hover:text-[--bg] sm:hover:bg-[--accent1] orb text-xl bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
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