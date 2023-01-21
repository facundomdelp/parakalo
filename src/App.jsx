import React from 'react'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import './scrollbar.css'
import MainRoutes from './router/MainRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Greetings />
      <MainRoutes />
      <Footer />
    </React.Fragment>
  )
}

export default App
