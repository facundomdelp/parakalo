import { Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Greetings from './Greetings'
import Item from './Item'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const URLJSON = './data.json'
  const greetings = '¡Bienvenidos a la tienda Parakaló!'
  useEffect(() => {
    setTimeout(() => {
      fetch(URLJSON)
        .then((products) => products.json())
        .then((products) => setProducts(products.cortinas))
        .then((loading) => setLoading(loading))
    }, 2000)
  }, [])
  return (
    <React.Fragment>
      <Greetings greetings={greetings} />
      <Flex flexWrap='wrap' justifyContent='center' gap='1.5em' p='1.5em'>
        {loading ? (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        ) : (
          products.map((singleProduct) => (
            <Item key={singleProduct.id} singleProduct={singleProduct} />
          ))
        )}
      </Flex>
    </React.Fragment>
  )
}

export default ItemListContainer
