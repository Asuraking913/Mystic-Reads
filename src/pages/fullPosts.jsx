import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/nav";
import { useLocation, useNavigate } from "react-router-dom";
import Foot from "../components/footer";
import Axios913 from "../utils/Axios913";
import user from "../assets/user.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../utils/fetchUserPic";
import Truncate from "../utils/truncate";
import SubComment from "../components/subComment";

const FullPost = () => {

    const {userId : id} = useContext(AuthContext)


    const location = useLocation()
    const [postId, setPostId] = useState("")
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const [img, setImg] = useState(user)
    const [userName, setUserName] = useState("")
    const [date, setDate] = useState()
    const [likes, setLikes] = useState(0)
    const [likeStatus, setLikeStatus] = useState(false)
    const [commentNo, setCommentNo] = useState(0)
    const [comment, setComment] = useState([])
    const [content, setContent] = useState()
    const [form, setForm] = useState(false)
    const [btn, setBtn] = useState(true)
    const [remark, setRemark] = useState("")
    const [userId, setUserid] = useState(id)

    const handleImage = async (id) => {
        const response = await Axios913.get(`/api/fetch_feeds/images/${id}`).then(response => {
            if (response.data.data.img)
          setImg(`data:${response.data.data.img.mime};base64,${response.data.data.img.data}`)
        })
      }

    useEffect(() => {
        let params = new URLSearchParams(location.search)
        const [key, value] = params.entries()

        if (key[0]) {
        for (const [key, value] of params.entries()) {
            const handlePost = async () => {
                const response = await Axios913.get(`/api/view_post/${key}`).then(
                    response => {
                        setCommentNo(response.data.commentNo)
                        setLikeStatus(response.data.likeStatus[0])
                        setContent(response.data.content)
                        setLikes(response.data.likes)
                        setDate(response.data.date)
                        setUserName(response.data.userName)
                        setUserid(response.data.userId)
                        console.log(response.data)
                        const postComments = response.data.comments.map(items => (
                            {
                              userName : items.userName, 
                            userId : items.userId,
                            content : items.comment
                          }
                        ))
                        setComment([...postComments])
                    }

            ).catch((err) => console.log(err))
            }
            setPostId(key)

            handlePost()
            return
        }
    }

        navigate("/profile")

        
    }, [])

    useEffect(() => {
      handleImage(userId)
    }, [userId])

    const handleSubmit = async () => {
        handleComment()
        setRemark("")
        setBtn(!btn)
        setForm(!form)
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
    
          }
        }).catch((err) => (console.log(err)))
    
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

      // if (comment[0]) {
        const commentList = comment.map((items, i) => <SubComment key={i} userName={items.userName} userId={items.userId} content={items.content}/>)
      // }

    return (
        <>
            <Nav />
            <section className=" p-[0.5em] mt-[4em] sm:mt-[.5em] sm:my-[.5em] mx-[1em] sm:mx-[--pdx] ">
                <div className="flex h-auto  justify-start flex-col gap-[1em] bg-[#ffffff2c] shadow-sm shadow-[--accent1] rounded-[1em] py-[1em]">
                    <div className="flex items-center gap-[1em]">
                    <div className='pl-[1em]'><button onClick={() => {
                      navigate(`/foreignView?${userId}`)
                    }}><img src={img} className='sm:w-[60px] w-[50px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover sm:h-[60px] h-[50px]' alt="" /></button></div>
                        <div className="">
                            <p className="sm:text-2xl text-xl roboto font-bold text-[--accent1]">{userName}</p>
                            <p className="font- text-[0.7rem]">{date}</p>
                        </div>
                    </div>
                    <div className="sm:px-[1em]">
                        <p className="roboto text-[0.95rem] pl-[.5em] italic w-[90%] sm:w-[80%]">
                            {
                                !content ? ""
                                :
                                <Truncate text={content} maxLength={600} subLength={580}/>
                            }
                        </p>
                    </div>
                    <div className="min-h-[10vh] sm:pl-[1em] mt-[1em] w-full flex flex-col gap-[.5em]">
                          {
                            commentList
                          }
                    </div>
                   <div className="text-[1rem] flex justify-start px-[1em] gap-[2em]  ">
                        {
                            likeStatus ? 
                            <button onClick={handleLike}  className='flex p-[.5em] items-center gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent] text-[--bg] shadow-sm shadow-[--accent1]'>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <p className='inline'>{likes}</p>
                        </button>

                        :

                        <button onClick={handleLike}  className='flex p-[.5em] items-center gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--accent] shadow-sm shadow-[--accent1]'>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <p className='inline'>{likes}</p>
                        </button>
                        
                        }


                        <button onClick={handleCommentForm}  className='flex items-center p-[.5em] gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
                            <FontAwesomeIcon icon={faComment}/>
                            <p className='inline'>{commentNo}</p>
                        </button>

                                      
                   </div>
                   {
                        form ? 

                            <form onSubmit={(e) => e.preventDefault()} className=" px-[1em]">
                              <p className='relative'>
                                <label htmlFor="#" className='text-[1rem] roboto text-[--accent1] font-bold'>Comment</label>
                                <input onChange={(e) => setRemark(e.target.value)} type="text" required className='sm:w-[60%] w-full block bg-[#ffffff2c] shadow-sm rounded-[2em] outline-none shadow-[--accent1] py-[.4em] p-[.5em]' />
                                <FontAwesomeIcon onClick={handleSubmit} icon={faPaperPlane} className='absolute bg-[--accent1] text-white p-[.5em] right-[.2em] sm:right-[40.5%] top-[28px] flex items-center justify-center rounded-[50%] text-[0.95rem]'/>
                              </p>
                            </form>

                            :

                            ""
                        } 
                </div>


            </section>
            <Foot />

        </>
    )


}

export default FullPost