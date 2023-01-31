import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../../db/firebase-config'

function getProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const categoria = useLocation().pathname.split('/')[1]
  const itemsCollectionRef = collection(db, 'products')

  const getProducts = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef)
    setProducts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [categoria])

  return { products, loading }
}
export default getProducts
