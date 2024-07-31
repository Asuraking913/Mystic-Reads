import React, { useState } from 'react'
import Nav from '../components/nav'
import Display from '../components/display'
import Foot from '../components/footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Publish() {

  const [chapter, setChapter] = useState('Prologue')
  const [log, setLog] = useState(false)
  const navigate = useNavigate()

    // Logged
  useEffect(() => {
    // console.log(localStorage)
    if (localStorage.getItem('auth')) {
      setLog(true)
      return
    }

    setLog(false)
    navigate("/")
  })

  return (
    <>
        <Nav log={log}/>
        <Display />
        <section className='min-h-screen sm:py-[--pdy] py-[.5em] px-[1em] sm:px-[--pdx] flex flex-col items-center'>
            <div className='w-full px-[.2em] flex flex-col gap-[1em]'>
            <h2 className='sm:text-[2.5rem] text-xl capitalize text-[--accent1] audio text-center'>Publish your novel and Join our list of Authors</h2>
            <p className='text-center line roboto capitalize sm:text-[1.1rem] text-[0.9rem] text-[--accent1]'>We use AI to determine the category of novels your content belongs to, before adding it to our catalogue</p>
          </div>

          <form action="" className='py-[--pdy] mt-[1em] w-full flex flex-col gap-[2em]'>
            <p className=''>
              <label className='text-xl roboto text-[--accent1]' htmlFor="#">Author's Identity</label>
              <input className='sm:text-2xl text-[--accent1] text-xl rounded-[5px] bg-[#ffffff2c] shadow-sm shadow-[--accent1] w-full p-[.1em] sm:p-[.2em] outline-none' type="text" name="identity" id="identity" />
            </p>
            <p className=''>
              <label className='text-xl roboto text-[--accent1]' htmlFor="#">Chapter</label>
              <input className='sm:text-2xl text-[--accent1] text-xl rounded-[5px] bg-[#ffffff2c] shadow-sm shadow-[--accent1] w-full p-[.1em] sm:p-[.2em] outline-none' type="text" defaultValue={chapter} name="chapter"  id="chapter" />
            </p>
            <p>
              <label className='text-xl roboto text-[--accent1]' htmlFor="content">Content</label>
              <textarea className='w-full bg-[#ffffff2c] shadow-sm shadow-[--accent1] outline-none rounded-[5px]' name="content" id="content" cols="30" rows="10"></textarea>
            </p>
            <input type="submit" value="Publish" className='text-xl p-[.2em] sm:p-[.4em] w-full text-center bg-[--accent1] text-white duration-[0.5s] hover:bg-[#ffffff2c] hover:text-[--accent1] cursor-pointer shadow-md rounded-[5px] shadow-[--accent1]' />
            
          </form>
        </section>
        <Foot />
    </>
  )
}

export default Publish