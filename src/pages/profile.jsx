import React, { useEffect } from 'react'

function Profile() {

    // useEffect(() => {
    //     console.log(window.location.href)
    // })

  return (
    <article>
        <section className='w-full bg-[#00000097] h-[40vh]'>
            <img src={input['file']} alt="" /><input type="file" name="file" id="file" />
        </section>
    </article>
  )
}

export default Profile