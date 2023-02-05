export function CartCalc(carrito) {
  const cantidadDeArticulos =
    carrito.length > 0
      ? carrito
          .map((articulo) => articulo.cantidad)
          .reduce((acumulador, valorActual) => acumulador + valorActual)
      : 0
  const precioTotal =
    carrito.length > 0
      ? carrito
          .map((articulo) => parseInt(articulo.precio * articulo.cantidad))
          .reduce((acumulador, valorActual) => acumulador + valorActual)
      : 0
  return { cantidadDeArticulos, precioTotal }
}
