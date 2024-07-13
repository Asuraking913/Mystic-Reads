import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './pages/land'
import Login from './pages/login'
import Create from './pages/createAcct'
import Profile from './pages/profile'

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
          </Routes>
        </Router>
    </div>
  )
}

export default App