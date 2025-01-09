import { useState } from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources'
import Navbar from './Components/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dsa from './pages/Dsa'
import Dev from './pages/Dev'
import './App.css'
import Project from './pages/Project'
import { ClerkProvider } from '@clerk/clerk-react'
import BTopic from './Components/BTopic'
import NoPage from './pages/NoPage'
import UploadBlog from './pages/UploadBlog'
import ATopic from './Components/ATopic'



 
const App=() =>{

  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dsa" element={<Dsa/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/dev" element={<Dev/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/upload" element={<UploadBlog/>}/>
      <Route path="/basic" element={<BTopic/>}/>
      <Route path="/array" element={<ATopic/>}/>
      <Route path="*" element={<NoPage/>}/>
  </Routes>
    </BrowserRouter>
  
  )
}

export default App
