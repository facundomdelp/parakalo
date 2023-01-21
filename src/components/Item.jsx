import {
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, imagen, precio }) => {
  return (
    <Card boxShadow='xl'>
      <CardBody>
        <Image
          m={'auto'}
          src={imagen}
          alt={nombre}
          borderRadius={'lg'}
          boxSize={'16em'}
        />
        <Stack mt={'6'} spacing={'3'}>
          <Heading size={'sm'} color={'gray.800'}>
            {nombre}
          </Heading>
          <Link to={`/detalle/${nombre}`}>
            <Button colorScheme={'gray'} fontSize={'14px'} w={'100%'}>
              Ver detalle
            </Button>
          </Link>
          <Text color={'blue.600'} fontSize={'2xl'}>
            {precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default Item
