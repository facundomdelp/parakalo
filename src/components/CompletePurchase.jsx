import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CartCalc } from '../utils/CartCalc'

export default function CompletePurchase({ carrito }) {
  const [name, setName] = useState({ nombre: '', apellido: '' })
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState({
    calle: '',
    altura: '',
    pisoNro: '',
    localidad: '',
    provincia: '',
    cp: '',
  })
  const [currentDate, setCurrentDate] = useState(new Date())
  const { precioTotal } = CartCalc(carrito)
  const handleNameChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleAdressChange = (e) => {
    setAdress({ ...adress, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setCurrentDate(new Date())
    const compraFinalizada = {
      comprador: { name, email, adress },
      compra: { ...carrito },
      currentDate: currentDate.toLocaleString(),
      precioTotal,
    }
  }
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Completa con tus datos para finalizar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <Box marginBottom={4}>
              <FormLabel>Nombre</FormLabel>
              <Flex gap={1.5}>
                <Input
                  placeholder='Nombre'
                  name='nombre'
                  value={name.nombre}
                  onChange={handleNameChange}
                />
                <Input
                  placeholder='Apellido'
                  name='apellido'
                  value={name.apellido}
                  onChange={handleNameChange}
                />
              </Flex>
            </Box>
            <Box marginBottom={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
              />
            </Box>
            <Box marginBottom={4}>
              <FormLabel>Dirección</FormLabel>
              <Flex gap={1.5} marginBottom={1.5}>
                <Input
                  flexBasis={1}
                  flexGrow={2.5}
                  placeholder='Calle'
                  name='calle'
                  value={adress.calle}
                  onChange={handleAdressChange}
                />
                <Input
                  flexBasis={1}
                  flexGrow={1}
                  placeholder='Atura'
                  name='altura'
                  value={adress.altura}
                  onChange={handleAdressChange}
                />
                <Input
                  flexBasis={1}
                  flexGrow={1}
                  placeholder='Piso/Nro'
                  name='pisoNro'
                  value={adress.pisoNro}
                  onChange={handleAdressChange}
                />
              </Flex>
              <Flex gap={1.5}>
                <Input
                  flexBasis={1}
                  flexGrow={2}
                  placeholder='Localidad'
                  name='localidad'
                  value={adress.localidad}
                  onChange={handleAdressChange}
                />
                <Input
                  flexBasis={1}
                  flexGrow={2}
                  placeholder='Provincia'
                  name='provincia'
                  value={adress.provincia}
                  onChange={handleAdressChange}
                />
                <Input
                  flexBasis={1}
                  flexGrow={1}
                  placeholder='C.P.'
                  name='cp'
                  value={adress.cp}
                  onChange={handleAdressChange}
                />
              </Flex>
              <FormHelperText>
                No compartiremos con nadie tus datos personales.
              </FormHelperText>
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            type='submit'
            colorScheme='blue'
            mr={3}
            onClick={handleSubmit}
          >
            Finalizar Compra
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}
