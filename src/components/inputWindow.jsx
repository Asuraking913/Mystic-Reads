import { faEllipsis, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user1 from "../assets/user.svg"

function InputMessage() {

  const [newSms, setNewSms] = useState("")
  const [receive, setReceive] = useState('')

  const sendMessage = (event) => {
    if (newSms === "") {
      return
    }
    event.preventDefault()
    const newUserSms = newSms.trim();
    if (newUserSms) {
    const chatField = document.getElementById('smsBox');
    const newElement =document.createElement('p')
    newElement.style.backgroundColor = ''
    newElement.classList.add('text-[1rem]',  'bg-[--accent1]', "mt-[1em]", 'px-[.8em]',  'p-[.2em]', 'text-white', 'rounded-l-[1em]', 'rounded-tr-[.5em]', 'max-w-[400px]')
    newElement.innerHTML = newUserSms
    chatField.appendChild(newElement)
    chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
  }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUserSms = receive.trim();
    if (newUserSms) {
    const chatField = document.getElementById('smsBox');
    const newElement =document.createElement('p')
    newElement.style.backgroundColor = ''
    newElement.classList.add('text-[1rem]',  'bg-[--accent]', "mt-[1em]", 'self-start', 'px-[.8em]',  'p-[.2em]', 'text-white', 'rounded-r-[1em]', 'rounded-l-[1em]', 'max-w-[400px]')
    newElement.innerHTML = newUserSms
    chatField.appendChild(newElement)
    chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
    console.log(newElement)
  }
  }

  return (
    <div className='flex flex-col z-[300] justify-center px-[1.5em] absolute bottom-[4em] w-full'>
      <div className='h-[65vh] break-words flex flex-col gap-[.3em] items-end overflow-scroll hide-scrollbar p-[.3em]' id='smsBox'>

      {/* <p className='justify-self-start '>sdfsdfsfd</p> */}
      </div>
          <div className='relative mt-[.5em]'>
            <form action="" className='absolute w-full' >
              <p className='relative'>
                <FontAwesomeIcon onClick={sendMessage} icon={faPaperPlane} className='text-[1rem] absolute right-[.3em] hover:scale-110 duration-[0.2s] cursor-pointer bg-[--accent1] text-white p-[1em] rounded-[50%] top-[.2em]'/>
                <textarea name="sms" onChange={(event) => (setNewSms(event.target.value))} id="sms" cols="30" className='p-[.8em] resize-none py-[1em] h-auto hide-scrollbar shadow-md shadow-[--accent1] rounded-[4em] w-full pl-[1em] line2 outline-none pr-[3.5em] pb-[1em]' rows="1"></textarea>
              </p>
            </form>
          </div>
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis fuga repellat dolores consequuntur at possimus aperiam accusamus, quas explicabo reprehenderit sed pariatur enim asperiores placeat quaerat libero sint tempore rerum. */}
    </div>
  )
}

export default InputMessage