import React from 'react'
import {
  Box,
  Grid,
  GridItem,
  Img,
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { CartCalc } from '../utils/CartCalc'
import CompletePurchase from './CompletePurchase'

const CartDetailDesktop = ({ carrito, setCarrito }) => {
  const { cantidadDeArticulos, precioTotal } = CartCalc(carrito)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH={'100vh'} mt={'1.5rem'} marginInline={'auto'} minWidth={'42rem'}>
      {carrito.map((compra) => (
        <Grid
          templateAreas={`"imagen   producto      tituloPrecioPorArticulo   tituloCantidad        tituloPrecioPorCompra"
                          "imagen   descripcion   precioPorArticulo         cantidadPorArticulo   precioPorCompra"
                          "imagen   eliminar      eliminar                  eliminar              eliminar"`}
          gridTemplateColumns={'1.25fr 3fr 1fr 1fr 1fr'}
          gridTemplateRows={'auto 1fr auto'}
          gap={'.5'}
          marginInline={'3em'}
          mb={'2rem'}
          borderBottom={'2px solid gray'}
          color={'gray.700'}
          key={compra.id}
        >
          <GridItem
            area={'imagen'}
            paddingInline={'.75rem'}
            pb={'.75rem'}
            alignSelf={'top'}
          >
            <Img src={compra.imagen} borderRadius={'lg'} w={'100%'} />
          </GridItem>
          <GridItem
            area={'producto'}
            paddingInline={'1rem'}
            fontWeight={'bold'}
          >
            {compra.nombre}
          </GridItem>
          <GridItem
            area={'descripcion'}
            paddingInline={'1rem'}
            fontSize={'12px'}
          >
            {compra.descripcion}
          </GridItem>
          <GridItem
            area={'tituloPrecioPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'center'}
            fontWeight={'bold'}
          >
            C/U
          </GridItem>
          <GridItem
            area={'tituloCantidad'}
            paddingInline={'1rem'}
            justifySelf={'center'}
            fontWeight={'bold'}
          >
            Cantidad
          </GridItem>
          <GridItem
            area={'tituloPrecioPorCompra'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            fontWeight={'bold'}
          >
            Total
          </GridItem>
          <GridItem
            area={'precioPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'center'}
            fontSize={'14px'}
          >
            {compra.precio}
          </GridItem>
          <GridItem
            area={'cantidadPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'center'}
            fontSize={'14px'}
          >
            {compra.cantidad}
          </GridItem>
          <GridItem
            area={'precioPorCompra'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            fontSize={'14px'}
          >
            ${compra.cantidad * compra.precio}
          </GridItem>
          <GridItem
            area={'eliminar'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            paddingBlock={'1em'}
          >
            <Button
              variant={'link'}
              onClick={() => {
                setCarrito(
                  carrito.filter(
                    (compraAEliminar) => compraAEliminar.id !== compra.id
                  )
                )
              }}
            >
              <DeleteIcon boxSize={'4'} color={'gray.700'} />
            </Button>
          </GridItem>
        </Grid>
      ))}
      <Flex
        justifyContent={'space-between'}
        paddingInline={'3rem'}
        fontSize={'20px'}
        fontWeight={'bold'}
        color={'gray.600'}
      >
        <Text>
          {cantidadDeArticulos}
          {cantidadDeArticulos === 1 ? ' ITEM' : ' ITEMS'}
        </Text>
        <Text>${precioTotal}</Text>
      </Flex>
      <Flex
        textAlign={'right'}
        paddingInline={'3rem'}
        justifyContent={'space-between'}
      >
        <Button mt={'2em'} onClick={() => setCarrito([])}>
          VACIAR CARRITO
        </Button>
        <Button mt={'2em'} onClick={onOpen}>
          FINALIZAR COMPRA
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <CompletePurchase />
        </Modal>
      </Flex>
    </Box>
  )
}

export default CartDetailDesktop
