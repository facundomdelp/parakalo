import { Button, Flex, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Stock from './Stock'

const AddToCart = ({ cantidadAgregada, stock }) => {
  const [cantidadComprada, setCantidadComprada] = useState(0)
  const onAdd = () => {
    setCantidadComprada(cantidadComprada + cantidadAgregada)
    return cantidadComprada
  }
  console.log(cantidadComprada)

  return (
    <React.Fragment>
      {cantidadComprada !== 0 ? (
        <Link to={'/carrito'}>
          <Flex justifyContent={'center'}>
            <Button
              borderWidth={'.5px'}
              borderColor={'gray.400'}
              w={'80%'}
              h={'2.5em'}
              textAlign={'center'}
              color={'gray.700'}
              marginTop={'.5em'}
              marginBottom={'1.5em'}
            >
              FINALIZAR MI COMPRA
            </Button>
          </Flex>
        </Link>
      ) : (
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
      )}
      <Stock stock={stock} />
    </React.Fragment>
  )
}

export default AddToCart
