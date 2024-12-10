import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Main from './components/body/Main'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
