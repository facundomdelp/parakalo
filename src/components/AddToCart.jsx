import { Button, Icon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartContext from '../context/CartContext'

const AddToCart = ({ id, nombre, precio, cantidadAgregada }) => {
  const { carrito, setCarrito } = useContext(CartContext)
  function onAdd() {
    if (carrito.find((compra) => compra.id === id)) {
      carrito.find((compra) => compra.id === id).cantidad += cantidadAgregada
      setCarrito([...carrito])
    } else {
      setCarrito([
        ...carrito,
        { id: id, nombre: nombre, precio: precio, cantidad: cantidadAgregada },
      ])
    }
  }
  console.log('🚀 ~ AddToCart ~ carrito', carrito)
  return (
    <React.Fragment>
      {
        <Button
          borderWidth={'.5px'}
          borderColor={'gray.400'}
          w={'80%'}
          h={'2.5em'}
          textAlign={'center'}
          color={'gray.700'}
          marginInline={'auto'}
          marginTop={'.5em'}
          marginBottom={'1.5em'}
          onClick={onAdd}
        >
          AGREGAR AL CARRITO
          <Icon ml={2} as={AiOutlineShoppingCart} />
        </Button>
      }
    </React.Fragment>
  )
}

export default AddToCart
