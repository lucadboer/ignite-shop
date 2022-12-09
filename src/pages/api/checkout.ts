import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";

export default async function Checkout(req: NextApiRequest, res: NextApiResponse) {
  const { products } = req.body as { products: Product[] }
  
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'})
  }

  if (!products) {
    return res.status(400).json({error: 'Price not found'})
  }

  const cancelUrl = process.env.NEXT_APP
  const successUrl = `${process.env.NEXT_APP}success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl as string,
    success_url: successUrl as string,
    mode: 'payment',
    line_items: products.map(product => ({
      price: product.priceId,
      quantity: 1,
    }))
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}