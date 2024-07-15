import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/nav'
import edit from '../assets/edit.svg'
import { Link } from 'react-router-dom'
import likes from "../assets/likes.svg"
import posts from "../assets/post1.svg"
import book from "../assets/book.svg"
import person from "../assets/person4.jpeg"
import user from "../assets/user.svg"
import user1 from "../assets/user1.png"
import update from "../assets/update.svg"
import green from "../assets/green.png"
import location from "../assets/location.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/posts'

function Profile() {


    // State vars
    const [file1, setFile1] = useState(false)
    const [userName, setUserName] = useState('AsuraKing913')
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(user)
    const [error, setError] = useState("")
    const [active, setActive] = useState(true)
    const [followers, setFollowers] = useState(20)
    const [following, setFollowing] = useState(10)

    // image input ref
    const profileInput = useRef(null)
    const coverInput = useRef(null)


    // event fxn
    const handleProfileBtn = () => {
      if(profileInput.current) {
        profileInput.current.click()
      }
    }

    const handleCoverBtn = () => {
      if(coverInput.current) {
        coverInput.current.click()
      }
    }

    const handleProfileDel = () => {
      setProfile(user)
    }

    const handleCoverDel = () => {
      setCover(null)
    }

    const handleCover = (event) => {
      const file = event.target.files[0]
      if(file && allowedExtensions(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(reader.result)
      }

      reader.readAsDataURL(file)
      setCover(!file)
      return
      }
      setError("Invalid file")
      setInterval(() => {
        setError("")
      }, [4000])
      event.target.value = ""
    }

    const handleProfile = (event) => {
      const file = event.target.files[0]
      if(file && allowedExtensions(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result)
      }

      reader.readAsDataURL(file)
      setFile1(!file1)
      return
      }
      setError("Invalid file")
      setInterval(() => {
        setError("")
      }, [4000])
      event.target.value = ""
      setFile1(!file)
    }

    const allowedExtensions = (filename) => {
      const listExtensions = ['png', "jpeg", 'jpg']
      const newExt = filename.split(".").pop()
      return listExtensions.includes(newExt)
    }


    // Postlist data
    const postList = [
      { 
        likes: 20, 
        comments: 15,
        active: "15mins ago", 
        postText: "Just finished 'Doluo Dalu' and I'm completely hooked! The world-building is phenomenal, and Tang San's journey is so inspiring. Can't wait to see what happens next!",
      },
      { 
        likes: 45, 
        comments: 30,
        active: "2 hours ago", 
        postText: "I started reading 'Magic Chef of Ice and Fire' last night, and I'm already obsessed. The combination of cooking and magic is so unique and exciting. Nian Bing is such an intriguing character.",
      }, 
      { 
        likes: 100, 
        comments: 73,
        active: "15 hours ago", 
        postText: "Forcardos High School has such a relatable storyline! The characters feel so real, and the high school dynamics are spot-on. Can't wait to see how the friendships and rivalries develop.",
      }, 
      { 
        likes: 100, 
        comments: 73,
        active: "15 hours ago", 
        postText: "Magic Chef of Ice and Fire is a must-read for anyone who loves fantasy and culinary arts. The way Nian Bing combines magic with cooking is brilliant. I'm constantly amazed by his creativity",
      }, 
      { 
        likes: 100, 
        comments: 73,
        active: "15 hours ago", 
        postText: "Doluo Dalu is a masterpiece! The martial arts and spirit abilities are described so vividly. Each character's journey to become stronger is so motivating. Highly recommend!",
      }
    ]

    const post = postList.map((items, i) => (<Post key={i} comments={items.comments} likes={items.likes} profile={profile} post={items.postText} active={items.active} username={userName}/>))

  return (
    <>
        <Nav />

      <article className='h-auto'>
        {error && <p className='text-2xl rounded-[1em] animate-bounce text-white roboto absolute z-[1000] bg-[--accent1] p-[.5em] px-[1em] left-[45%] top-[4em]'>{error}</p>}
        <div className='sm:h-[50vh] h-[30vh] relative w-full linear'>
          {
            cover === null ? "" :
            <Link onClick={handleCoverDel} className='text-[1rem] bg-[--accent] p-[.3em] active:bg-white text-[white] rounded-[2px] absolute right-[1em] sm:top-[5%] top-[4em] bottom hover:text-[--accent] sm:active:scale-[1]  hover:scale-110 duration-[0.5s]'>
            <span title='Delete Photo' className='flex gap-[.5em] roboto font-bold text items-center justify-center'>
              {/* <img src={edit} className='w-[20px]' alt="" /> */}
              <FontAwesomeIcon  icon={faTrash}/>
              {/* Delete photo */}
            </span>
          </Link>
          }
          <Link onClick={handleCoverBtn} className='absolute bg-[--accent] p-[.2em] rounded-[2px] text-white sm:active:scale-[0.95] right-[1em] flex gap-[.2em] roboto font-bold justify-center items-center hover:scale-110 duration-[0.5s] top-[85%]'>
            <img src={edit} className='w-[20px]' alt="" />
            {/* <FontAwesomeIcon  icon={faPlusCircle}/> */}
            {/* Change Photo */}
          </Link>
          <input type="file" className='hidden' name="file" onChange={handleCover} id="cover" ref={coverInput} />
        {!cover ? "" : <img src={cover} className='h-full w-full object-cover' alt="" />}
            <div className='min-h-[80vh] overflow-hidden py-[1em] hidden sm:flex flex-col items-center justify-center z-[20] top-[40%] left-[--pdx] shadow-md shadow-[--accent1] absolute rounded-[10px] bg-[--accent1] gap-[1em] px-[1.5em] w-[380px]'>
               <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[200px] w-[200px]'>
                  {
                    profile === user ? "" :
                    <Link onClick={handleProfileDel} className='text-[1rem] absolute right-[-2em] bottom-[1em]  hover:text-[--accent] sm:active:scale-[1]  hover:scale-125 duration-[0.5s] text-[--bg] '>
                    <span title='Delete Photo'>
                      <FontAwesomeIcon  icon={faTrash}/>
                    </span>
                  </Link>
                  }
                  <img src={profile} className=' rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
                  <img src={update} onClick={handleProfileBtn} className='absolute sm:active:scale-[0.95] cursor-pointer top-[80%] right-[1.5em] hover:scale-125 duration-[0.5s] ' alt="" />
                  <input type="file" className='hidden' onChange={handleProfile} ref={profileInput} name="file" id="profile" />
               </div>
               <div className='text-center'>
                 <h2 className='sm:text-2xl font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg]'><span className='text-[--]'>Active:</span> {active ? <img src={green} className='w-[15px] inline' alt="" /> : <p className='inline'>active 2hrs ago</p> }</p>
               </div>
               <div>
                  <p className='line text-center font-sans italic text-[0.9rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis minima velit aut, eveniet perspiciatis? Lorem ipsum dolor sit amet.</p>
               </div>
               <div>
                 <div className='flex justify-between gap-[2em]'>
                    <Link className='px-[1em] sm:active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faUserPlus}/>
                      <p>Follow</p>
                    </Link>
                    <Link className='px-[1em] sm:active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faMessage}/>
                      <p>Message</p>
                    </Link>
                 </div>
                 <div className='flex justify-between mt-[.5em]'>
                  <p className='text-[--bg] font- roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] font- roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='w-[120%] border-[1.5px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
                  <p className='flex justify-between items-center'>
                    <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><img src={location} className='w-[25px]' alt="" />Location:</span>
                      <span className='text-[--bg] roboto'>Nigeria</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex gap-[.1em] items-center text-[1rem] roboto text-[--bg] font-bold'><img src={likes} className='w-[25px]' alt="" />Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><img src={user1} className='w-[25px]' alt="" />Joined:</span>
                    <span className='text-[--bg] roboto'>Member Since Dec 05, 2022</span>
                  </p>
               </div>
      
            </div>
        </div>
        {/* profile mobile */}
        <div className=' py-[1em] overflow-hidden  flex sm:hidden flex-col items-center justify-center z-[20]shadow-md shadow-[--accent1] bg-[--accent1] gap-[1em] px-[1.5em] w-[100%]'>
               <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[100px] w-[100px]'>
                  {
                    profile === user ? "" :
                    <Link onClick={handleProfileDel} className='text-[1rem] absolute right-[-2em] bottom-[-.2em]  hover:text-[--accent] sm:active:scale-[1]  hover:scale-125 duration-[0.5s] text-[--bg] '>
                    <span title='Delete Photo'>
                      <FontAwesomeIcon  icon={faTrash}/>
                    </span>
                  </Link>
                  }
                  <img src={profile} className=' rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
                  <img src={update} onClick={handleProfileBtn} className='absolute sm:active:scale-[0.95] w-[20px] cursor-pointer top-[80%] right-[1em] hover:scale-125 duration-[0.5s] ' alt="" />
                  <input type="file" className='hidden' onChange={handleProfile} ref={profileInput} name="file" id="profile" />
               </div>
               <div className='text-center'>
                 <h2 className='text-xl font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg]'><span className='text-[--]'>Active:</span> {active ? <img src={green} className='w-[15px] inline' alt="" /> : <p className='inline'>active 2hrs ago</p> }</p>
               </div>
               <div>
                  <p className='line text-center font-sans italic text-[0.9rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis minima velit aut, eveniet perspiciatis? Lorem ipsum dolor sit amet.</p>
               </div>
               <div>
                 <div className='flex justify-between gap-[2em]'>
                    <Link className='px-[1em] text-[.9rem] sm:active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faUserPlus}/>
                      <p className='text-[.9rem]'>Follow</p>
                    </Link>
                    <Link className='px-[1em] text-[.9rem] sm:active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justify-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faMessage}/>
                      <p className='text-[.9rem]'>Message</p>
                    </Link>
                 </div>
                 <div className='flex justify-between mt-[.5em]'>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='border-[1.5px] ml-[-2em] w-[500px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
                  <p className='flex justify-between items-center'>
                    <span className='flex text-[.9rem]items-center text-[1rem] roboto text-[--bg] font-bold'><img src={location} className='w-[25px]' alt="" />Location:</span>
                      <span className='text-[--bg] roboto'>Nigeria</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><img src={likes} className='w-[25px]' alt="" />Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[1rem] roboto text-[--bg] font-bold'><img src={user1} className='w-[25px]' alt="" />Joined:</span>
                    <span className='text-[--bg] roboto'>Member Since Dec 05, 2022</span>
                  </p>
               </div>
      
        </div>
        <div className='sm:h-[60px] h-[40px] items-center justify-center px-[4em] flex sticky top-[3.5em] z-[10] bg-[--accent1]'>
          <ul className='flex sm:ml-[8em] sm:justify-normal justify-between sm:gap-[10em] sm:w-auto w-full'>
              <Link className='hover:bg-[--accent] sm:active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={posts} title='Posts' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /></Link>
              <Link   className='hover:bg-[--accent] sm:active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={book}  title='Puslished' className='sm:w-[40px] w-[30px] sm:h-[50px]'alt="" /></Link>
              <Link className='hover:bg-[--accent] sm:active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.5s] px-[.5em]'><img src={likes} title='Likes' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /></Link>
            </ul>
      
        </div>
        <section className=' p-[0em] h-[90vh] relative w-[100%] sm:px-[--pdx] flex sm:flex-row flex-col-reverse justify-between items-start sm:items-end'>
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
              {post }
            </div>
          </div>
          <FontAwesomeIcon icon={faDownLong} className='absolute top-[30%] text-[--accent1] h-[50px] right-[1.5em] animate-bounce sm:hidden'/>
          
        </section>
      
      </article>
    </>
  )
}

export default Profile