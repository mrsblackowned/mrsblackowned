import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
}

export async function redirectToCheckout({ sessionId }) {
  const stripe = await getStripe();
  return stripe.redirectToCheckout({ sessionId });
}
