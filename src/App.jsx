import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './pages/land'
import Login from './pages/login'
import Create from './pages/createAcct'
import Profile from './pages/profile'
import ReadPage from './pages/read'
import ForeignView from './pages/foreignProfile'
import Feeds from './pages/newsFeed'
import Messenger from './pages/messenger'
import Publish from './pages/publish'
import Library from './pages/library'
import PrivateRoutes from './components/privateRoute'
import { useState } from 'react'
import Axios1 from './components/Axios1'
import user from "../src/assets/user.svg"
import { userPicContext } from './components/fetchUserPic'
import Nav from './components/nav'

function App() {

  useEffect(() => {
    document.title = "Mystic Reads"
  })

  const [images, setImage] = useState({cover_image: "", profile_image: user})

    const handleImages = async () => {
        const userId = localStorage.getItem('userId')
        const response = await Axios1.get(`/api/fetch_picture`).then(response => {
        const {cover, profile} = response.data

        if (response.status === 200 && cover) {
            setImage((t) => ({
                ...t, cover_image : `data:${cover.mime};base64,${cover.data}`
            }))
        }
        if (response.status === 200 && profile) {
            setImage((t) => ({
                ...t, profile_image : `data:${profile.mime};base64,${profile.data}`
            }))
        }
        }).catch((err) => {
          if (err.response.data.message === 'Images Unavailable' ) {
            return  
          }

          if(err.response.status === 400) {
            return
          }
        })
      }

      useEffect(() => {
        handleImages()
        
      }, [])

  return (
    // <access_token.Provider >
    <userPicContext.Provider value={images['profile_image']}>
      <div>
          <Router>
            <Routes>
              <Route path='/' element={<Land />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Create />}/>
              <Route path='/library' element={<Library />}/>

                <Route element={<PrivateRoutes />}>
                  <Route path='/profile' element={<Profile  />}/>
                  <Route path='/read' element={<ReadPage  />}/>
                  <Route path='/foreignView' element={<ForeignView  />}/>
                  <Route path='/feeds' element={<Feeds  />}/>
                  <Route path='/sendSms' element={<Messenger  />}/>
                  <Route path='/publish' element={<Publish />}/>
                </Route>
             </Routes>
          </Router>
      </div>
    </userPicContext.Provider>
//  </access_token.Provider>
  )
}

export default App