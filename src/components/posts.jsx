import React from 'react'

function Post({profile}) {
  return (
    <div className='w-[60%] rounded-[10px] flex gap-[1em] shadow-md shadow-[--accent1] bg-[--accent1] p-[2em]'>
        <img src={profile} className='w-[120px] rounded-[50%] object-cover h-[120px]' alt="" />
        <div className=''>
          <h2>Israel</h2>
          <h4>10 hours ago</h4>
        </div>
    </div>
  )
}

export default Post