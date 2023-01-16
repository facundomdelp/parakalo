import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const SingleLink = ({ singleLink }) => {
  return (
    <Text
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      fontWeight='500'
      fontSize='14'
    >
      {singleLink}
    </Text>
  )
}

export default SingleLink
