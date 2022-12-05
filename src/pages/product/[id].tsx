import axios from "axios"
import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import { Skeleton } from "../../components/Skeleton"
import { Spinner } from "../../components/Spinner"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails, SkeletonContainer } from "../../styles/pages/product"
import { formattedMoney } from "../../utils/formatter"

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: number
    priceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  async function handleBuyProduct() {
      try {
        setIsCreatingCheckoutSession(true)
        const response = await axios.post('/api/checkout', {
          priceId: product.priceId,
        })

        const { checkoutUrl } = response.data

        window.location.href = checkoutUrl
      } catch (error) {
        setIsCreatingCheckoutSession(false)
        alert('Falha na compra')
      }      
    }

  if (isFallback) {
    return (
      <SkeletonContainer>
        <Skeleton />
      </SkeletonContainer>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='Foto do produto' />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formattedMoney(product.price / 100)}</span>
          <p>{product.description}</p>
          <p>Criada no Brasil e feita pro mundo, todos nossos produtos são feitos sob demanda para você usando tecnologia de ponta na estamparia. Qualidade garantida pela Reserva INK.</p>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            {isCreatingCheckoutSession ? <Spinner /> : 'Comprar produto'}
          </button>
      </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  if(!params) {
    return {
      notFound: true // Caso não exista parametros, retorna um 404
    }
  }

  const productId = params.id 

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: price.unit_amount,
        priceId: price.id
      },
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}