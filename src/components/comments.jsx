import React from 'react'

function Comments({comment, username, img, descrip }) {
  return (
    <div className='w-[250px] flex flex-col justify-between p-[0.5em] relative h-[200px] border-dashed border-2 rounded-[1em] border-[#593f3ba8]'>
        <p className='roboto italic text-[1rem] text-[--accent] text'>{comment}</p>
        <div className='p-[1em] text-left'>
            <p className='orb text-[--accent1]'>{username}</p>
            <p className='roboto text-[--accent1] font-semibold'>{descrip}</p>
            <img src={img} className='w-[60px] absolute right-[-1.5em] bottom-[5px] h-[60px] object-cover rounded-[50%]' alt="Users image" />
        </div>
    </div>
  )
}

export default Comments