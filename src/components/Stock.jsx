import { Box } from '@chakra-ui/react'
import React from 'react'

const Stock = ({ singleProduct }) => {
  return (
    <Box
      w='100%'
      h='1.75em'
      textAlign='center'
      color='gray.700'
      fontSize='sm'
      fontWeight='bold'
    >
      {singleProduct.stock === 0
        ? 'SIN STOCK'
        : 'STOCK DISPONIBLE: ' + singleProduct.stock}
    </Box>
  )
}

export default Stock
