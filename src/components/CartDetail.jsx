import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Box, Button, Grid, GridItem, Img } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const CartDetail = () => {
  const { carrito } = useContext(CartContext)
  const cantidadDeArticulos =
    carrito.length > 0
      ? carrito
          .map((articulo) => articulo.cantidad)
          .reduce((acumulador, valorActual) => acumulador + valorActual)
      : 0
  const precioTotal =
    carrito.length > 0
      ? carrito
          .map((articulo) =>
            parseInt(articulo.precio.slice(1) * articulo.cantidad)
          )
          .reduce((acumulador, valorActual) => acumulador + valorActual)
      : 0
  return (
    <Box minH={'100vh'} mt={'1.5rem'} marginInline={'5rem'}>
      {carrito.map((compra) => (
        <Grid
          key={compra.id}
          templateAreas={`"imagen producto  tituloPrecioPorArticulo   tituloCantidad        tituloPrecioPorCompra"
                          "imagen descripcion  precioPorArticulo         cantidadPorArticulo   precioPorCompra"
                          "imagen eliminar  eliminar                  eliminar              eliminar"`}
          gridTemplateColumns={'1.25fr 3fr 1fr 1fr 1fr'}
          gridTemplateRows={'auto 1fr auto'}
          gap={'.5'}
          mb={'2rem'}
          borderBottom={'2px solid gray'}
          color={'gray.700'}
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
            ${compra.cantidad * compra.precio.slice(1)}
          </GridItem>
          <GridItem
            area={'eliminar'}
            paddingInline={'1rem'}
            justifySelf={'right'}
            paddingBlock={'1em'}
          >
            <Button variant={'link'}>
              <DeleteIcon boxSize={'5'} color={'gray.700'} />
            </Button>
          </GridItem>
        </Grid>
      ))}
    </Box>
  )
}

export default CartDetail
