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

  // Build a reliable base URL — req.headers.origin is absent on same-origin
  // POST requests in some browsers/environments, so fall back to the host header
  // which Vercel always populates with the actual domain serving the request.
  const protocol = req.headers["x-forwarded-proto"] || "https"
  const host = req.headers["x-forwarded-host"] || req.headers.host
  const baseUrl =
    req.headers.origin && req.headers.origin !== "null"
      ? req.headers.origin
      : `${protocol}://${host}`

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      // Stripe collects the buyer's email — needed to send the download link
      customer_email: undefined, // let Stripe prompt for it during checkout
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
      // {CHECKOUT_SESSION_ID} is a Stripe template variable — replaced with the
      // real session ID at redirect time, letting us verify payment server-side.
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&edition=${edition || "ebook"}`,
      cancel_url: `${baseUrl}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
