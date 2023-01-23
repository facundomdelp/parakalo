import { createContext, useState } from 'react'

const CartContext = createContext([])

export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([])
  return (
    <CartContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
