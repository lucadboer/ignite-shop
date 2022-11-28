import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sint molestias dolorem velit, rerum consequuntur quasi voluptatem corporis nesciunt laudantium accusamus eligendi corrupti, et cum voluptates illum iure, asperiores error.</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}