import React, { useContext, useEffect, useState} from 'react'
import Nav from '../components/nav'
import user from "../assets/user.svg"
import Body from '../components/body'
import { useNavigate } from 'react-router-dom'
import { userPicContext } from '../components/fetchUserPic'


function Land() {

  const user = useContext(userPicContext);

  return (
    <div className=''>
          <Nav />
          <Body />
    </div>
  )
}

export default Land
