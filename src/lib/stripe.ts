import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRITE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Store',
  }
})