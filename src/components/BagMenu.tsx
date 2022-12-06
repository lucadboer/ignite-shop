import Image from "next/image";
import { BagMenuContainer, CloseButton, ImageContainer, ProductContainer, ProductOnBag } from "../styles/BagMenu";

import shirt from '../assets/camisetas/2.png'
import { X } from "phosphor-react";

interface BagMenuProps {
  onBagOpen: () => void
}

export function BagMenu({ onBagOpen }: BagMenuProps) {
  function handleCloseBagMenu() {
    onBagOpen()
  }

  return (
    <BagMenuContainer>
      <CloseButton onClick={handleCloseBagMenu}>
        <X size={24} />
      </CloseButton>
      <h2>Sacola de compras</h2>

      <ProductContainer>
        <ProductOnBag>
          <ImageContainer>
            <Image src={shirt} width={95} height={90} alt='' />
          </ImageContainer>
          <div>
            <span>Camiseta explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductOnBag>

        <ProductOnBag>
          <ImageContainer>
            <Image src={shirt} width={95} height={90} alt='' />
          </ImageContainer>
          <div>
            <span>Camiseta explorer</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </div>
        </ProductOnBag>


      </ProductContainer>

      <footer>
        <header>
          <span>Quantidade</span>
          <span>3 itens</span>
        </header>
        <main>
          <span>Valor total</span>
          <strong>R$ 170,00</strong>
        </main>

        <button>Finalizar a compra</button>
      </footer>
    </BagMenuContainer>
  )
}
