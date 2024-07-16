import React from 'react'
import { Link } from 'react-router-dom'

function FeedNav() {
  return (
    <div className='bg-[--accent1] z-[5] h-[60px] w-full sticky top-[3.74em] my-[1em] px-[--pdx]'>
        <div className='h-full w-full sm:px-[8em]'>
            <ul className='flex items-center  h-full w-full justify-between'>
                <Link className='text-xl relative sm:hover:underline sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] rounded-[5px] font-bold text-white roboto'>
                    Feeds
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link className='text-xl relative sm:hover:underline sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] rounded-[5px] font-bold text-white roboto'>
                    Messages
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>1</div>
                </Link>
                <Link className='text-xl sm:hover:underline sm:duration-[0.5s] sm:hover:text-[--accent1] sm:hover:bg-gray-200 p-[.5em] relative rounded-[5px] font-bold text-white roboto'>
                    Notifications
                    <div className='bg-red-500 h-[15px] items-center flex justify-center w-[15px] text-[0.5em] rounded-[50%] text-white roboto absolute top-[10px] right-[4px]'>2</div>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default FeedNav