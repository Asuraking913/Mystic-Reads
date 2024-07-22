import React from 'react'

function PostForm() {
  return (
    <div className='sm:px-[4em] px-[1em]'>
        <form action="#">
            <p>
                <label htmlFor="post" className='roboto text-xl font-bold text-[--accent1]'>Share Your opinion</label>
                <textarea placeholder='Write something' name="post" id="post" className='w-full rounded-[5px] outline-none bg-[#ffffff38] resize-none p-[.1em] border-[--accent1] border-[.5px]' cols="30" rows="5"></textarea>
            </p>
        </form>
    </div>
  )
}

export default PostForm