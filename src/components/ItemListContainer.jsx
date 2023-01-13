import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  console.log('🚀 ~ ItemListContainer ~ products', products)
  const URLJSON = '/data.json'
  useEffect(() => {
    setTimeout(() => {
      fetch(URLJSON)
        .then((products) => products.json())
        .then((products) => setProducts(products)),
        10000
    })
  }, [])
  return (
    <React.Fragment>
      <Box w='100vw' bg='#FBF0DA'>
        <Text align='center' fontWeight='500'>
          {greeting}
        </Text>
      </Box>
    </React.Fragment>
  )
}

export default ItemListContainer
