import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FeedsCont({img, post, username, descrip}) {
  return (
    <div className='flex gap-[1em] w-full flex-col p-[1em]'>
        <div className='flex items-center justify-between'>
            <img src={img} className='w-[60px] h-[60px] object-cover rounded-[50%]' alt="" />
            <div className='text-center'>
              <h2 className='sm:text-2xl text-xl roboto font-semibold '>{username}</h2>
              <p className='orb'>{descrip}</p>
            </div>
            <FontAwesomeIcon className='text-xl text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faArrowsToDot}/>
        </div>
        <p>{post}</p>
    </div>
  )
}

export default FeedsCont