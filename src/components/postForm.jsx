import React from 'react'

function PostForm() {
  return (
    <div className='sm:px-[--pdx] px-[1em]'>
        <form action="#">
            <p>
                <label htmlFor="post" className='roboto text-xl font-bold text-[--accent1]'>Share Your opinion</label>
                <textarea placeholder='Write something...' name="post" id="post" className='w-full rounded-[5px] outline-none text-[--accent1] bg-[#ffffff2c] shadow-sm shadow-[--accent1] resize-none p-[.5em]' cols="30" rows="5"></textarea>
            </p>
            <input type="submit" value="Submit" className='p-[.5em] px-[1em] bg-[--accent1] sm:hover:bg-[#ffffff2c] text-white roboto rounded-[5px] hover:duration-[0.5s] hover:scale-105 hover:shadow-md hover:shadow-[--accent1] hover:text-[--accent1] cursor-pointer active:bg-[#ffffff2c] active:scale-100 active:duration-[0.1s]' />
        </form>
    </div>
  )
}

export default PostForm