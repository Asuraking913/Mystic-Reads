import React from 'react'

function Post({profile, username, active, post}) {
  return (
    <div className='w-[100%] rounded-[10px] flex gap-[1em] shadow-md shadow-[--accent1] bg-[--accent1] p-[2em]'>
        <img src={profile} className='w-[250px] rounded-[50%] object-cover h-[120px]' alt="" />
        <div className=''>
          <h2>{username}</h2>
          <h4>{active}</h4>
          <p>{post}</p>
        </div>
    </div>
  )
}

export default Post