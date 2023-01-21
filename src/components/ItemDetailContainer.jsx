import React from 'react'
import getProducts from '../customHooks/getProducts'
import ItemDetail from './ItemDetail'
import Loading from './Loading'

const ItemDetailContainer = () => {
  const [products, loading] = getProducts()
  return (
    <React.Fragment>
      {loading ? <Loading /> : <ItemDetail products={products} />}
    </React.Fragment>
  )
}

export default ItemDetailContainer
