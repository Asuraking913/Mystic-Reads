import React, { useContext, useEffect, useState} from 'react'
import Nav from '../components/nav'
import user from "../assets/user.svg"
import Body from '../components/body'
import { useNavigate } from 'react-router-dom'
import { AuthContext, userPicContext } from '../components/fetchUserPic'


function Land() {

  const [log, setLog] = useState(false)
  const user = useContext(userPicContext);
  const {auth, setAuth} = useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setLog(true)
      return
    }

    setLog(false)
  })

  // console.log(auth)
    

  return (
    <div className=''>
          <Nav log={log}/>
          <Body />
    </div>
  )
}

export default Land
