import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
// import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </>
  )
}

export default App
