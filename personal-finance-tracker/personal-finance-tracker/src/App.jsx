import React from "react"
import Home from './components/Home.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Settings from './components/Settings.jsx'
import Navbar from './components/Header.jsx'
import {Routes, Route} from "react-router-dom"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div>
      <Navbar toggleDarkMode = {toggleDarkMode}/>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </div>
  )
}
