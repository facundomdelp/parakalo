import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ products }) => {
  const { nombre } = useParams()
  const singleProduct = products.find(
    (singleProduct) => singleProduct.nombre === nombre
  )
  return (
    <Flex justifyContent='center' marginTop='2em'>
      <Card boxShadow='2xl' maxW='20em'>
        <CardBody>
          <Heading size='md' color='gray.700'>
            {singleProduct.nombre}
          </Heading>
          <Image
            src={singleProduct.imagen}
            alt={singleProduct.nombre}
            borderRadius='lg'
            boxSize='12em'
            m='1em'
          />
          <Stack mt='6' spacing='3'>
            <Text fontSize='sm'>{singleProduct.descripcion}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {singleProduct.precio}
            </Text>
          </Stack>
        </CardBody>
        <ItemCount singleProduct={singleProduct} />
      </Card>
    </Flex>
  )
}

export default ItemDetail
