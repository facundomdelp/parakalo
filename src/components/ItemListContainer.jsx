import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import getProducts from '../customHooks/getProducts'
import Item from './Item'
import Loading from './Loading'

function ItemListContainer() {
  const categoria = useLocation().pathname.split('/')[1]
  const [products, loading] = getProducts()
  return (
    <Box minH={'100vh'}>
      <Grid
        gridTemplateColumns={'repeat(auto-fit, minmax(250px, 1fr))'}
        gap={'1rem'}
        margin={'2rem'}
        textAlign={'center'}
      >
        {loading ? (
          <Loading />
        ) : categoria === '' ? (
          products.map((singleProduct) => (
            <Item
              key={singleProduct.id}
              nombre={singleProduct.nombre}
              imagen={singleProduct.imagen}
              precio={singleProduct.precio}
            />
          ))
        ) : (
          products
            .filter((singleProduct) => singleProduct.categoria === categoria)
            .map((singleProduct) => (
              <Item
                key={singleProduct.id}
                nombre={singleProduct.nombre}
                imagen={singleProduct.imagen}
                precio={singleProduct.precio}
              />
            ))
        )}
      </Grid>
    </Box>
  )
}

export default ItemListContainer
