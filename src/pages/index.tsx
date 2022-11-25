import Image from "next/image"

import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"

import shirt1 from '../assets/camisetas/1.png'
import shirt2 from '../assets/camisetas/2.png'
import shirt3 from '../assets/camisetas/3.png'
import shirt4 from '../assets/camisetas/4.png'

const Button = styled('button', {
  backgroundColor: "$green500",
  color: "$gray100",
  padding: '4px 8px',
  borderRadius: '4px',
  width: '20rem',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <span>
          Camiseta Beyond the Limits
          </span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <span>
          Camiseta Beyond the Limits
          </span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>
    </HomeContainer>
  )
}
