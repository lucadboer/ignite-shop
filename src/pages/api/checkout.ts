import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function Checkout(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body
  
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'})
  }

  if (!priceId) {
    return res.status(400).json({error: 'Price not found'})
  }

  const cancelUrl = process.env.NEXT_APP
  const successUrl = `${process.env.NEXT_APP}success?session_id={CHECKOUT_SESSION_ID}`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl as string,
    success_url: successUrl as string,
    mode: 'payment',
    line_items: [{
      price: priceId,
      quantity: 1,
    }]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}