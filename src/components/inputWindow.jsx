import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function InputMessage({userImage, username}) {
  return (
    <div>
        <div className='flex justify-between items-center p-[1em]'>
            <h2 className='text-2xl roboto font-bold text-[--accent1]'>{"Ditan"}</h2>
            <Link className='text-[--accent1] hover:animate-spin'>
                <FontAwesomeIcon icon={faEllipsis} className='text-3xl'/>
            </Link>
        </div>
    </div>
  )
}

export default InputMessage