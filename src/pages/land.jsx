import React from 'react'
import Nav from '../components/nav'
import user from "../assets/user.svg"
import Body from '../components/body'

function Land() {
  return (
    <div className=''>
      <Nav profile={user} />
      <Body />
    </div>
  )
}

export default Land