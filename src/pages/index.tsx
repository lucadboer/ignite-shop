import Image from "next/image"

import { styled } from "../styles"
import { HomeContainer, Product } from "../styles/pages/home"
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider}  from 'keen-slider/react'
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"
import { formattedMoney } from "../utils/formatter"

interface HomeProps {
  products: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: 2.3,
      spacing: 48,
      
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
  
          <footer>
            <span>
            {product.name}
            </span>
            <strong>{formattedMoney(product.price / 100)}</strong>
          </footer>
        </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: price.unit_amount,
    }
  })
  
  return {
    props: {
      products,
    }
  }
}
