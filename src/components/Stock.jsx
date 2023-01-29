import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Stock = ({ stock, id }) => {
  const { carrito } = useContext(CartContext)
  return (
    <Box
      w={'100%'}
      h={'1.75em'}
      textAlign={'center'}
      color={'gray.700'}
      fontSize={'sm'}
      fontWeight={'bold'}
    >
      {stock === 0
        ? 'SIN STOCK'
        : 'STOCK DISPONIBLE: ' +
          (stock -
            (carrito.find((compra) => compra.id === id) === undefined
              ? 0
              : carrito.find((compra) => compra.id === id).cantidad))}
    </Box>
  )
}

export default Stock
