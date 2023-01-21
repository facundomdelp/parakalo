import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../customHooks/getProducts'
import ItemDetail from './ItemDetail'
import Loading from './Loading'

const ItemDetailContainer = () => {
  const { products, loading } = getProducts()
  const { productoSeleccionado } = useParams()
  const singleProduct = products.find(
    (singleProduct) =>
      singleProduct.productoSeleccionado === productoSeleccionado
  )
  return (
    <Box minH={'100vh'}>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
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
