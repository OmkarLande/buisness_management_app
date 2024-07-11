import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Logout from './pages/Logout'

const routes= (
  <Router>
    <Routes>
      <Route path='/home' exact element={<Home/>}/>
      <Route path='/' exact element={<Login />} />
      <Route path='/logout' exact element={<Logout />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/profile' exact element={<Profile />} />
    </Routes>
  </Router>

)
const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App