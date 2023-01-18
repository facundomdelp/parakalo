import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Item from './Item'

function ItemListContainer({ products }) {
  const categoria = useLocation().pathname.split('/')[1]
  return (
    <React.Fragment>
      <Flex flexWrap='wrap' justifyContent='center' gap='1.5em' p='1.5em'>
        {categoria === ''
          ? products.map((singleProduct) => (
              <Item key={singleProduct.id} singleProduct={singleProduct} />
            ))
          : products
              .filter((singleProduct) => singleProduct.categoria === categoria)
              .map((singleProduct) => (
                <Item key={singleProduct.id} singleProduct={singleProduct} />
              ))}
      </Flex>
    </React.Fragment>
  )
}

export default ItemListContainer
