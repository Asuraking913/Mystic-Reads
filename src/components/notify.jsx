import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Notify() {
  return (
    <div className='w-[100%] shadow-sm shadow-[--accent1] rounded-[1em] h-screen'>
        <div className=' p-[1em] border-b-[2px] border-b-[--accent1]'>
            <FontAwesomeIcon className='text-2xl text-[--accent1] sm:hover:scale-110 active:scale-[1]' icon={faBell}/>
        </div>
        <div className='h-full overflow-scroll hide-scrollbar'>

        </div>
    </div>
  )
}

export default Notify