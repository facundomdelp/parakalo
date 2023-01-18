import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Greetings from './components/Greetings'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './scrollbar.css'
import { Flex, Spinner } from '@chakra-ui/react'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const greetings = '¡Bienvenidos a la tienda Parakaló!'
  const categoria = useLocation().pathname.split('/')[1]
  const URLJSON = '/data.json'
  console.log('🚀 ~ App ~ URLJSON', URLJSON)
  console.log('🚀 ~ App ~ categoria', categoria)
  console.log('🚀 ~ App ~ loading', loading)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch(URLJSON)
        .then((products) => products.json())
        .then((products) => setProducts(products.cortinas))
        .then((loading) => setLoading(false))
    }, 2000)
  }, [categoria])
  return (
    <React.Fragment>
      <NavBar />
      <Greetings greetings={greetings} />
      {loading ? (
        <Flex justifyContent='center' mt='1em'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Flex>
      ) : (
        <Routes>
          <Route path='/' element={<ItemListContainer products={products} />} />
          <Route
            path='/estandar'
            element={<ItemListContainer products={products} />}
          />
          <Route
            path='/arte'
            element={<ItemListContainer products={products} />}
          />
          <Route
            path='/chicos'
            element={<ItemListContainer products={products} />}
          />
          <Route
            path='/detalle/:nombre'
            element={<ItemDetailContainer products={products} />}
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      )}
    </React.Fragment>
  )
}

export default App
