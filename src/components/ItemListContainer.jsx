import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Item from './Item'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  console.log('🚀 ~ ItemListContainer ~ loading', loading)
  console.log('🚀 ~ ItemListContainer ~ products', products)
  const URLJSON = './data.json'
  useEffect(() => {
    setTimeout(() => {
      fetch(URLJSON)
        .then((products) => products.json())
        .then((products) => setProducts(products.cortinas))
        .then((loading) => setLoading(!!loading))
    }, 2000)
  }, [])
  return (
    <React.Fragment>
      <Box w='100vw' bg='#FBF0DA'>
        <Text align='center' fontWeight='500'>
          {greeting}
        </Text>
      </Box>
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
