import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed")
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Mrs Black Owned — Digital Edition",
              description: "The definitive guide celebrating Black-owned beauty brands",
            },
            unit_amount: 2500, // $25.00
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
