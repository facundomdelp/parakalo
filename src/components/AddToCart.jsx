import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const AddToCart = () => {
  return (
    <Button
      borderWidth='.5px'
      borderColor='gray.400'
      w='80%'
      h='2.5em'
      textAlign='center'
      color='gray.700'
      marginInline='auto'
      marginTop='.5em'
      marginBottom='1.5em'
    >
      AGREGAR AL CARRITO
      <Icon ml={2} as={AiOutlineShoppingCart} />
    </Button>
  )
}

export default AddToCart
