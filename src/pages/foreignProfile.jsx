import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import likes from "../assets/likes.svg"
import posts from "../assets/post1.svg"
import book from "../assets/book.svg"
import user from "../assets/user.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDownLong, faEnvelope, faGift, faLocationDot, faPeopleGroup, faPersonHalfDress, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/posts'
import Axios913 from '../utils/Axios913'
import AuthContext from '../utils/fetchUserPic'
import { useContext } from 'react'

function ForeignView() {

  const navigate = useNavigate()
  const location = useLocation()

  const {
    auth, setAuth,
    userId : id,
    userName : name,
    location : loca,
    birthday : birthday,
    joined : member,
    bio : about,
    gender : sex,
    email : userEmail,
  } = useContext(AuthContext)

  useEffect(() => {
    let params = new URLSearchParams(location.search); 
    for (const [key, value] of params.entries()) {



      const handledetails = async () => {

    // Fetch user details
      const profilesInfo = await Axios913.get(`/api/profiles_info/${key}`).then(response => {
        setBio(response.data['data']['bio'])
        setLocation1(response.data['data']['location'])
        setBirthday(response.data['data']['birthday'])
        setGender(response.data['data']['gender'])
        setUserName(response.data['data']["userName"])
        setJoined(response.data['data']['member'])
        setEmail(response.data['data']['userEmail'])
      }).catch((error) => {
        if (error.response.status === 401) {
          setAuth(false)
          navigate("/")
        }
        if (error.response.status === 500) {
          setAuth(false)
          navigate("/")
        }
      })

      // Fetch user Images

      const picture = await Axios913.get(`/api/fetch_picture/${key}`).then(response => {
        // console.log(response.data )
        const {cover, profile} = response.data;

        if(response.status == 200 && cover) {
          setImages(prevImages => ({
            ...prevImages, cover_image: `data:${cover.mime};base64,${cover.data}`
          })
            )
        }

        if(response.status === 200 && profile) {
          setImages(prevImages => ({
            ...prevImages, profile_image: `data:${profile.mime};base64,${profile.data}`
          }))
        }
      }).catch((error) => {
        setImages({cover_image : '', profile_image : user})
        if (error.response.status === 401) {
          localStorage.clear()
          navigate("/")
        }

        if (error.response.status === 500) {
          localStorage.clear()
          navigate("/")
        }
      })

      // Post fetch

      // fetch posts data
        const posts = await Axios913.get(`/api/user_posts/${key}`).then(response => {
          const postDetails = response.data.data.postList
          const new_post = postDetails.map(items => ({
                content : items.content, 
                commentNo : items.postComments,
                postId : items.postId,
                likes : items.postLikes,
                userName : response.data.data.userName,
                userId : response.data.data.userId,
              }))
              
          setPostList([...new_post])
          
      }).catch((error) => {
          console.log(error)
      })


    }

    handledetails()

  } 

  }, [])

  

  

// useEffect(() => {
//   handleImages()
  
// }, [userId])



    // State vars
    const [image, setImages] = useState({profile_image : '', cover_image : ""})
    const [userName, setUserName] = useState('')
    const [cover, setCover] = useState(null);
    const [active, setActive] = useState(true)
    const [followers, setFollowers] = useState(20)
    const [following, setFollowing] = useState(10)
    const [gender, setGender] = useState("")
    const [birth, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [location1, setLocation1] = useState("")
    const [bio, setBio] = useState("")
    const [joined, setJoined] = useState("")

    

    // Postlist data
    const [postList, setPostList] = useState([
      
    ])

    const post = postList.map((items, i) => (<Post key={i} comments={items.commentNo} likes={items.likes} profile={image['profile_image']} post={items.content} active={true} username={items.userName}/>))

  return (
    <>
        <Nav />

      <article className='h-auto sm:mt-0 mt-[3.7em]'>
        <div className='sm:h-[50vh] h-[20vh] relative w-full linear'>
        <img src={image['cover_image']} className='h-full w-full object-cover' alt="" />
            <div className='min-h-[80vh] overflow-hidden py-[1em] hidden sm:flex flex-col items-center justify-center z-[20] top-[40%] left-[--pdx] shadow-md shadow-[--accent1] absolute rounded-[10px] bg-[--accent1] gap-[1em] px-[1.5em] w-[380px]'>
               <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[200px] w-[200px]'>
                  <img src={image['profile_image']} className=' rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
               </div>
               <div className='text-center'>
                 <h2 className='sm:text-2xl font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg] flex justify-center items-center gap-[.5em]'><span className='text-[--]'>Active:</span> {active ? <i className='w-[15px] border-[1.5px] border-white h-[15px] text2 rounded-[50%]'></i>: <i className='inline'>active 2hrs ago</i> }</p>
               </div>
               <div className='w-[90%] break-words px-[1.5em]'>
                  <p className='line text-center font-sans italic sm:text-[0.9rem] text-white'>{(bio == null) ? <i className='opacity-40'>none</i> : bio }</p>
               </div>
               <div>
                 <div className='flex justify-between gap-[2em]'>
                    <button className='px-[1em] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justifsm:y-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faUserPlus}/>
                      <p>Follow</p>
                    </button>
                    <button className='px-[1em] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justifsm:y-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faMessage}/>
                      <p>Message</p>
                    </button>
                 </div>
                 <div className='flex justify-between mt-[.5em]'>
                  <p className='text-[--bg] font- roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] font- roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='w-[120%] border-[1.5px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faLocationDot} className='text-xl mr-[.1em] text-[--bg]'/>Location:</span>
                      <span className='text-[--bg] roboto'>{(location1 == null) ? <i className='opacity-40'>none</i> : location1 }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[1rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faThumbsUp} className='text-xl mr-[.1em] text-[--bg]'/>Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPeopleGroup} className='text-xl mr-[.1em] text-[--bg]'/>Joined:</span>
                    <span className='text-[--bg] roboto'>Member Since {joined}</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPersonHalfDress} className='text-xl mr-[.1em] text-[--bg]'/>Gender:</span>
                    <span className='text-[--bg] roboto'>{gender}</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faEnvelope} className='text-xl mr-[.1em] text-[--bg]'/>Email:</span>
                    <span className='text-[--bg] roboto'>{(email == null) ? <i className='opacity-40'>none</i> : email }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faGift} className='text-xl mr-[.1em] text-[--bg]'/>Birthday:</span>
                    <span className='text-[--bg] text-[.9rem] roboto'>{(birth == null) ? <i className='opacity-40'>none</i> : birth }</span>
                  </p>
                  
               </div>
      
            </div>
        </div>
        {/* profile mobile */}
        <div className=' py-[1em] overflow-hidden  flex sm:hidden flex-col items-center justify-center z-[20] shadow-md shadow-[--accent1] bg-[--accent1] gap-[1em] px-[1.5em] w-[100%]'>
               <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[100px] w-[100px]'>
                  <img src={image['profile_image']} className='rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
               </div>
               <div className='text-center'>
                 <h2 className='text-xl font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg]'><span className='text-[--]'>Active:</span> {active ? <FontAwesomeIcon icon={faCircle} className='text text-green-500 mt-[.5em] w-[15px] h-[15px]'/> : <i className='inline'>active 2hrs ago</i> }</p>
               </div>
               <div className='w-[85%] break-words px-[--pdx] '>
                  <p className='line text-center font-sans italic text-[0.8rem] text-white'>{(bio == null) ? <i className='opacity-40'>none</i> : bio }</p>
               </div>
               <div>
                 <div className='flex justify-between gap-[2em]'>
                    <button className='px-[1em] text-[.9rem] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center duration-[0.5s] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faUserPlus}/>
                      <p className='text-[.9rem]'>Follow</p>
                    </button>
                    <button className='px-[1em] text-[.9rem] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center duration-[0.5s] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faMessage}/>
                      <p className='text-[.9rem]'>Message</p>
                    </button>
                 </div>
                 <div className='flex justify-between mt-[.5em]'>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='border-[1.5px] ml-[-2em] w-[500px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
               <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faLocationDot} className='mr-[.1em] text-[--bg]'/>Location:</span>
                      <span className='text-[--bg] roboto'>{(location1 == null) ? <i className='opacity-40'>none</i> : location1 }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faThumbsUp} className='text mr-[.1em] text-[--bg]'/>Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPeopleGroup} className='mr-[.1em] text-[--bg]'/>Member:</span>
                    <span className='text-[--bg] text-[.9rem] roboto'>Member {(member == null) ? <i className='opacity-40'>none</i> : member }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPersonHalfDress} className='mr-[.1em] text-[--bg]'/>Gender</span>
                    <span className='text-[--bg] roboto'>{(gender == null) ? <i className='opacity-40'>none</i> : gender }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faGift} className='mr-[.1em] text-[--bg]'/>Birthday:</span>
                    <span className='text-[--bg] roboto'>{(birth == null) ? <i className='opacity-40'>none</i> : birth }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faEnvelope} className='mr-[.1em] text-[--bg]'/>Email:</span>
                    <span className='text-[--bg] text-[.9rem] roboto'>{(email == null) ? <i className='opacity-40'>none</i> : email }</span>
                  </p>
               </div>
      
        </div>
        <div className='sm:h-[60px] h-[40px] items-center justify-center px-[4em] flex sticky top-[3.5em] z-[10] bg-[--accent1]'>
          <ul className='flex sm:ml-[8em] sm:justify-normal justify-between sm:gap-[10em] sm:w-auto w-full'>
              <button className='active:bg-[--accent] sm:hover:bg-[--accent] sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={posts} title='Posts' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /></button>
              <button   className='active:bg-[--accent] sm:hover:bg-[--accent] sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={book}  title='Puslished' className='sm:w-[40px] w-[30px] sm:h-[50px]'alt="" /></button>
              <button className='active:bg-[--accent] sm:hover:bg-[--accent] sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={likes} title='Likes' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /></button>
            </ul>
      
        </div>
        <section className=' p-[0em] h-[100vh] sm:h-[105vh] relative w-[100%] sm:px-[--pdx] flex sm:flex-row flex-col-reverse justify-between items-start sm:items-end'>
        <div className='py-[2em] px-[.5em]'>
          <h2 className='text-2xl roboto font-bold text-[--accent1]'>Our Programs</h2>
            <ul className='flex text-[--accent1] flex-col gap-[1em] mt-[1em] '>
              <li className='font-sans font-bold'>About Us</li>
              <li className='font-sans font-bold'>Terms and Service</li>
              <li className='font-sans font-bold'>Privacy</li>
              <li className='font-sans font-bold'>How it Works</li>
            </ul>
        </div>
          <div className=' w-[85%] sm:w-[60%] px-[.5em] py-[1em] hide-scrollbar h-[100%] overflow-scroll flex sm:flex-col gap-[1em]'>
            <div className='flex flex-col gap-[1em] relative'>
              {
                !postList[0] ?

                <div className='h-[80vh] w-full flex items-center justify-center text-center'>
                  <h2 className='sm:text-4xl text-3xl text-[--accent1] roboto font-bold'>User has not made any post</h2>
                </div>

                :


              post
              
              }
            </div>
          </div>
          <FontAwesomeIcon icon={faDownLong} className='absolute top-[30%] text-[--accent1] h-[50px] right-[1.5em] animate-bounce sm:hidden'/>
          
        </section>
      </article>
    </>
  )
}

export default ForeignView