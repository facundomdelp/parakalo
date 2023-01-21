import React from 'react'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import './scrollbar.css'
import getProducts from './customHooks/getProducts'
import Loading from './components/Loading'
import MainRoutes from './router/MainRoutes'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Greetings />
      <MainRoutes />
    </React.Fragment>
  )
}

export default App
