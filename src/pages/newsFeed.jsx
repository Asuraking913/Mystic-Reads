import React, { useContext, useState } from 'react'
import Nav from '../components/nav'
import Display from '../components/display'
import FeedsCont from '../components/feedContent'
import person1 from "../assets/person1.jpeg"
import person2 from "../assets/person2.jpeg"
import person3 from "../assets/person3.jpeg"
import person4 from "../assets/person4.jpeg"
import person5 from "../assets/person5.jpeg"
import FeedNav from '../components/feedNav'
import Notify from '../components/notify'
import SmsBox from '../components/messageBox'
import PostForm from '../components/postForm'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Axios913 from '../components/Axios913'
import { AuthContext } from '../components/fetchUserPic'


function Feeds() {

  const navigate = useNavigate()
  const [newPost, setNewPost] = useState("")
  const [write, setWrite] = useState(true)

//   fetch post
    const handleFetch = async () => {
    const response = Axios913.get("/api/user_posts").then(response => {
        console.log(response.data)
        const postDetails = response.data['data']['post']
        const userName = response.data['data']['userName']
        const userId = response.data['data']['userId']
        const content = response.data['data']['post'][response.data['data']['post'].length -1]['content']
        if(response.data['data']['userPic']) {
        const userPic = response.data['data']['userPic']
        setFeeds(t => (
            [
                {
                    img : `data:${userPic.mime};base64,${userPic.data}`, 
                    username : userName, 
                    p : content, 
                }, 
                    ...t
                ]
            ))
            return
        }

        setFeeds(t => (
            [
                {
                    username : userName, 
                    p : content, 
                }, 
                ...t
            ]
        ))

    }).catch((error) => {
        console.log(error)
    })

    }

    useEffect (() => {
    {newPost ? handleFetch() : ""}
    })

    const [feeds, setFeeds] = useState([
        {
            img: person1,
            username: 'AsuraKing913',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "GamerXpert"
        }, 
        {
            img: person2,
            username: 'Tywin Lannister',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.12345", 
            descrip: "Hand of the King"
        }, 
        {
            img: person3,
            username: 'Khal Drogo',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Cyber Security Expert"
        }, 
        {
            img: person4,
            username: 'Optimus Prime',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Full stack web developer"
        }, 
        {
            img: person5,
            username: 'Ghost Of Sparta',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Data Analyst"
        }, 
        {
            img: person5,
            username: 'Ghost Of Sparta',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Data Analyst"
        }, 
        {
            img: person5,
            username: 'Ghost Of Sparta',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Data Analyst"
        }, 
        {
            img: person5,
            username: 'Ghost123 Of Sparta',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "Data Analyst"
        }
    ])

    const listFeeds = feeds.map((items, i) => (<FeedsCont  key={i} descrip={items.descrip} post={items.p} username={items.username} img={items.img}/>))

  return (
    <>
        <Nav log={log}/>
        <Display />
        <FeedNav />
        {
        write ? <div className='flex justify-between px-[1em] sm:px-[--pdx] py-[1em]'>
                    <Link onClick={() => {
                        setWrite(!write)
                    }} className='p-[.5em] sm:px-[1em] bg-[--accent1] sm:hover:bg-[#ffffff2c] text-white roboto rounded-[5px] hover:duration-[0.5s] hover:scale-105 hover:shadow-md hover:shadow-[--accent1] hover:text-[--accent1] cursor-pointer active:bg-[#ffffff2c] active:scale-100 active:duration-[0.1s]'>Create Post</Link>
                     <button onClick={() => {
                        navigate("/profile")
                    }} className='sm:p-[.5em]  text-[--accent1] underline hover:no-underline roboto sm:text-[1.2rem] rounded-[5px] hover:duration-[0.5s] hover:scale-105 hover:shadow-sm hover:shadow-[--accent1] hover:text-[--accent1] cursor-pointer active:bg-[#ffffff2c] active:scale-100 active:duration-[0.1s]'>View posts You've made?</button>
                </div>
                 :
                <PostForm New={newPost} onNew={setNewPost} Write={write} onWrite={setWrite}/>}
        <section  className='px-[.5em] flex sm:px-[--pdx] py-[1.5em] gap-[1em]'>
            <div id='post' className='flex flex-col gap-[2em] w-[100%] relative h-[200vh] overflow-scroll hide-scrollbar sm:py-[.3em] px-[.5em]'>
                <div id='newbox' className='absolute top-0'></div>
                    {listFeeds}
                    {listFeeds}
                    {listFeeds}
            </div>
            <div id='box' className='w-[60%] h-[200vh] rounded-[1em] hidden sm:flex sm:justify-between notify '>
                <Notify />
                <SmsBox />
            </div>
        </section>
    </>
  )
}

export default Feeds