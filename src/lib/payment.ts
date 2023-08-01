import dotenv from "dotenv";
import Stripe from "stripe";
dotenv.config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(
  "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",
  {
    apiVersion: "2022-11-15",
  }
);

export const createCheckoutSession = async (priceId: string, id: string) => {
  return await stripe.checkout.sessions.create({
    success_url: `https://factonation-five.vercel.app/payment?user=${id}`,
    cancel_url: "https://factonation-five.vercel.app/",
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    metadata: {
      userId: id,
    },
  });
};
