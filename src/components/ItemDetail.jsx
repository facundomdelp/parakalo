import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({ nombre, imagen, descripcion, precio, stock }) => {
  return (
    <Flex justifyContent={'center'} marginTop={'3em'}>
      <Card boxShadow={'2xl'} maxW={'20em'}>
        <CardBody>
          <Heading size={'md'} color={'gray.700'}>
            {nombre}
          </Heading>
          <Image
            marginInline={'auto'}
            marginBlock={'1em'}
            src={imagen}
            alt={nombre}
            borderRadius={'lg'}
            boxSize={'12em'}
          />
          <Stack mt={'6'} spacing={'3'}>
            <Text fontSize='sm'>{descripcion}</Text>
            <Text color={'blue.600'} fontSize={'2xl'}>
              {precio}
            </Text>
          </Stack>
        </CardBody>
        <ItemCount stock={stock} />
      </Card>
    </Flex>
  )
}

export default ItemDetail
