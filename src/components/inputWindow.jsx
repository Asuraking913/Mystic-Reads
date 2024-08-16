import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createElement, useContext, useEffect, useState } from 'react'
import AuthContext from '../utils/fetchUserPic'
import Axios913 from '../utils/Axios913'

function InputMessage({foreignUserId, relation_id, smsHistory}) {

  const [newSms, setNewSms] = useState("")
  const [receive, setReceive] = useState('')
  const {socket} = useContext(AuthContext)
  const {userId} = useContext(AuthContext)
  const [currentDate, setCurrentDate] = useState() 
  const listDays = []


  // console.log(userId)
  // console.log(foreignUserId)
  // console.log(relation_id)

//   useEffect(() => {
//     socket.on('receive_message', (data) => {
//         if (userId in data ) {
//           if ("sms" in data[`${userId}`]) {
//           setReceive(data[`${userId}`].sms)

//           }
//       }
//     })
// })

const handleDays = (list) => {
  if(list.length > 0) {
    list.forEach(items => {
      if (!listDays.includes(items.day)) {
      listDays.push(items.day)
    }
    })
  }
}

const handleDate = (smsList, targetDay) => {
  targetDay && targetDay.reverse().forEach(items => {
    // headers
       const chatField = document.getElementById('smsBox');
       const newBtn = document.createElement('button')
       let day = items
       const newDiv = document.createElement('div')
       newDiv.classList.add('w-full', 'text-center', 'text-[1em]', 'p-4')
       newBtn.classList.add('outline-none', 'text-[white]', 'px-[1em]', 'py-[.3em]', 'roboto', 'opacity-90', 'rounded-[1.3em]', 'bg-[--accent1]', 'shadow-sm', 'shadow-[--accent1]')
       newBtn.innerHTML = day
       newDiv.append(newBtn)
       chatField.appendChild(newDiv)
       chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
       const inbox = document.getElementById('sms')
       inbox.value = ""

    smsList && smsList.forEach(item => {
        if (item.day == items & item.userId == userId) {
        let newUserSms = item.content
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

      if (item.day == items & item.userId == foreignUserId) {
        let newUserSms = item.content
        const chatField = document.getElementById('smsBox');
        const newElement =document.createElement('p')
        newElement.style.backgroundColor = ''
        newElement.classList.add('text-[1rem]',  'bg-[--accent]', "mt-[.1em]", 'self-start', 'px-[.8em]',  'p-[.2em]', 'text-white', 'rounded-r-[1em]', 'rounded-l-[1em]','sm:max-w-[400px]')
        newElement.innerHTML = newUserSms
        chatField.appendChild(newElement)
        chatField.scrollTo({top : chatField.scrollHeight, behavior : 'smooth'})
      }

    })

  })
}

useEffect(() => {
  handleDays(smsHistory)
  handleDate(smsHistory, listDays)

}, [smsHistory])


  const sendMessage = (event) => {
    

    console.log('event')



    console.log(socket.connected)    

    if (newSms === "") {
      return
    }

    socket.emit("send_message", {'userId' : userId, targetId : foreignUserId, relationId : relation_id, "sms" : newSms })


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