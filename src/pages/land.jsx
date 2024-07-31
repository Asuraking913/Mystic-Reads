import React, { useContext, useEffect, useState} from 'react'
import Nav from '../components/nav'
import user from "../assets/user.svg"
import Body from '../components/body'
import { useNavigate } from 'react-router-dom'
import { access_token, userPicContext } from '../components/fetchUserPic'
import Axios1 from '../components/Axios1'


function Land() {

  const [log, setLog] = useState(false)
  const user = useContext(userPicContext);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setLog(true)
      return
    }

    setLog(false)
  })
    

  return (
    <div className=''>
          <Nav log={log}/>
          <Body />
    </div>
  )
}

export default Land
