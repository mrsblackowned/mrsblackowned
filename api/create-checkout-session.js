import Stripe from "stripe"

const products = {
  ebook: {
    name: "All The Black-Owned, Babee! — Digital Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — PDF delivered instantly",
    amount: 2500, // $25.00
  },
  "coffee-table": {
    name: "All The Black-Owned, Babee! — Coffee Table Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — hardcover pre-order",
    amount: 6500, // $65.00
  },
}

export default async function handler(req, res) {
  // Allow POST only
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST")
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  // Validate Stripe secret key is configured
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not set in environment variables")
    return res.status(500).json({
      error: "Payment service is not configured. Please contact support.",
    })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  const { edition } = req.body || {}
  const product = products[edition] || products.ebook

  // Build origin URL with fallback
  const origin =
    req.headers.origin ||
    req.headers.referer?.replace(/\/$/, "") ||
    "https://mrsblackowned.com"

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
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error("Stripe checkout error:", err.message)
    res.status(500).json({ error: "Failed to create checkout session." })
  }
}
