import React, { useState } from 'react'
import Nav from '../components/nav'
import LibComp from '../components/libraryComp'
import Display from '../components/display'
import Foot from '../components/footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Library() {

    const navigate = useNavigate()

  return (
    <>
        <Nav />
        <Display />
        <section className='h-auto px-[--pdx] '>
            <div className='w-full py-[2em]'>
                <h2 className='text-3xl opacity-80 roboto text-[--accent1] font-bold mb-[.5em] text-center'>Asian Genres</h2>
                <LibComp />
            </div>
        </section>
        <section className='h-auto px-[--pdx] '>
            <div className='w-full py-[2em]'>
                <h2 className='text-3xl opacity-80 roboto text-[--accent1] font-bold mb-[.5em] text-center'>Comedy</h2>
                <LibComp />
            </div>
        </section>
        <section className='h-auto px-[--pdx] '>
            <div className='w-full py-[2em]'>
                <h2 className='text-3xl opacity-80 roboto text-[--accent1] font-bold mb-[.5em] text-center'>Fantasy</h2>
                <LibComp />
            </div>
        </section>
        <section className='h-auto px-[--pdx] '>
            <div className='w-full py-[2em]'>
                <h2 className='text-3xl opacity-80 roboto text-[--accent1] font-bold mb-[.5em] text-center'>Short Stories</h2>
                <LibComp />
            </div>
        </section>
        <Foot />
    </>
  )
}

export default Library