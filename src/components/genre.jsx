import React from 'react'

function Genre({img, title}) {
  return (
    <div className='sm:w-[250px] h-[200px] relative sm:h-[250px] flex flex-col gap-[.5em]'>
        <h2 className='sm:text-xl text-[1rem] text-[--accent1] font-[audio]'>{title}</h2>
        <div className='h-full sm:z-[20] w-full bg-[#]'>
            <img src={img} className='sm:w-[100%] h-[100%] object-cover' alt="genre-descripion" />
        </div>
    </div>
  )
}

export default Genre