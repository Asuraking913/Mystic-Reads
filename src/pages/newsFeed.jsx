import React, { useState } from 'react'
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

function Feeds() {


    const feeds = [
        {
            img: person1,
            username: 'AsuraKing913',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
            descrip: "GamerXpert"
        }, 
        {
            img: person2,
            username: 'Tywin Lannister',
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam cum, consequatur blanditiis voluptatum expedita ab commodi, rerum ad tempora, sint saepe neque. Reprehenderit magni iure exercitationem, aspernatur corrupti doloremque.", 
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
    ]

    const listFeeds = feeds.map((items, i) => (<FeedsCont key={i} descrip={items.descrip} post={items.p} username={items.username} img={items.img}/>))

  return (
    <>
        <Nav />
        <Display />
        <FeedNav />
        <section  className='px-[.5em] flex sm:px-[--pdx] py-[1.5em] gap-[1em]'>
            <div id='post' className='flex flex-col gap-[2em] w-[100%] h-[200vh] overflow-scroll hide-scrollbar px-[.5em]'>
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