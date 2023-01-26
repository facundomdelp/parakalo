import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Box, Button, Table, Td, Th, Tr } from '@chakra-ui/react'

const CartDetail = () => {
  const { carrito } = useContext(CartContext)
  return (
    <Box minH={'100vh'}>
      <Table>
        <Tr>
          <Th>Producto</Th>
          <Th textAlign={'center'}>Cantidad</Th>
          <Th textAlign={'center'}>Precio por Artículo</Th>
          <Th textAlign={'center'}>Precio Final</Th>
        </Tr>
        {carrito.map((compra) => (
          <Tr key={compra.id}>
            <Td>{compra.nombre}</Td>
            <Td textAlign={'center'}>{compra.cantidad}</Td>
            <Td textAlign={'center'}>{compra.precio}</Td>
            <Td textAlign={'center'}>
              ${compra.cantidad * compra.precio.slice(1)}
            </Td>
            <Td>
              <Button>ELIMINAR</Button>
            </Td>
          </Tr>
        ))}
      </Table>
    </Box>
  )
}

export default CartDetail
