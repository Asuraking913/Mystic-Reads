import React, { useContext, useEffect } from 'react'
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
import PrivateRoutes from './utils/privateRoute'
import { useState } from 'react'
import user from "../src/assets/user.svg"
import AuthContext from './utils/fetchUserPic'
import { userPicContext } from './utils/fetchUserPic'
import Axios913 from './utils/Axios913'

function App() {
  
  const {auth, setAuth} = useContext(AuthContext)

  useEffect(() => {
    document.title = "Mystic Reads"
  })

  const [images, setImage] = useState({cover_image: "", profile_image: user})

    const handleImages = async () => {
        const response = await Axios913.get('/api/fetch_picture').then(response => {
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

          if(err.response.status === 400) {
            return
          }
        })
      }

      useEffect(() => {
        if(auth) {
        handleImages()
      } 
      }, [auth])

  return (
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
  )
}

export default App