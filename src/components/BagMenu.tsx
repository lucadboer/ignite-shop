import Image from "next/image";
import { BagMenuContainer, CloseButton, ImageContainer, ProductContainer, ProductOnBag } from "../styles/BagMenu";

import { X } from "phosphor-react";
import { useCart } from "../hooks/useCart";
import { formattedMoney } from "../utils/formatter";
import { BagEmpity } from "./BagEmpity";
import axios from "axios";

interface BagMenuProps {
  onBagOpen: () => void
}

export function BagMenu({ onBagOpen }: BagMenuProps) {
  const { removeFromCart, cartItems, sumAllValues } = useCart()

  async function handleBuyProduct() {
    try {
      // setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      // setIsCreatingCheckoutSession(false)
      console.log(error);
      
    }      
  }

  function handleCloseBagMenu() {
    onBagOpen()
  }

  function handleRemoveItemFromCart(productId: string) {
    removeFromCart(productId)
  }

  const productsTotal = sumAllValues()

  return (
    <BagMenuContainer>
      <CloseButton onClick={handleCloseBagMenu}>
        <X size={24} />
      </CloseButton>
      <h2>Sacola de compras</h2>

      <ProductContainer>
        {cartItems.length <= 0 && <BagEmpity />}

        {cartItems.map(product => {
          return (
            <ProductOnBag key={product.id}>
              
              <ImageContainer>
                <Image src={product.imageUrl} width={95} height={90} alt='' />
              </ImageContainer>
              <div>
                <span>{product.name}</span>
                <strong>{formattedMoney(product.price / 100)}</strong>
                <button onClick={() => {
                  handleRemoveItemFromCart(product.id)
                }}>Remover</button>
              </div>
            </ProductOnBag>
          )
        })}


      </ProductContainer>

      <footer>
        <header>
          <span>Quantidade</span>
          <span>{cartItems.length} {cartItems.length > 1 ? 'itens' : 'item'}</span>
        </header>
        <main>
          <span>Valor total</span>
          <strong>{formattedMoney(productsTotal / 100)}</strong>
        </main>

        <button onClick={handleBuyProduct} disabled={cartItems.length === 0}>Finalizar a compra</button>
      </footer>
    </BagMenuContainer>
  )
}
