import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const Item = () => {
  return (
    <Card maxW='250px' boxShadow='2xl'>
      <CardBody>
        <Image src={imagen} alt={nombre} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='sm'>{nombre}</Heading>
          <Text fontSize='xs'>{descripcion}</Text>
          <Text color='blue.600' fontSize='2xl'>
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default Item
