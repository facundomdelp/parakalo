import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ singleProduct }) => {
  const [loading, setLoading] = useState(true)
  console.log('🚀 ~ ItemDetail ~ loading', loading)
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 2000)
  }, [])
  return (
    <>
      {loading ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          textAlign='center'
          marginBlock='10em'
        />
      ) : (
        <Card boxShadow='2xl' maxW='20em'>
          <CardBody>
            <Heading size='md'>{singleProduct.nombre}</Heading>
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
            <Box marginInline='1em' marginTop='1em'>
              <ItemCount singleProduct={singleProduct} />
            </Box>
          </CardBody>
        </Card>
      )}
    </>
  )
}

export default ItemDetail
