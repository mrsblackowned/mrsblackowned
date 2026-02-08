import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const products = {
  ebook: {
    name: "All The Black-Owned, Babee! — Digital Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — PDF delivered instantly",
    amount: 3000, // $30.00
  },
  "coffee-table": {
    name: "All The Black-Owned, Babee! — Coffee Table Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — hardcover pre-order",
    amount: 7500, // $75.00
  },
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed")
  }

  const { edition } = req.body || {}
  const product = products[edition] || products.ebook

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success?edition=${edition || 'ebook'}`,
      cancel_url: `${req.headers.origin}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
