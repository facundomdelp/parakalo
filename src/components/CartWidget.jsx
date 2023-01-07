import { Badge, Flex, Icon } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartWidget = () => {
  return (
    <Flex>
      <Icon as={AiOutlineShoppingCart} boxSize={8} mr={2} />
      <Badge
        textAlign={'center'}
        pt='1.25'
        ml='-3.5'
        mt='4'
        h='5'
        w='4'
        color='white'
        borderRadius='lg'
        fontSize='0.7em'
        bg='rgba(106, 44, 112)'
      >
        8
      </Badge>
    </Flex>
  )
}

export default CartWidget
