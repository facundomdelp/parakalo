import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartDetailDesktop from './CartDetailDesktop'
import CartDetailDevice from './CartDetailDevice'

const CartDetail = () => {
  const { carrito, setCarrito } = useContext(CartContext)
  const [isLargerThat700] = useMediaQuery('(min-width: 700px)')
  return carrito.length === 0 ? (
    <Box
      minH={'100vh'}
      mt={'2rem'}
      marginInline={'auto'}
      maxWidth={'42rem'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={'.5em'}
      paddingInline={'1rem'}
    >
      <Text fontSize={'24px'} fontWeight={'500'}>
        ¡Tu carrito está vacío!
      </Text>
      <Text textAlign={'center'}>
        Vuelve a la página principal para descrubir miles de productos.
      </Text>
      <Link to={'/'}>
        <Button width={'fit-content'} marginTop={'1em'} paddingInline={'4em'}>
          PÁGINA PRINCIPAL
        </Button>
      </Link>
    </Box>
  ) : isLargerThat700 ? (
    <CartDetailDesktop carrito={carrito} setCarrito={setCarrito} />
  ) : (
    <CartDetailDevice carrito={carrito} setCarrito={setCarrito} />
  )
}

export default CartDetail
