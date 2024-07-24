import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import user from "../assets/user.svg"
import Body from '../components/body'

function Land() {

  const [log, setLog] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLog(true)
      return
    }

    setLog(false)
  }, [])
  return (
    <div className=''>
      <Nav profile={user} log={log}/>
      <Body />
    </div>
  )
}

export default Land