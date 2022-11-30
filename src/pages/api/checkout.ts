import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function Checkout(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body 

  const cancelUrl = process.env.NEXT_APP
  const successUrl = `${process.env.NEXT_APP}sucess`

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: successUrl,
    success_url: cancelUrl as string,
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