// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
// import Counter from './Components/useStateCounter'
// import InputSection from './Components/InputSection'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import News from './pages/News.jsx'
import Test from './pages/Test.jsx'



export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/Test' element={<Test/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Login' element={<LogIn/>} />
        <Route path='/SignUp' element={<SignUp/>} />
      </Routes>
      {/* <Counter/> */}
    </>
  )
};


