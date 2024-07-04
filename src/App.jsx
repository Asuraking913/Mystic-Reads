import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Land from './pages/land'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Land />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App