import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user1 from "../assets/user.svg"

function InputMessage({userImage, username}) {

  return (
    <div>
        <div className='flex justify-between items-center p-[1.5em] '>
            <div className='flex w-[70%] gap-[.5em] items-center'>
            <img src={userImage} className='rounded-[50%] w-[50px] h-[50px] object-cover bg-[--bg] shadow-sm shadow-[black]' alt="" />
                <div className='w-[50%] flex flex-col justify-center'>
                    <h2 className='text-2xl roboto font-bold text-[--accent1]'>{username}</h2>
                    <p className='text-[0.8rem]'>Active 2mins ago</p>
                </div>
            </div>
            <Link className='text-[--accent1] hover:animate-spin'>
                    <FontAwesomeIcon icon={faEllipsis} className='text-3xl'/>
                </Link>
        </div>
    </div>
  )
}

export default InputMessage