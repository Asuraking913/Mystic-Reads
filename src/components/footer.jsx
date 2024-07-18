import { faFacebook, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Foot() {
  return (
    <section id='foot' className='min-h-[20vh] px-[1em] sm:px-[--pdx] flex flex-col items-center py-[2em] gap-[1em] bg-[--accent1]'>
            <div className='flex sm:flex-row flex-col justify-center items-center w-[100%]'>
                <ul className='flex flex-col gap-[.5em] sm:gap-[1em] py-[0.5em]'>
                    <h2 className='sm:text-3xl text-2xl audio text-[--bg]'>MysticReads</h2>
                    <p className='sm:w-[80%] w-[100%] text-[1.1rem] text-[--bg] italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellendus facere vel inventore voluptatum officia ex unde odio iusto quia, dolores harum maiores voluptatibus possimus ratione, sapiente temporibus qui vero.</p>
                </ul>
                <ul className='flex flex-col items-center justify-center w-[100%]'>
                    <form action="" className='flex flex-col w-[100%] gap-[1em]'>
                        <textarea className='p-[.5em] sm:w-[auto] w-[100%] rounded-[5px]' name="issues" id="issues" cols="30" rows="5" placeholder='Enter your request'></textarea>
                        <p>
                            <label className='text-xl text-[--bg] roboto font-semibold' htmlFor="email">Email:</label>
                            <input className='w-full rounded-[2px] px-[.5em] py-[.5em]' type="email" name="email" id="email" placeholder='Enter your email' />
                        </p>
                        <input className='px-[1em] py-[0.5em] bg-[--bg] roboto text-xl font-semibold text-[--accent1]' type="submit" value="Submit" />
                    </form>
                </ul>
            </div>
            <ul className='w-[100%] flex flex-col gap-[1em]'>
                <p className='sm:text-xl roboto font-bold text-[--bg]'>Contact: israelshedrack913@gmail.com</p>
                <div className='flex gap-[2em] sm:justify-start justify-center text-2xl w-[100%]'>
                    <FontAwesomeIcon className='hover:scale-125 duration-[0.5s] text-blue-500' icon={faFacebook}/>
                    <FontAwesomeIcon className='hover:scale-125 duration-[0.5s]' icon={faXTwitter}/>
                    <FontAwesomeIcon className='hover:scale-125 duration-[0.5s] text-blue-500' icon={faLinkedin}/>
                    <FontAwesomeIcon className='hover:scale-125 duration-[0.5s] text-green-400' icon={faWhatsapp}/>
                </div>
            </ul>
    </section>
  )
}

export default Foot