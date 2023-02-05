import React from 'react'
import { Box, Grid, GridItem, Img, Button, Text } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { CartCalc } from '../utils/CartCalc'

const CartDetailDevice = ({ carrito, setCarrito }) => {
  const { cantidadDeArticulos, precioTotal } = CartCalc(carrito)
  return (
    <Box
      minH={'100vh'}
      mt={'1.5rem'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      {carrito.map((compra) => (
        <Grid
          templateAreas={`"imagen                     imagen"
                          "producto                   producto"
                          "descripcion                descripcion"
                          "tituloPrecioPorArticulo    precioPorArticulo"
                          "tituloCantidad             cantidadPorArticulo"
                          "tituloPrecioPorCompra      precioPorCompra"
                          "eliminar                   eliminar"`}
          gridTemplateColumns={'8rem 8rem'}
          gridTemplateRows={'auto auto auto auto auto auto auto'}
          gap={'.5'}
          mb={'2rem'}
          borderBottom={'2px solid gray'}
          color={'gray.700'}
          key={compra.id}
        >
          <GridItem
            area={'imagen'}
            paddingInline={'.75rem'}
            marginBottom={'1rem'}
            justifySelf={'center'}
            alignSelf={'center'}
          >
            <Img
              src={compra.imagen}
              borderRadius={'lg'}
              maxWidth={'6rem'}
            />
          </GridItem>
          <GridItem
            area={'producto'}
            paddingInline={'1rem'}
            fontWeight={'bold'}
            textAlign={'center'}
          >
            {compra.nombre}
          </GridItem>
          <GridItem
            area={'descripcion'}
            paddingInline={'1rem'}
            fontSize={'12px'}
            textAlign={'center'}
            pb={'1.5rem'}
          >
            {compra.descripcion}
          </GridItem>
          <GridItem
            area={'tituloPrecioPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            fontWeight={'bold'}
          >
            C/U
          </GridItem>
          <GridItem
            area={'tituloCantidad'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            fontWeight={'bold'}
          >
            Cantidad
          </GridItem>
          <GridItem
            area={'tituloPrecioPorCompra'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            fontWeight={'bold'}
            pb={'1rem'}
          >
            Total
          </GridItem>
          <GridItem
            area={'precioPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'left'}
            fontSize={'14px'}
          >
            {compra.precio}
          </GridItem>
          <GridItem
            area={'cantidadPorArticulo'}
            paddingInline={'1rem'}
            justifySelf={'left'}
            fontSize={'14px'}
          >
            {compra.cantidad}
          </GridItem>
          <GridItem
            area={'precioPorCompra'}
            paddingInline={'1rem'}
            justifySelf={'left'}
            fontSize={'14px'}
          >
            ${compra.cantidad * compra.precio}
          </GridItem>
          <GridItem
            area={'eliminar'}
            paddingInline={'1rem'}
            justifySelf={'center'}
            paddingBottom={'1em'}
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
      <Box
        width={'16rem'}
        display={'flex'}
        justifyContent={'space-between'}
        paddingInline={'1rem'}
        fontSize={'20px'}
        fontWeight={'bold'}
        color={'gray.600'}
      >
        <Text>
          {cantidadDeArticulos}
          {cantidadDeArticulos === 1 ? ' ITEM' : ' ITEMS'}
        </Text>
        <Text>${precioTotal}</Text>
      </Box>
      <Box
        textAlign={'right'}
        paddingInline={'1rem'}
        paddingBottom={'2rem'}
      >
        <Button mt={'2em'}>FINALIZAR COMPRA</Button>
      </Box>
    </Box>
  )
}

export default CartDetailDevice
