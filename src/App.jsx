import React, { useEffect, useState } from 'react'
import Greetings from './components/Greetings'
import NavBar from './components/NavBar'
import './scrollbar.css'
import MainRoutes from './router/MainRoutes'
import Footer from './components/Footer'
import { CartContextProvider } from './context/CartContext'
import { collection, getDocs, doc } from 'firebase/firestore'
import { db } from './../db/firebase-config'

function App() {
  const [items, setItems] = useState([])
  const itemsCollectionRef = collection(db, 'products')

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef)
    const docs = querySnapshot.docs.map((doc) => doc.data())
    setItems(docs)
  }

  console.log(items)

  useEffect(() => {
    getItems()
  }, [])

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
