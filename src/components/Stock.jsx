import { Box } from '@chakra-ui/react'
import React from 'react'

const Stock = ({ stock }) => {
  return (
    <Box
      borderWidth='.5px'
      borderColor='gray.400'
      w='100%'
      h='1.75em'
      textAlign='center'
      color='gray.700'
    >
      {stock === 0 ? 'SIN STOCK' : 'STOCK DISPONIBLE: ' + stock}
    </Box>
  )
}

export default Stock
