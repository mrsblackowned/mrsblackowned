import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// ── Email templates ──────────────────────────────────────────────────────────

const ebookEmailHtml = (downloadUrl) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:60px 24px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <p style="margin:0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#999999;">All The Black-Owned, Babee!</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:36px;font-weight:400;color:#111111;line-height:1.2;">Your Archive<br />Awaits</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:12px;">
              <p style="margin:0;font-size:15px;color:#555555;line-height:1.75;">
                Thank you for your purchase. Your digital edition of<br />
                <em style="color:#111111;">All The Black-Owned, Babee!</em> is attached to this email.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <p style="margin:0;font-size:13px;color:#999999;line-height:1.75;">
                Profiles, essays, and the complete archive — all in one place.<br />
                You can also download your copy anytime using the link below.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <a href="${downloadUrl}"
                 style="display:inline-block;background:#C8B590;color:#111111;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;padding:16px 44px;">
                Download Your Ebook
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:60px;">
              <p style="margin:0;font-size:11px;color:#bbbbbb;line-height:1.75;">
                Button not working? Copy and paste into your browser:<br />
                <a href="${downloadUrl}" style="color:#C8B590;word-break:break-all;">${downloadUrl}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="border-top:1px solid #f0f0f0;padding-top:32px;padding-bottom:48px;">
              <p style="margin:0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#cccccc;">Issue 01 &mdash; 2026</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

const coffeeTableEmailHtml = (name, shipping) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:60px 24px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <p style="margin:0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#999999;">All The Black-Owned, Babee!</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:36px;font-weight:400;color:#111111;line-height:1.2;">Your Pre-order<br />Is Confirmed</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:12px;">
              <p style="margin:0;font-size:15px;color:#555555;line-height:1.75;">
                ${name ? `${name}, thank` : "Thank"} you for pre-ordering the<br />
                <em style="color:#111111;">All The Black-Owned, Babee!</em> Coffee Table Edition.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <p style="margin:0;font-size:13px;color:#999999;line-height:1.75;">
                Your hardcover copy is reserved. We'll send you a shipping<br />
                confirmation with tracking details as soon as your order ships.
              </p>
            </td>
          </tr>
          ${shipping ? `
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <table cellpadding="0" cellspacing="0" border="0" style="background:#f9f9f9;padding:24px 32px;text-align:left;">
                <tr>
                  <td style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#999999;padding-bottom:12px;">Shipping To</td>
                </tr>
                <tr>
                  <td style="font-size:13px;color:#333333;line-height:1.75;">${shipping}</td>
                </tr>
              </table>
            </td>
          </tr>` : ""}
          <tr>
            <td align="center" style="border-top:1px solid #f0f0f0;padding-top:32px;padding-bottom:48px;">
              <p style="margin:0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#cccccc;">Issue 01 &mdash; 2026</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

const businessNotificationHtml = (edition, email, amount, shipping) => `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding:40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;">
          <tr>
            <td style="padding-bottom:24px;border-bottom:2px solid #C8B590;">
              <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C8B590;">New Sale</p>
              <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#111111;">
                ${edition === "coffee-table" ? "Coffee Table Pre-order" : "eBook Purchase"}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding-bottom:4px;">Customer</td>
                  <td style="font-size:14px;color:#111;text-align:right;">${email}</td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding:12px 0 4px;">Amount</td>
                  <td style="font-size:14px;color:#111;text-align:right;padding-top:12px;">${amount}</td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding:12px 0 4px;">Edition</td>
                  <td style="font-size:14px;color:#111;text-align:right;padding-top:12px;">${edition === "coffee-table" ? "Coffee Table (Hardcover Pre-order)" : "Digital eBook"}</td>
                </tr>
                ${shipping ? `
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding:12px 0 4px;vertical-align:top;">Ship To</td>
                  <td style="font-size:13px;color:#333;text-align:right;padding-top:12px;line-height:1.6;">${shipping}</td>
                </tr>` : ""}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top:32px;">
              <p style="margin:0;font-size:11px;color:#ccc;letter-spacing:0.1em;text-transform:uppercase;">mrsblackowned.com &mdash; All The Black-Owned, Babee!</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

// ── Helpers ──────────────────────────────────────────────────────────────────

const formatAddress = (addr) => {
  if (!addr) return null
  const parts = [
    addr.line1,
    addr.line2,
    `${addr.city}, ${addr.state} ${addr.postal_code}`,
    addr.country,
  ].filter(Boolean)
  return parts.join("<br />")
}

const formatAmount = (amountTotal, currency) => {
  if (!amountTotal) return "—"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "usd",
  }).format(amountTotal / 100)
}

// ── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed")
  }

  const { session_id } = req.body || {}
  if (!session_id) {
    return res.status(400).json({ error: "Missing session_id" })
  }

  // Verify with Stripe that payment actually completed
  let session
  try {
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["shipping_details"],
    })
  } catch {
    return res.status(400).json({ error: "Invalid session" })
  }

  if (session.payment_status !== "paid") {
    return res.status(402).json({ error: "Payment not completed" })
  }

  const customerEmail = session.customer_details?.email
  const customerName = session.customer_details?.name
  const edition = session.metadata?.edition || "ebook"
  const isEbook = edition === "ebook"
  const shippingHtml = formatAddress(session.shipping_details?.address)
  const amountStr = formatAmount(session.amount_total, session.currency)

  if (!process.env.RESEND_API_KEY) {
    console.error("[send-download-email] RESEND_API_KEY not set — skipping email")
    return res.status(200).json({ ok: true, sent: false, reason: "not-configured" })
  }

  const protocol = req.headers["x-forwarded-proto"] || "https"
  const host = req.headers["x-forwarded-host"] || req.headers.host
  const downloadUrl = `${protocol}://${host}/ebooks/All%20The%20Black%20Owned%20Babee!.pdf`
  const fromAddress = `All The Black-Owned, Babee! <hello@mrsblackowned.com>`

  const results = { customerSent: false, businessSent: false }

  // ── 1. Send email to customer ─────────────────────────────────────────────
  if (customerEmail) {
    let attachments = []
    let customerHtml

    if (isEbook) {
      // Fetch PDF and attach directly so buyers get the file in their inbox
      try {
        const pdfRes = await fetch(downloadUrl)
        if (pdfRes.ok) {
          const buffer = await pdfRes.arrayBuffer()
          attachments = [
            {
              filename: "All The Black-Owned, Babee!.pdf",
              content: Buffer.from(buffer).toString("base64"),
            },
          ]
        }
      } catch (e) {
        console.error("[send-download-email] PDF fetch failed:", e.message)
      }
      customerHtml = ebookEmailHtml(downloadUrl)
    } else {
      customerHtml = coffeeTableEmailHtml(customerName, shippingHtml)
    }

    const customerRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: customerEmail,
        subject: isEbook
          ? "Your Digital Download — All The Black-Owned, Babee!"
          : "Pre-order Confirmed — All The Black-Owned, Babee!",
        html: customerHtml,
        ...(attachments.length && { attachments }),
      }),
    })

    if (customerRes.ok) {
      results.customerSent = true
    } else {
      console.error("[send-download-email] Customer email failed:", await customerRes.text())
    }
  }

  // ── 2. Notify the business owner ─────────────────────────────────────────
  const businessEmail = process.env.BUSINESS_EMAIL
  if (businessEmail) {
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: businessEmail,
        subject: `New ${isEbook ? "eBook" : "Coffee Table Pre-order"} — ${amountStr} from ${customerEmail || "unknown"}`,
        html: businessNotificationHtml(edition, customerEmail || "unknown", amountStr, shippingHtml),
      }),
    })

    if (notifyRes.ok) {
      results.businessSent = true
    } else {
      console.error("[send-download-email] Business notification failed:", await notifyRes.text())
    }
  }

  return res.status(200).json({ ok: true, sent: results.customerSent, ...results })
}
