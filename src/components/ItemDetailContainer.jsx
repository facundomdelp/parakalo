import React from 'react'
import { Box } from '@chakra-ui/react'
import getProducts from '../hooks/getProducts'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { products, loading } = getProducts()
  const { id } = useParams()
  const singleProduct = products.find((singleProduct) => singleProduct.id === id)
  return (
    <Box minH={'100vh'}>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          id={singleProduct.id}
          nombre={singleProduct.nombre}
          imagen={singleProduct.imagen}
          descripcion={singleProduct.descripcion}
          precio={singleProduct.precio}
          stock={singleProduct.stock}
        />
      )}
    </Box>
  )
}

export default ItemDetailContainer
