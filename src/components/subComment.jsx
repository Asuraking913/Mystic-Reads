import React, { useEffect, useState } from "react";
import user from "../assets/user.svg"
import Axios913 from "../utils/Axios913";

const SubComment = ({userName, userId, content}) => {
    const [img, setImg] = useState(user)

        const handleImage = async () => {
            const response = await Axios913.get(`/api/fetch_feeds/images/${userId}`).then(response => {
              setImg(`data:${response.data.data.img.mime};base64,${response.data.data.img.data}`)
            })
          }

          useEffect(() => {
            handleImage()
          }, [])

    return (
        <div className="flex gap-[.4em] sm:gap-0 px-[.5em]">
            <div className='w-[50px]'>
                {
                    img === user ?

                    <img src={user} className='sm:w-[40px] w-[40px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover sm:h-[40px] h-[40px]' alt="" /> 
                    :
                    <img src={img} className='sm:w-[40px] w-[40px] bg-[--accent] shadow-md shadow-black rounded-[50%] object-cover sm:h-[40px] h-[40px]' alt="" /> 
                }
            
            </div>
            <div className="w-[100%] sm:max-w-[50%] rounded-tl-[0] bg-[#ffffff2c] p-[.2em] shadow-sm shadow-[--accent1] rounded-[.5em]">
                    <p className="text-[0.85rem] font-bold roboto text-[--accent1]">{userName}</p>
                <div className="">
                    <div className="text-[0.8rem] font-sans opacity-80"><p>{content}</p></div>
                </div>

            </div>
        </div>
    )
}

export default SubComment