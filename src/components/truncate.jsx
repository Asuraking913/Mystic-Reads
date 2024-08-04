import React from "react"
import { useState } from "react"

const Truncate = ({text}) => {

  const [full, setFull] = useState(false)


    if (text.length > 300 & !full) {
      return (
        <p>{text.substring(0, 250) + '...'} <button href="" onClick={() => setFull(true)} className='hover:text-[--accent1] text-[#593f3bbe] underline text-[0.9rem]'>Read more</button></p>
      )
    }

    return (
      <p>{text}</p>
    )
    
  }

export default Truncate