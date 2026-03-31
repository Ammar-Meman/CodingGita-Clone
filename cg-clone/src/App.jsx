import React , { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import {Route , Routes} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
// import Attendence from './components/Attendence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/' element={ <Home 
      text={"Smart, Simple, and reliable attendence for modern classroooms"}
      button={'Login'}
      />}/>
    </Routes>
      {/* <Home 
      text={"Smart, Simple, and reliable attendence for modern classroooms"}
      button={'Login'}
      /> */}
    </>
  )
}

export default App
