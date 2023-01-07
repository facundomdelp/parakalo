import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
  return (
    <React.Fragment>
      <Box w='100vw' bg='#FBF0DA'>
        <Text align='center' fontWeight='500'>
          {greeting}
        </Text>
      </Box>
      <ItemCount />
    </React.Fragment>
  )
}

export default ItemListContainer
