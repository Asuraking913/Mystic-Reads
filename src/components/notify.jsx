import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Notify() {
  return (
    <div className='w-[70%] shadow-sm shadow-[--accent1] rounded-[1em] h-screen'>
        <div className=' p-[1em] border-b-[2px] border-b-[--accent1]'>
            <FontAwesomeIcon className='text-2xl text-[--accent1] sm:hover:scale-110 active:scale-[1]' icon={faBell}/>
        </div>
    </div>
  )
}

export default Notify