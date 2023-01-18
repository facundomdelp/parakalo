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

const Item = ({ singleProduct }) => {
  return (
    <Card maxW='250px' boxShadow='2xl'>
      <CardBody>
        <Image
          src={singleProduct.imagen}
          alt={singleProduct.nombre}
          borderRadius='lg'
          boxSize='12em'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='sm' color='gray.800'>
            {singleProduct.nombre}
          </Heading>
          <Link to={`/detalle/${singleProduct.nombre}`}>
            <Button colorScheme='gray' fontSize='14px' w='100%'>
              Ver detalle
            </Button>
          </Link>
          <Text color='blue.600' fontSize='2xl'>
            {singleProduct.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default Item
