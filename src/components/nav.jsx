import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='fixed text-[--accent] font-bold top-0 right-0 w-full px-[--pdx] h-[60px] mt-[1.5em] items-center flex justify-between'>
        <a href="" className='text-2xl font-[audio]'>Mystic<span className='text-[--accent1]'>Reads</span></a>
        <nav className='roboto'>
          <ul className='flex text-[1.1rem] gap-[4em]'>
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>About</li>
            </Link>
            <Link>
              <li>Pricing</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>

        <ul className='flex gap-[2em] text-[1.1rem] items-center roboto'>
          <Link>
            <li className='border-2 border-[--accent] px-[1.5em] py-[0.5em] rounded-[2em]'>Sign Up</li>
          </Link>
          <Link>
            <li className='px-[1.5em] text-white py-[0.5em] bg-[--accent] rounded-[2em]'>Log In</li>
          </Link>
        </ul>

    </div>
  )
}

export default Nav