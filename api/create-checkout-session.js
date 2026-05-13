import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const products = {
  ebook: {
    name: "All The Black-Owned, Babee! — Digital Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — PDF delivered instantly",
    amount: 4000, // $40.00
  },
  "coffee-table": {
    name: "All The Black-Owned, Babee! — Coffee Table Edition",
    description:
      "The complete 2026 guide to Black-owned beauty and fragrance — hardcover pre-order",
    amount: 10500, // $105.00
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

  const isCoffeeTable = edition === "coffee-table"

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
      // Store edition in metadata so server-side email handler can read it
      metadata: { edition: edition || "ebook" },
      // Collect shipping address + calculate tax for physical pre-orders
      ...(isCoffeeTable && {
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "GB", "AU"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 899, currency: "usd" },
              display_name: "Standard Shipping",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 5 },
                maximum: { unit: "business_day", value: 10 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 1899, currency: "usd" },
              display_name: "Expedited Shipping",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 2 },
                maximum: { unit: "business_day", value: 5 },
              },
            },
          },
        ],
        automatic_tax: { enabled: true },
        billing_address_collection: "required",
      }),
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
