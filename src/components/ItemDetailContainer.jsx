import React from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../customHooks/getProducts'
import ItemDetail from './ItemDetail'
import Loading from './Loading'

const ItemDetailContainer = () => {
  const [products, loading] = getProducts()
  const { nombre } = useParams()
  const singleProduct = products.find(
    (singleProduct) => singleProduct.nombre === nombre
  )
  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          nombre={singleProduct.nombre}
          imagen={singleProduct.imagen}
          descripcion={singleProduct.descripcion}
          precio={singleProduct.precio}
          stock={singleProduct.stock}
        />
      )}
    </React.Fragment>
  )
}

export default ItemDetailContainer
