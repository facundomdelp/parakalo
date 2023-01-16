import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import ItemDetail from './ItemDetail'

const Item = ({ singleProduct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          <Heading size='sm'>{singleProduct.nombre}</Heading>
          <Button colorScheme='gray' fontSize='14px' onClick={onOpen}>
            Ver detalle
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW='20em'>
              <Flex justifyContent='center'>
                {/* ModalContent equivale a ItemListContainer */}
                <ItemDetail singleProduct={singleProduct} />
              </Flex>
              <ModalCloseButton />
            </ModalContent>
          </Modal>
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
