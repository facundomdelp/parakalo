import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Greetings = () => {
  const greetings = '¡Bienvenidos a la tienda Parakaló!'
  return (
    <Box w={'100%'} bg={'#FBF0DA'}>
      <Text align={'center'} fontWeight={'500'}>
        {greetings}
      </Text>
    </Box>
  )
}

export default Greetings
