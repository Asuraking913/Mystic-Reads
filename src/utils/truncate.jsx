import React from "react"
import { useState } from "react"

const Truncate = ({text, maxLength, subLength}) => {

  const [full, setFull] = useState(false)


    if (text.length > maxLength & !full) {
      return (
        <i className="roboto text-[0.95rem]">{text.substring(0, subLength) + '...'} <button href="" onClick={() => setFull(true)} className='hover:text-[--accent1] text-[#593f3bbe] underline text-[0.9rem]'>Read more</button></i>
      )
    }

    return (
      <i className="roboto text-[0.95rem]">{text}</i>
    )
    
  }

export default Truncate