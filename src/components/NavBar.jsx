import React from 'react'
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Image,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import parakaloDesign from '/assets/parakaloDesign.svg'
import { Link } from 'react-router-dom'
import SingleLink from './SingleLink'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function Simple() {
  const secciones = [
    { to: '/', singleLink: 'Productos' },
    { to: 'estandar', singleLink: 'Estándar' },
    { to: 'arte', singleLink: 'Arte' },
    { to: 'chicos', singleLink: 'Niños' },
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <React.Fragment>
      <Box bg={useColorModeValue('#C5E2FB')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to={'/'}>
                <Image
                  maxW={'150px'}
                  objectFit={'contain'}
                  src={parakaloDesign}
                  alt={'Parakalo Design'}
                />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {secciones.map((seccion) => (
                <Link to={seccion.to}>
                  <SingleLink singleLink={seccion.singleLink} />
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <CartWidget />
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {secciones.map((seccion) => (
                <Link to={seccion.to}>
                  <SingleLink singleLink={seccion.singleLink} />
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </React.Fragment>
  )
}
