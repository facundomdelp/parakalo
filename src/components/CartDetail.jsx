import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const CartDetail = () => {
  const { carrito, setCarrito } = useContext(CartContext)
  const [isLargerThat700] = useMediaQuery('(min-width: 700px)')
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
  return carrito.length === 0 ? (
    <Box
      minH={'100vh'}
      mt={'2rem'}
      marginInline={'auto'}
      maxWidth={'42rem'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={'.5em'}
      paddingInline={'1rem'}
    >
      <Text fontSize={'24px'} fontWeight={'500'}>
        ¡Tu carrito está vacío!
      </Text>
      <Text textAlign={'center'}>
        Vuelve a la página principal para descrubir miles de productos.
      </Text>
      <Link to={'/'}>
        <Button width={'fit-content'} marginTop={'1em'} paddingInline={'4em'}>
          PÁGINA PRINCIPAL
        </Button>
      </Link>
    </Box>
  ) : isLargerThat700 ? (
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
            ${compra.cantidad * compra.precio.slice(1)}
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
      <Box textAlign={'right'} paddingInline={'3rem'}>
        <Button mt={'2em'}>FINALIZAR COMPRA</Button>
      </Box>
    </Box>
  ) : (
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
            <Img src={compra.imagen} borderRadius={'lg'} maxWidth={'6rem'} />
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
            ${compra.cantidad * compra.precio.slice(1)}
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
      <Box textAlign={'right'} paddingInline={'1rem'} paddingBottom={'2rem'}>
        <Button mt={'2em'}>FINALIZAR COMPRA</Button>
      </Box>
    </Box>
  )
}

export default CartDetail
