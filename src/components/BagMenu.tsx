import Image from "next/image";
import { BagMenuContainer, CloseButton, ImageContainer, ProductOnBag } from "../styles/BagMenu";

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

      <footer>
        <div>
          <span>Quantidade</span>
          <strong>Valor total</strong>
        </div>
        <div>
          <span>3 itens</span>
          <strong>R$ 270,00</strong>
        </div>

        <button>Finalizar a compra</button>
      </footer>
    </BagMenuContainer>
  )
}