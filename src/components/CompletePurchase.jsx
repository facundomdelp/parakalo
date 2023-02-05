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
  Text,
} from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { db } from '../../db/firebase-config'
import CartContext from '../context/CartContext'
import { CartCalc } from '../utils/CartCalc'
import Loading from './Loading'

export default function CompletePurchase() {
  const { carrito, setCarrito } = useContext(CartContext)
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
  const [loading, setLoading] = useState(false)
  const [compraFinalizada, setCompraFinalizada] = useState(false)
  const [camposObligatorios, setCamposObligatorios] = useState(false)
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

  const handleSubmit = async (e) => {
    if (
      !name.nombre ||
      !name.apellido ||
      !email ||
      !adress.calle ||
      !adress.altura ||
      !adress.localidad ||
      !adress.provincia ||
      !adress.cp
    ) {
      setCamposObligatorios(true)
      return
    }
    setLoading(true)
    setCurrentDate(new Date())
    const compraFinalizada = {
      comprador: { name, email, adress },
      compra: { ...carrito },
      currentDate: currentDate.toLocaleString(),
      precioTotal,
    }
    await addDoc(collection(db, 'compras'), compraFinalizada)
    setLoading(false)
    setCompraFinalizada(true)
    setTimeout(() => {
      setCarrito([])
      setCompraFinalizada(false)
      setCamposObligatorios(false)
    }, 8000)
  }
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        {loading ? (
          <ModalBody>
            <Flex
              height={'200px'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Loading />
            </Flex>
          </ModalBody>
        ) : compraFinalizada ? (
          <ModalBody>
            <Flex
              height={'200px'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Text fontSize={'xl'}>¡Tu compra se ha realizado con éxito!</Text>
              <Text>Este mensaje se cerrará de forma automática</Text>
            </Flex>
          </ModalBody>
        ) : (
          <>
            <ModalHeader>Completa con tus datos para finalizar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <Box marginBottom={4}>
                  <FormLabel>Nombre</FormLabel>
                  <Flex gap={1.5}>
                    <Input
                      isInvalid={camposObligatorios && !name.nombre}
                      placeholder='Nombre'
                      name='nombre'
                      value={name.nombre}
                      onChange={handleNameChange}
                    />
                    <Input
                      isInvalid={camposObligatorios && !name.apellido}
                      placeholder='Apellido'
                      name='apellido'
                      value={name.apellido}
                      onChange={handleNameChange}
                    />
                  </Flex>
                </Box>
                <Box marginBottom={4}>
                  <FormLabel>Correo</FormLabel>
                  <Input
                    isInvalid={camposObligatorios && !email}
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
                      isInvalid={camposObligatorios && !adress.calle}
                      flexBasis={1}
                      flexGrow={2.5}
                      placeholder='Calle'
                      name='calle'
                      value={adress.calle}
                      onChange={handleAdressChange}
                    />
                    <Input
                      isInvalid={camposObligatorios && !adress.altura}
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
                  <Flex gap={1.5} marginBottom={4}>
                    <Input
                      isInvalid={camposObligatorios && !adress.localidad}
                      flexBasis={1}
                      flexGrow={2}
                      placeholder='Localidad'
                      name='localidad'
                      value={adress.localidad}
                      onChange={handleAdressChange}
                    />
                    <Input
                      isInvalid={camposObligatorios && !adress.provincia}
                      flexBasis={1}
                      flexGrow={2}
                      placeholder='Provincia'
                      name='provincia'
                      value={adress.provincia}
                      onChange={handleAdressChange}
                    />
                    <Input
                      isInvalid={camposObligatorios && !adress.cp}
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
                  {camposObligatorios && (
                    <FormHelperText color={'red'} fontWeight={'bold'}>
                      ¡Completa todos los campos obligatorios!
                    </FormHelperText>
                  )}
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
          </>
        )}
      </ModalContent>
    </>
  )
}
