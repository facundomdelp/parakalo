import React, { useEffect, useState } from 'react'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import './scrollbar.css'
import MainRoutes from './router/MainRoutes'
import Footer from './components/Footer'
import { CartContextProvider } from './context/CartContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../db/firebase-config'

function App() {
  const [products, setProducts] = useState([])
  const itemsCollectionRef = collection(db, 'products')

  const getProducts = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef)
    setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log('🚀 ~ products', products)

  return (
    <React.Fragment>
      <CartContextProvider>
        <NavBar />
        <Greetings />
        <MainRoutes />
      </CartContextProvider>
      <Footer />
    </React.Fragment>
  )
}

export default App
