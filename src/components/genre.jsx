import React from 'react'

function Genre({img, title}) {
  return (
    <div className='w-[300px] rounded-[2em] relative h-[300px] flex flex-col gap-[.5em]'>
        <h2 className='text-xl text-[--accent1] font-[audio]'>{title}</h2>
        <div className='h-full z-[20]  w-full bg-[#593f3b9d]'>
        <img src={img} className='w-[100%] h-[100%] object-cover' alt="genre-descripion" />
        </div>
    </div>
  )
}

export default Genre