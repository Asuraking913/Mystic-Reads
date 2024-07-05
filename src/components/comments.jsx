import React from 'react'

function Comments({comment, username, img, descrip }) {
  return (
    <div className='w-[300px] flex flex-col justify-between p-[0.5em] relative h-[200px] border-dashed border-2 border-[--accent1]'>
        <p className='roboto italic text-[1rem]'>{comment}</p>
        <div className='p-[1em] text-left'>
            <p className='orb'>{username}</p>
            <p className='roboto font-semibold'>{descrip}</p>
            <img src={img} className='w-[70px] absolute right-[-1.5em] bottom-[5px] h-[70px] object-cover rounded-[50%]' alt="Users image" />
        </div>
    </div>
  )
}

export default Comments