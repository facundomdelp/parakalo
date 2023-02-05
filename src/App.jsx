import React from 'react'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import './scrollbar.css'
import MainRoutes from './router/MainRoutes'
import Footer from './components/Footer'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <body className='layout'>
      <CartContextProvider>
        <NavBar />
        <Greetings />
        <MainRoutes />
      </CartContextProvider>
      <Footer />
    </body>
  )
}

export default App
