import { createContext, useState } from "react";

export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  priceId: string
}

interface CartContextData {
  cartItems: Product[]
  cartQuantity: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  checkIfItemAlreadyExists: (productId: string) => boolean
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<Product[]>([])
  const [cartQuantity, setCartQuantity] = useState(0)
  
  function addToCart(product: Product) {
    setCartItems((state) => [...state, product])
    setCartQuantity(cartItems.length)
  }

  function removeFromCart (producId: string) {
    setCartItems((state) => state.filter((product) => product.id !== producId))
    setCartQuantity(state => state - 1)
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkIfItemAlreadyExists, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}