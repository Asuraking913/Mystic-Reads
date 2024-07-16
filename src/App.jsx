import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './pages/land'
import Login from './pages/login'
import Create from './pages/createAcct'
import Profile from './pages/profile'
import ReadPage from './pages/read'
import ForeignView from './pages/foreignProfile'
import Feeds from './pages/newsFeed'

function App() {

  useEffect(() => {
    document.title = "Mystic Reads"
  })

  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Land />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Create />}/>
            <Route path='/profile' element={<Profile  />}/>
            <Route path='/read' element={<ReadPage  />}/>
            <Route path='/foreignView' element={<ForeignView  />}/>
            <Route path='/feeds' element={<Feeds  />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App