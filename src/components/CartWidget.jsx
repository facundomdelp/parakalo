import { Badge, Flex, Icon } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartContext from '../context/CartContext'

const CartWidget = () => {
  const { carrito } = useContext(CartContext)
  const sumaDeCompras = carrito.length
  return (
    <Flex>
      <Icon as={AiOutlineShoppingCart} boxSize={8} mr={2} />
      <Badge
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        ml={-4}
        mt={4}
        h={5}
        w={5}
        color={'white'}
        borderRadius={'50%'}
        fontSize={'0.7em'}
        bg={'rgba(106, 44, 112)'}
      >
        {sumaDeCompras}
      </Badge>
    </Flex>
  )
}

export default CartWidget
