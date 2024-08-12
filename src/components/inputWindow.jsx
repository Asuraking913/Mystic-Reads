import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../utils/fetchUserPic'

function InputMessage() {

  const [newSms, setNewSms] = useState("")
  const [receive, setReceive] = useState('')
  const {socket} = useContext(AuthContext)

  socket.on('new_message', (data) => {
    console.log(data)
    setReceive(data.message)
  })


  const sendMessage = (event) => {

    console.log('event')


    console.log(socket.connected)

      if (newSms) {
      socket.emit("message", newSms)

      socket.off('message')
    }

    


    if (newSms === "") {
      return
    }
    event.preventDefault()
    const newUserSms = newSms.trim();
    if (newUserSms) {
    const chatField = document.getElementById('smsBox');
    const newElement =document.createElement('p')
    newElement.style.backgroundColor = ''
    newElement.classList.add('text-[1rem]', 'line',  'bg-[--accent1]', "mt-[.1em]", 'px-[.8em]',  'p-[.2em]', 'text-white', 'rounded-l-[1em]', 'rounded-tr-[.5em]', 'max-w-[90%]', 'sm:max-w-[400px]')
    newElement.innerHTML = newUserSms
    chatField.appendChild(newElement)
    chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
    const inbox = document.getElementById('sms')
    inbox.value = ""
    setNewSms(inbox.value)

  }
  }

  const handleSubmit = () => {
    const newUserSms = receive.trim();
    if (newUserSms) {
    const chatField = document.getElementById('smsBox');
    const newElement =document.createElement('p')
    newElement.style.backgroundColor = ''
    newElement.classList.add('text-[1rem]',  'bg-[--accent]', "mt-[.1em]", 'self-start', 'px-[.8em]',  'p-[.2em]', 'text-white', 'rounded-r-[1em]', 'rounded-l-[1em]','sm:max-w-[400px]')
    newElement.innerHTML = newUserSms
    chatField.appendChild(newElement)
    chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
    // console.log(newElement)
  }
  }

  useEffect(() => {
    handleSubmit()
  }, [receive])

  return (
    <div id='smscont' className='flex flex-col z-[300] justify-center px-[1.5em] absolute bottom-[4em] w-full'>
      <div className='sm:h-[65vh] height h-[66vh] break-words flex flex-col gap-[.3em] items-end overflow-scroll hide-scrollbar p-[.3em]' id='smsBox'>

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
    </div>
  )
}

export default InputMessage