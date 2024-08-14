import React, { useContext, useEffect, useState } from 'react'
import user from "../assets/user.svg"
import AuthContext from '../utils/fetchUserPic'
import Axios913 from '../utils/Axios913'

function SendMessage({onUsername, onImage, onSearch, bool, friendList}) {

    const {userId : id} = useContext(AuthContext)
    const [status, setStatus] = useState(false)

    const [msgList, setMsgList] = useState([
    ])

    const setImages = async () => {
        try {
          const newList = await Promise.all(msgList.map(async (items) => {
            try {
              const response = await Axios913.get(`/api/fetch_feeds/images/${items.userId}`);
              return {
                userId: items.userId,
                relation_id: items.relation_id,
                username: items.username,
                msg: '',
                time: '000',
                img: `data:${response.data.data.img.mime};base64,${response.data.data.img.data}`
              };
            } catch (err) {
              console.error(`Error fetching image for userId ${items.userId}:`, err);
              return {
                userId: items.userId,
                relation_id: items.relation_id,
                username: items.username,
                msg: '',
                time: '000',
                img: user
              };
            }
          }));
          setMsgList(newList);
          return newList;
        } catch (err) {
          console.error('Error in setImages:', err);
        }
      };
      

    const fetchFriends = async () => {
        const response = Axios913.get(`/api/friends_list`).then(response => {
            const new_friends = response.data.data.friendList.map(items => (
                {
                    userId : items.id,
                    relation_id : items.relation_id,
                    username : items.userName, 
                    msg : '',
                    time : '000',
                    // img : items.img
                }
            ))

            setMsgList([...new_friends])
            setStatus(!status)
        })
    }



    useEffect(() => {
        fetchFriends()
    },[])

    useEffect(() => {
        setImages()
    }, [status])


  return (
    <div className='flex flex-col px-[.1em] gap-[.5em]'>
        {(onSearch === 'invalid') ? msgList.map((items, i) => (
        <div key={i} onClick={(e) => {
            onImage(items.img)
            onUsername(items.username)
            const back = document.getElementById('back')
            back.classList.remove('hidden')
            back.classList.add('block')
            const Notification = document.getElementById('small-sms')
            const sectBox = document.getElementById('sect-box')
            const search = document.getElementById('search-sect')
            const header = document.getElementById('head')
            header.classList.remove('hidden')
            header.classList.add('flex')
            header.classList.add('py-[2em]')
            search.classList.remove('flex')
            search.classList.add('hidden')
            sectBox.classList.remove('block')
            sectBox.classList.add('hidden')
            Notification.classList.remove('hidden')
            Notification.classList.add('block')
            const box = document.getElementById('smsBox')
            const cont = document.getElementById('smscont')
            if (cont) {
                // cont.removeChild(box)
            const new_child = document.createElement('div')
            new_child.id = 'smsBox'
            new_child.classList.add('sm:h-[65vh]', 'height', 'h-[66vh]', 'h-[66vh]', 'max-h-[350px]:h-[65vh]', 'break-words', 'flex', 'flex-col', 'gap-[.3em]', 'items-end', 'overflow-scroll', 'hide-scrollbar', 'p-[.3em]')
            cont.firstChild.replaceWith(new_child)
            }
            
           
        }} className='shadow-sm gap-[0em] duration-[0.3s] hover:cursor-pointer active:bg-[#f3ddd0] active:duration[0.1s] sm:hover:bg-[#f3ddd0] justify-between shadow-[--accent1] rounded-[.5em] h-[75px] w-full flex items-center p-[.5em]'>
            <div className='text-start flex items-center gap-[.5em]'>
                <div className=''><img src={items.img} className='w-[50px] h-[50px] object-cover rounded-[50%] border-[1.5px] shadow-sm shadow-[--accent1]' alt="" /></div>
                <div className=''>
                    <p className='roboto font-semibold text-[0.9rem] text-[--accent1]'>{items.username.length > 17 ? items.username.substring(0, 14) + "..." : items.username}</p>
                    <p className='roboto text-[0.8rem]'>{(items.msg.length > 27) ? items.msg.substring(0, 25) + "..." : items.msg}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[.5em]'>
                <p className='text-[0.8rem]'>{items.time}</p>
                <div className='text2 rounded-[50%] h-[15px] w-[15px] flex items-center justify-center'>
                    <p className='text-[.8em] text-white roboto font-bold'>1</p>
                </div>
            </div>
        </div>
        )) : 
        
        msgList.filter(items => (items.username.toLowerCase().includes(onSearch.toLowerCase()))).map((items, i) => (
            <div key={i} onClick={(e) => {
                onImage(items.img)
                onUsername(items.username)
                const back = document.getElementById('back')
                back.classList.remove('hidden')
                back.classList.add('block')
                const Notification = document.getElementById('small-sms')
                const sectBox = document.getElementById('sect-box')
                const search = document.getElementById('search-sect')
                const header = document.getElementById('head')
                header.classList.remove('hidden')
                header.classList.add('flex')
                header.classList.add('py-[2em]')
                search.classList.remove('flex')
                search.classList.add('hidden')
                sectBox.classList.remove('block')
                sectBox.classList.add('hidden')
                Notification.classList.remove('hidden')
                Notification.classList.add('block')
            }} className='shadow-sm gap-[0em] duration-[0.3s] hover:cursor-pointer hover:bg-[#f3ddd0] justify-between shadow-[--accent1] rounded-[.5em] h-[80px] w-full flex items-center p-[.5em]'>
                <div className='text-start flex items-center gap-[.5em]'>
                    <div className=''><img src={items.img} className='w-[50px] h-[50px] object-cover rounded-[50%] border-[1.5px] shadow-sm shadow-[--accent1]' alt="" /></div>
                    <div className=''>
                        <p className='roboto font-semibold text-[0.9rem] text-[--accent1]'>{items.username.length > 17 ? items.username.substring(0, 14) + "..." : items.username}</p>
                        <p className='roboto text-[0.8rem]'>{(items.msg.length > 27) ? items.msg.substring(0, 25) + "..." : items.msg}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[.5em]'>
                    <p className='text-[0.8rem]'>{items.time}</p>
                    <div className='text2 rounded-[50%] h-[15px] w-[15px] flex items-center justify-center'>
                        <p className='text-[.8em] text-white roboto font-bold'>1</p>
                    </div>
                </div>
            </div>
            )) 

        }
    </div>
  )
}

export default SendMessage