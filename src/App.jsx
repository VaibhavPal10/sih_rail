import { useState } from 'react'
import './App.css'
import GrievanceForm from './components/RailMadadApp'
import RailMadadApp from './components/RailMadadApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div >
      <RailMadadApp/>
    </div>
    <Footer/>
    </>
  )
}

export default App
