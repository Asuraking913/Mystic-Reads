import React, { useEffect, useRef, useState } from 'react'
import Nav from '../components/nav'
import edit from '../assets/edit.svg'
import { Link, useNavigate } from 'react-router-dom'
import likes from "../assets/likes.svg"
import posts from "../assets/post1.svg"
import book from "../assets/book.svg"
import user from "../assets/user.svg"
import update from "../assets/update.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faDownLong, faEnvelope, faGift, faLocationDot, faPeopleGroup, faPersonHalfDress, faPlusCircle, faThumbsUp, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Post from '../components/posts'
import axios from 'axios'
import edit1 from "../assets/edit2.png"
import Axios from '../components/Axios'

function Profile() {

    // image input ref
    const profileInput = useRef(null)
    const coverInput = useRef(null)
    const navigate = useNavigate()


    // State vars
    const [file1, setFile1] = useState(false)
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(user)
    const [error, setError] = useState("")
    const [active, setActive] = useState(true)
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [followers, setFollowers] = useState(20)
    const [following, setFollowing] = useState(10)
    const [gender, setGender] = useState(localStorage.getItem('gender'))
    const [birth, setBirthday] = useState(localStorage.getItem(localStorage.getItem('birthday')))
    const [email, setEmail] = useState(localStorage.getItem('userEmail'))
    const [editProfile, setEditProfile] = useState(false)
    const [bio, setBio] = useState(localStorage.getItem('bio'))
    const [location, setLocation] = useState(localStorage.getItem('location'))
    const [member, setMember] = useState(localStorage.getItem('member'))
    const [log, setLog] = useState(false)
    const [bio1, setBio1] = useState("")
    const [location1, setLocation1] = useState("")
    const [birth1, setBirthday1] = useState("")


    useEffect(() => {
      // console.log(localStorage)
      if (localStorage.getItem('access_token')) {
        setLog(true)
        return
      }
  
      setLog(false)
      navigate("/")
    })

    


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

    const handleEditform = async (event) => {
      event.preventDefault()
      const data = {
        "bio" : bio1, 
        'location' : location1, 
        "birthday" : birth1
      }
      
      // return
      const userId = localStorage.getItem('userId')
        if(bio1.length < 20 || location1.length < 4 ) {
          return
      }
      try{
        const response = await Axios.post(`/api/profiles_info`, data).then(response => {
                  
        if (response.status = 201) {
        const items = ['userName', 'userEmail', 'member', 'userId', 'gender', 'bio', 'joined', 'birthday', 'location']
        items.forEach(item => localStorage.removeItem(item))
        localStorage.setItem('userName', response.data['data']['userName'] )
        localStorage.setItem('userEmail', response.data['data']['userEmail'], )
        localStorage.setItem( 'member', response.data['data']['joined'])
        localStorage.setItem('userId', response.data['data']['userId'])
        localStorage.setItem('gender', response.data['data']['gender'])
        localStorage.setItem('bio', response.data['data']['bio'])
        localStorage.setItem('joined', response.data['data']['member'])
        localStorage.setItem('birthday', response.data['data']['birthday'])
        localStorage.setItem('location', response.data['data']['location'])
        setLocation(localStorage.getItem('location'))
        setBio(localStorage.getItem('bio'))
        setEditProfile(!editProfile)
        }
        })
      }
      catch (error) {
        setError(error.response.data)
        setTimeout(() => setError(""), 4000)
      }
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
       { editProfile ?
        <div className='h-screen top-0 flex items-center justify-center bg-[#000000ea] fixed w-full z-[200000000000]'>
          
          <div className='px-[1em] relative shadow-md shadow-[black] bg-[#593f3b8a] rounded-[.5em] w-[80%] sm:w-[40%] py-[1em]'>
          <FontAwesomeIcon icon={faTimes} onClick={() => {
            setEditProfile(!editProfile)
            // setLocation("")
            // setBio("")
            // setBirthday("")
          }} className='text-3xl cursor-pointer hover:scale-125 duration-[.5s] text-white absolute right-[.5em] top-[.5em]'/>
            <h2 className='roboto text-white font-bold text-xl text-center'>Edit Your Profile</h2>
              <form action="" onSubmit={handleEditform} className='flex flex-col gap-[.5em]'>
                <p>
                  <label className='text-[1.1rem] roboto text-[--accent] ' htmlFor="location">Location</label>
                  <input className='w-full outline-none text-white bg-transparent border-[.5px] p-[.1em] border-[white] rounded-[5px]' type="text" maxLength={15} onChange={(e) => (setLocation1(e.target.value))}/>
                </p>
                <p>
                  <label className='text-[1.1rem] roboto text-[--accent] ' htmlFor="Birthday">Birthday</label>
                  <input className='w-full outline-none text-white bg-transparent border-[.5px] p-[.1em] border-[white] rounded-[5px]' type="text" maxLength={15} onChange={(e) => (setBirthday1(e.target.value))}/>
                </p>
                <p>
                  <label className='text-[1.1rem] roboto text-[--accent] ' htmlFor="bio">Bio</label>
                  <textarea maxLength={150} name="bio" className='w-full p-[.5em] resize-none outline-none text-white bg-transparent border-[white] border-[.5px] rounded-[5px]' id="bio" cols="30" rows="4" onChange={(e) => {
                    setBio1(e.target.value)
                  }}></textarea>
                </p>
                <div className='flex justify-center items-center'>
                  <input type="submit" value="Submit" className='text-[white] p-[.5em] px-[1em] bg-[--accent] rounded-[5px] cursor-pointer roboto sm:hover:scale-105 duration-[0.5s] sm:hover:bg-white sm:hover:text-[--accent]' />
                </div>
              </form>
          </div>
        </div>
        : 

        <Nav profile={profile} log={log}/>

      }
      <article className='h-auto sm:mt-0 mt-[3.7em]'>
        {error && <p className='sm:text-2xl rounded-[1em] animate-bounce text-white roboto absolute z-[1000] bg-[--accent1] sm:p-[.5em] p-[.2em] px-[1em] left-[38%] sm:left-[45%] top-[5em] sm:top-[4em]'>{error}</p>}
        <div className='sm:h-[50vh] h-[20vh] relative w-full linear'>
          {
            cover === null ? "" :
            <Link onClick={handleCoverDel} className='text-[1rem] bg-[--accent] p-[.3em] active:bg-white text-[white] rounded-[2px] absolute right-[1em] sm:top-[5%] top-[.5em] bottom hover:text-[--accent] sm:active:scale-[1]  hover:scale-110 duration-[0.5s]'>
            <span title='Delete Photo' className='flex gap-[.5em] roboto font-bold text items-center justify-center'>
              {/* <img src={edit} className='w-[20px]' alt="" /> */}
              <FontAwesomeIcon  icon={faTrash}/>
              {/* Delete photo */}
            </span>
          </Link>
          }
          <Link onClick={handleCoverBtn} className='absolute bg-[--accent] p-[.2em] rounded-[2px] text-white active:scale-[0.95] right-[1em] flex gap-[.2em] roboto font-bold justifsm:y-center items-center hover:scale-110 duration-[0.5s] top-[80%] sm:top-[90%]'>
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
                  <img src={update} onClick={handleProfileBtn} className='absolute active:scale-[0.95] cursor-pointer top-[80%] right-[1.5em] hover:scalsm:e-125 duration-[0.5s] ' alt="" />
                  <input type="file" className='hidden' onChange={handleProfile} ref={profileInput} name="file" id="profile" />
               </div>
               <div className='text-center'>
                 <h2 className='sm:text-2xl capitalize font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg] flex items-center justify-center gap-[.5em]'><span className='text-[--] flex'>Active:</span> {active ? <i className='w-[15px] border-[1.5px] border-white h-[15px] text2 rounded-[50%]'></i> : <i className='inline'>active 2hrs ago</i> }</p>
               </div>
               <div className='w-[95%]'>
                  <p className='line text-center roboto font-sans italic text-[0.9rem] text-white'>{(bio == "null") ? <i className='opacity-40'>none</i> : bio }</p>
                  {/* <p className='line text-center break-words font-sans italic text-[0.9rem] text-white'>{bio}</p> */}
               </div>
               <div>
                 <div className='flex justify-between gap-[2em]'>
                    {/* <Link className='px-[1em] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justifsm:y-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] py-[.5em] font-semibold bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faUserPlus}/>
                      <p>Follow</p>
                    </Link>
                    <Link to={"/sendSms"} className='px-[1em] active:scale-[0.95] shadow-md shadow-[black] gap-[.5em] items-center justifsm:y-center hover:scale-105 duration-[0.5s] hover:bg-[--bg] hover:text-[--accent] font-semibold py-[.5em] bg-[--accent] roboto rounded-[5px] text-[--bg] flex'>
                      <FontAwesomeIcon icon={faMessage}/>
                    Message
                    </Link> */}
                 </div>
                 <div className='flex justify-between gap-[2em] mt-[.5em]'>
                  <p className='text-[--bg] font-semibold roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] font-semibold roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='w-[120%] border-[1.5px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
                    <p className='flex justify-between items-center'>
                    <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faLocationDot} className='text-xl mr-[.1em] text-[--bg]'/>Location:</span>
                      <span className='text-[--bg] roboto'>{(location == "null") ? <i className='opacity-40'>none</i> : location }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex gap-[.1em] items-center text-[1rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faThumbsUp} className='text-xl mr-[.1em] text-[--bg]'/>Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPeopleGroup} className='text-xl mr-[.1em] text-[--bg]'/>Joined:</span>
                    <span className='text-[--bg] roboto'>Member Since {localStorage.getItem('member')}</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPersonHalfDress} className='text-xl mr-[.1em] text-[--bg]'/>Gender:</span>
                    <span className='text-[--bg] roboto'>{localStorage.getItem('gender')}</span>
                  </p>
                  <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faEnvelope} className='text-xl mr-[.1em] text-[--bg]'/>Email:</span>
                    <span className='text-[--bg] roboto'>{localStorage.getItem('userEmail')}</span>
                  </p>
                 <p className='flex justify-between items-center'>
                    <span className='flex items-center gap-[.1em] text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faGift} className='text-xl mr-[.1em] text-[--bg]'/>Birthday:</span>
                    <span className='text-[--bg] roboto'>{(localStorage.getItem('birthday') == "null") ? <i className='opacity-40'>none</i> : localStorage.getItem('birthday') }</span>
                  </p>
               </div>
      
            </div>
        </div>
        {/* profile mobile */}
        <div className=' py-[1em] overflow-hidden  flex sm:hidden flex-col items-center justify-center z-[20] shadow-md shadow-[--accent1] bg-[--accent1] gap-[1em] px-[1.5em] w-[100%]'>
               <div className='bg-[--accent] relative p-[.2em] rounded-[50%] h-[100px] w-[100px]'>
                  {
                    profile === user ? "" :
                    <Link onClick={handleProfileDel} className='text-[1rem] absolute right-[-2em] bottom-[-.2em]  hover:text-[--accent] sm:active:scale-[1]  hover:scale-125 duration-[0.5s] text-[--bg] '>
                    <span title='Delete Photo'>
                      <FontAwesomeIcon  icon={faTrash}/>
                    </span>
                  </Link>
                  }
                  <img src={profile} className='rounded-[50%] shadow-md shadow-[black] w-full h-full object-cover' alt="" />
                  <img src={update} onClick={handleProfileBtn} className='absolute active:scale-[0.95] w-[20px] cursor-pointer top-[80%] right-[1em] hover:scale-125 duration-[0.5s] ' alt="" />
                  <input type="file" className='hidden' onChange={handleProfile} ref={profileInput} name="file" id="profile" />
               </div>
               <div className='text-center'>
                 <h2 className='text-xl capitalize font-bold roboto text-[--bg]'>{userName}</h2>
                 <p className='text-[0.9rem] text-[--bg]'><span className='text-[--]'>Active:</span> {active ? <FontAwesomeIcon icon={faCircle} className='text text-green-400 w-[15px] h-[15px]'/>  : <p className='inline'>active 2hrs ago</p> }</p>
               </div>
               <div className='w-[90%] break-words px-[--pdx]' >
                  <p className='line text-center font-sans italic text-[0.8rem] text-white'>{(bio == "null") ? <i className='opacity-40'>none</i> : bio }</p>
               </div>
               <div>
                 <div className='flex justify-between gap-[4em] mt-[.5em]'>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Followers: {followers}</p>
                  <p className='text-[--bg] text-[.9rem] font- roboto'>Following: {following}</p>
                 </div>
               </div>
               <div className='border-[1.5px] ml-[-2em] w-[500px] border-[--accent]'></div>
               <div className='w-full flex flex-col gap-[.5em]'>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faLocationDot} className='mr-[.1em] text-[--bg]'/>Location:</span>
                      <span className='text-[--bg] roboto'>{(location == "null") ? <i className='opacity-40'>none</i> : location }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faThumbsUp} className='text mr-[.1em] text-[--bg]'/>Likes:</span>
                    <span className='text-[--bg] roboto'>2 Likes</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPeopleGroup} className='mr-[.1em] text-[--bg]'/>Joined:</span>
                    <span className='text-[--bg] text-[.9rem] roboto'>{(member == "null") ? <i className='opacity-40'>none</i> : member }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faPersonHalfDress} className='mr-[.1em] text-[--bg]'/>Gender</span>
                    <span className='text-[--bg] roboto'>{(gender == "null") ? <i className='opacity-40'>none</i> : gender }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faGift} className='mr-[.1em] text-[--bg]'/>Birthday:</span>
                    <span className='text-[--bg] roboto'>{(localStorage.getItem('birthday') == "null") ? <i className='opacity-40'>none</i> : localStorage.getItem('birthday') }</span>
                  </p>
                  <p className='flex justify-between items-center'>
                  <span className='flex gap-[.1em] items-center text-[.9rem] roboto text-[--bg] font-bold'><FontAwesomeIcon icon={faEnvelope} className='mr-[.1em] text-[--bg]'/>Email:</span>
                    <span className='text-[--bg] text-[.9rem] roboto'>{(email == "null") ? <i className='opacity-40'>none</i> : email }</span>
                  </p>
                  
               </div>
        </div>
        <div className='sm:h-[80px] h-[60px] items-center justify-end px-[4em] flex sticky top-[3.5em] z-[10] bg-[--accent1]'>
          <ul className='flex sm:pr-[4em] items-center sm:justify-normal justify-between  sm:gap-[8em] sm:w-auto w-full'>
              <Link className='flex flex-col items-center justify-center sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={posts} title='Posts' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /><p className='text-[0.7rem] text-[--bg]'>Post</p></Link>
              <Link   className='flex flex-col items-center justify-center sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={book}  title='Puslished' className='sm:w-[40px] w-[30px] sm:h-[50px]'alt="" /><p className='text-[0.7rem] text-[--bg]'>Published</p></Link>
              <Link className='flex flex-col items-center justify-center sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={likes} title='Likes' className='sm:w-[40px] w-[30px] sm:h-[50px]' alt="" /><p className='text-[0.7rem] text-[--bg]'>Likes</p></Link>
              <Link onClick={() => setEditProfile(!editProfile)} className='flex flex-col items-center justify-center sm:py-0 active:scale-[0.95] hover:scale-110 rounded-[5px] duration-[0.1s] py-[.1em] sm:px-[.5em]'><img src={edit1} title='Edit' className='sm:w-[40px] w-[25px] sm:h-[45px]' alt="" /><p className='text-[0.7rem] text-[--bg]'>Edit Profile</p></Link>
            </ul>
      
        </div>
        <section className=' p-[0em] h-[120vh] sm:h-[100vh] relative w-[100%] sm:px-[--pdx] flex sm:flex-row flex-col-reverse justify-between items-start sm:items-end'>
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