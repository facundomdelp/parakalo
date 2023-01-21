import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function getProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const URLJSON = '/data.json'
  const categoria = useLocation().pathname.split('/')[1]
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch(URLJSON)
        .then((products) => products.json())
        .then((products) => setProducts(products.cortinas))
        .then((loading) => setLoading(false))
    }, 2000)
  }, [categoria])
  return [products, loading]
}
export default getProducts
