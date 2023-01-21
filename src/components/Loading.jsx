import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justifyContent='center' mt='1em'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  )
}

export default Loading
