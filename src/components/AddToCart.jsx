import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const AddToCart = () => {
  return (
    <Button
      borderWidth='.5px'
      borderColor='gray.400'
      w='100%'
      h='1.75em'
      textAlign='center'
      color='gray.700'
    >
      AGREGAR AL CARRITO
      <Icon ml={2} as={AiOutlineShoppingCart} />
    </Button>
  )
}

export default AddToCart
