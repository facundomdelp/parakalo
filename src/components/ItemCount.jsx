import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddToCart from './AddToCart'
import Stock from './Stock'

const ItemCount = ({ singleProduct }) => {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Box
        borderWidth='1.75px'
        borderColor='gray.400'
        w='80%'
        h='1.75em'
        marginInline='auto'
      >
        <Flex justifyContent='space-between'>
          <Button
            color='blue'
            bg='none'
            h='none'
            p={0}
            onClick={() => (count === 0 ? 0 : setCount(count - 1))}
          >
            <MinusIcon w={3} />
          </Button>
          <Box fontWeight={600} color='gray.600'>
            {count}
          </Box>
          <Button
            color='blue'
            bg='none'
            h='none'
            p={0}
            onClick={() =>
              count === singleProduct.stock
                ? singleProduct.stock
                : setCount(count + 1)
            }
          >
            <AddIcon w={3} />
          </Button>
        </Flex>
      </Box>
      <AddToCart />
      <Stock singleProduct={singleProduct} />
    </React.Fragment>
  )
}

export default ItemCount
