import { faArrowsToDot, faComment, faPaperPlane, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Truncate from '../utils/truncate'
import Axios913 from '../utils/Axios913'
import SubComment from './subComment'
import user from "../assets/user.svg"
import AuthContext from '../utils/fetchUserPic'

function FeedsCont({post, username, descrip, like, postId, userId, likeStatus, comment_no}) {

  const [postNav, setPostNav] = useState(false)
  const [form, setForm] = useState(false)
  const [btn, setBtn] = useState(true)
  const [remark, setRemark] = useState("")
  const [likeStatus1, setLikeStatus] = useState(likeStatus)
  const [likes, setLikes] = useState(like)
  const [img, setImg] = useState(user)
  const [commentNo, setCommentNo] = useState(comment_no)
  const navigate = useNavigate()
  const [viewComment, setViewComment] = useState(false)
  const [commentList, setCommentList] = useState([])
  const {userId : authId} = useContext(AuthContext)
  const [viewLink, setVewLink] = useState(userId === authId ? 'profile' : "foreignView")

  
  // comments
  // const [commentContent, setComment] = useState(comment)


  const handleImage = async () => {
    if (userId) {
      const response = await Axios913.get(`/api/fetch_feeds/images/${userId}`).then(response => {
        if (response.status === 200) {
        setImg(`data:${response.data.data.img.mime};base64,${response.data.data.img.data}`)
      }
      }).catch((err) => {
        setImg(user)
        return
      })
    }
    
  }

  const handleCommentList = async () => {
    if (postId) {
    const response = await Axios913.get(`/api/fetch_comments/${postId}`).then(response => {
      setCommentList([...response.data.data.comments])
    }).catch((err) => {
      console.log(err, 'sdfsdf')
      setCommentList([])
    })
  }
}

  useEffect(() => {
    handleImage()
    handleCommentList()
  }, [userId, viewComment])


  const handlePostNav = () => {
    setPostNav(!postNav)
  }


  const handleCommentForm = () => {
    setForm(!form)
    setBtn(!btn)
  }

  
  const handleComment = async () => {
    const data = {
      content : remark
    }

    const response = await Axios913.post(`api/${postId}/comment`, data).then(response => {
      if (response.status == 201) {
      setCommentNo(t => (t += 1))
      setCommentList(t => ([...t, {
          commentId : userId, 
          content : remark,
          userName : username
      }]))

      }

    }).catch((err) => (console.log(err)))

  }

  const handleSubmit = async () => {
    handleComment()
    // setViewComment(true)
    setRemark("")
    setBtn(!btn)
    setForm(!form)

  }

  const handleLike = async () => {
    const response = await Axios913.post(`/api/${postId}/likes`, {}).then(response => {
      console.log(response.data)
      if (response.status == 201) {
        setLikes(t => (t +=1))
        setLikeStatus(!likeStatus)
      }

      if(response.status != 201) {
        setLikeStatus(!likeStatus)
      }
      
    })
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
            <Link to={`/${viewLink}?${userId}`}>
              <img src={img} className='w-[60px] h-[60px] object-cover rounded-[50%] shadow-sm shadow-[--accent1]' alt="" />
            </Link>
            <div className='text-center'>
              <h2 className='sm:text-xl text-[--accent1] text-[1rem] roboto font-semibold '>{username}</h2>
              <p className='orb text-[0.9rem]'>{descrip}</p>
            </div>
            <FontAwesomeIcon onClick={handlePostNav} className='text-xl cursor-pointer text-[--accent1] sm:hover:scale-125 active:duration-[0.1s] sm:active:scale-[1] sm:duration-[0.5s] duration-[0.1s]' icon={faArrowsToDot}/>
        </div>
        <Truncate text={post} maxLength={350} subLength={290}/>
        {

          commentList[0] &&
          
          <div className='mt-[1em] text-[0.9rem]'>
          {
            viewComment ?
            
            <div className='flex flex-col gap-[.5em]'>
            {
                commentList.map((items, i) => <SubComment key={i} onChange={viewComment} userName={items.userName} userId={items.commentId} content={items.content}/>)

            }
          </div>

          :

          <button onClick={() => {
            setViewComment(!viewComment)
          }} className='text-[--accent1] font-bold opacity-70 pl-[.5em] roboto'>
            View Comments
          </button>

          }
        </div>
        
        }
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
            <FontAwesomeIcon id='No-icon' icon={faComment} className='text-xl'/>
            <p className='inline'>{commentNo}</p>
          </Link>
        </div> : ""}
        {
          form ? 

          <form onSubmit={(e) => e.preventDefault()}>
            <p className='relative'>
              <label htmlFor="#" className='text-xl roboto text-[--accent1] font-bold'>Comment</label>
              <textarea  onChange={(e) => setRemark(e.target.value)} type="text" required className='w-full  px-[.5em]  resize-none bg-[#ffffff2c] h-[40px] text-[1rem] no-scrollbar hide-scrollbar shadow-sm rounded-[.5em] pt-[1em] line pr-[2.5em] sm:pr-[2.2em] outline-none shadow-[--accent1]' />
              <FontAwesomeIcon onClick={handleSubmit} icon={faPaperPlane} className='absolute bg-[--accent1]  text-white p-[.5em] right-[.2em] top-[30px] flex items-center justify-center rounded-[5px] text-[1.1rem]'/>
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