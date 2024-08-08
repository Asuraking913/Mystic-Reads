import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { useLocation, useNavigate } from "react-router-dom";
import Foot from "../components/footer";
import Axios913 from "../utils/Axios913";
import user from "../assets/user.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FullPost = () => {

    const location = useLocation()
    const [postId, setPostId] = useState("")
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const [img, setImg] = useState(user)
    const [userName, setUserName] = useState("AsuraKing913")
    const [date, setDate] = useState("may 2000")
    const [likes, setLikes] = useState(0)
    const [likeStatus, setLikeStatus] = useState(false)
    const [comment, setComment] = useState(0)
    const [content, setContent] = useState(<i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magnam voluptate nesciunt voluptatibus eligendi harum cumque asperiores, quasi numquam quia. Officia rem nemo dolore, esse obcaecati nobis quidem est voluptatem!</i>)
    const [form, setForm] = useState(false)
    const [btn, setBtn] = useState(true)
    const [remark, setRemark] = useState("")

    useEffect(() => {
        let params = new URLSearchParams(location.search)
        const [key, value] = params.entries()

        if (key[0]) {
        for (const [key, value] of params.entries()) {
            const handlePost = async () => {
                const response = await Axios913.get(`/api/view_post/${key}`).then(
                    response => console.log(response.data)

            ).catch((err) => console.log(err))
            }
            setPostId(key)

            handlePost()
            return
        }
    }

        navigate("/profile")

        
    }, [])

    const handleSubmit = async () => {
        handleComment()
        console.log(form)
        setBtn(!btn)
        setForm(!form)
      }

      const handleCommentForm = () => {
        console.log('sdf')
        setForm(!form)
        setBtn(!btn)
      }


      const handleComment = async () => {
        const data = {
          content : remark
        }

        console.log(remark)
        return
        if (remark === "") {
            return
        }
    
        const response = await Axios913.post(`api/${postId}/comment`, data).then(response => {
          if (response.status == 201) {
          setComment(t => (t += 1))
    
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

    return (
        <>
            <Nav />
            <section className="min-h-[50vh] p-[0.5em]">
                <div className="flex justify-center flex-col gap-[2em] bg-[#ffffff2c] shadow-sm shadow-[--accent1] min-h-[50vh] rounded-[1em] py-[1em]">
                    <div className="flex items-center gap-[1em]">
                    <div className='sm:block hidden pl-[--pdx]'><img src={user} className='w-[80px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover h-[80px]' alt="" /></div>
                        <div className="">
                            <p className="text-2xl roboto font-bold text-[--accent1]">{userName}</p>
                            <p className="font- text-[0.8rem]">{date}</p>
                        </div>
                    </div>
                    <div className="px-[--pdx]">
                        <p className="line roboto text-[0.95rem] italic w-[80%]">
                            {content}
                        </p>
                    </div>
                   <div className="text-xl flex justify-start px-[--pdx] gap-[2em]">
                        {
                            !likeStatus ? 
                            <button onClick={handleLike}  className='flex p-[.5em] items-center gap-[.5em] rounded-[5px] sm:hover:scale-110 active:scale-[0.9] sm:active:scale-[1] active:duration-[0.1s] duration-[0.5s] bg-[--accent1] text-[--bg] shadow-sm shadow-[--accent1]'>
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
                            <p className='inline'>{comment}</p>
                        </button>

                                      
                   </div>
                   {
                        form ? 

                            <form onSubmit={(e) => e.preventDefault()} className="px-[3.5rem]">
                              <p className='relative'>
                                <label htmlFor="#" className='text-xl roboto text-[--accent1] font-bold'>Comment</label>
                                <input onChange={(e) => setRemark(e.target.value)} type="text" required className='w-[60%] block bg-[#ffffff2c] shadow-sm rounded-[2em] outline-none shadow-[--accent1] py-[.6em] p-[.5em]' />
                                <FontAwesomeIcon onClick={handleSubmit} icon={faPaperPlane} className='absolute bg-[--accent1] text-white p-[.5em] right-[.2em] sm:right-[40.5%] top-[32px] flex items-center justify-center rounded-[50%] text-[1.1rem]'/>
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