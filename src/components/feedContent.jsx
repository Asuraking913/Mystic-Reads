import { faArrowsToDot, faComment, faPaperPlane, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Truncate from '../utils/truncate'
import Axios913 from '../utils/Axios913'
import { useContext } from 'react'
import AuthContext from '../utils/fetchUserPic'
import user from "../assets/user.svg"

function FeedsCont({post, username, descrip, like, postId, userId, likeStatus}) {

  const [postNav, setPostNav] = useState(false)
  const [form, setForm] = useState(false)
  const [btn, setBtn] = useState(true)
  const [remark, setRemark] = useState("")
  const [likeStatus1, setLikeStatus] = useState(likeStatus)
  const [likes, setLikes] = useState(like)
  const [img, setImg] = useState(user)

  const {
    userName, 
    userId : id
  } = useContext(AuthContext)

  const handleImage = async () => {
    const response = await Axios913.get(`/api/fetch_feeds/images/${userId}`).then(response => {
      setImg(`data:${response.data.data.img.mime};base64,${response.data.data.img.data}`)
    })
  }

  useEffect(() => {
    handleImage()
  }, [])


  const handlePostNav = () => {
    setPostNav(!postNav)
  }


  const handleCommentForm = () => {
    setForm(!form)
    setBtn(!btn)
  }
  
  const handleComment = () => {
    setCommentNo(t => (t += 1))
  }

  const handleSubmit = async () => {

    setBtn(!btn)
    setForm(!form)
    // handleComment()
  }

  const handleLike = async () => {
    const response = await Axios913.post(`/api/${postId}/likes`, {}).then(response => {
      console.log(response.data)
      if (response.status == 201) {
        setLikes(t => (t +=1))
        setLikeStatus(!likeStatus)
      }
      
    })
    // setLikes(t => (t +=1))
  }

  const handleView = () => {
    const fullView = document.getElementById('preview');
    const preView = document.getElementById('full')
    fullView.style.display = 'block'
    preView.style.display = "none"
  }

  

  return (
    <div className='flex gap-[1em] shadow-sm shadow-[--accent1] w-full flex-col relative p-[1em] rounded-[10px]'>
        <div className='flex items-center w-[100%] justify-between'>
            <Link>
              <img src={img} className='w-[60px] h-[60px] object-cover rounded-[50%] shadow-sm shadow-[--accent1]' alt="" />
            </Link>
            <div className='text-center'>
              <h2 className='sm:text-xl text-[--accent1] text-[1rem] roboto font-semibold '>{username}</h2>
              <p className='orb text-[0.9rem]'>{descrip}</p>
            </div>
            <FontAwesomeIcon onClick={handlePostNav} className='text-xl cursor-pointer text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faArrowsToDot}/>
        </div>
        <Truncate text={post}/>
        { btn ? <div className='flex items-center justify-center gap-[2em] border-[--accent1]'>
          {
            likeStatus1 ? 

            <Link onClick={handleLike} className='flex p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--accent] shadow-sm shadow-[--accent1]'>
            <FontAwesomeIcon id='thumb' icon={faThumbsUp} className='text-xl'/>
            <p className='inline'>{likes}</p>
          </Link>

            :

            <Link onClick={handleLike} className='flex p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
            <FontAwesomeIcon id='thumb' icon={faThumbsUp} className='text-xl'/>
            <p className='inline'>{likes}</p>
          </Link>
          
          }
          <Link onClick={handleCommentForm} className='flex p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
            <FontAwesomeIcon id='comment-icon' icon={faComment} className='text-xl'/>
            <p className='inline'>0</p>
          </Link>
        </div> : ""}
        {
          form ? 

          <form onSubmit={(e) => e.preventDefault()}>
            <p className='relative'>
              <label htmlFor="#" className='text-xl roboto text-[--accent1] font-bold'>Comment</label>
              <input onChange={(e) => setRemark(e.target.value)} type="text" required className='w-full bg-[#ffffff2c] shadow-sm rounded-[2em] outline-none shadow-[--accent1] py-[.6em] p-[.5em]' />
              <FontAwesomeIcon onClick={handleSubmit} icon={faPaperPlane} className='absolute bg-[--accent1] text-white p-[.5em] right-[.2em] top-[32px] flex items-center justify-center rounded-[50%] text-[1.1rem]'/>
            </p>
          </form>

          :

          ""
        }
        { postNav &&
          <div  className='absolute top-0 left-0 w-full h-[200px]  rounded-[5px] bg-[#000000c5]'>
            <FontAwesomeIcon onClick={handlePostNav} className='text-2xl cursor-pointer right-[0.7em] text-white absolute top-[1.4em] text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] active:scale-[0.9] sm:duration-[0.5s] duration-[0.1s]' icon={faTimes}/>

              <ul className='flex flex-col items-center justify-between h-full '>
                <Link className='flex items-center text- justify-center active:duration-[.5s] active:text-white active:bg-[--accent1] orb sm:text-xl text-[1rem] bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Delete Post
                </Link>
                <Link className='flex items-center justify-center active:duration-[.5s] active:text-white active:bg-[--accent1] orb sm:text-xl text-[1rem] bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Report Post
                </Link>
                <Link className='flex items-center justify-center active:duration-[.5s] active:text-white active:bg-[--accent1] orb sm:text-xl text-[1rem] bg-[--bg] h-full w-[200px] border-2 border-[--accent1]'>
                  Others
                </Link>
              </ul>
          </div>
        }
        
    </div>
  )
}

export default FeedsCont