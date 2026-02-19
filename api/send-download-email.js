import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const emailHtml = (downloadUrl) => `<!DOCTYPE html>
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

          <!-- Eyebrow -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <p style="margin:0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#999999;">All The Black-Owned, Babee!</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:36px;font-weight:400;color:#111111;line-height:1.2;">Your Archive<br />Awaits</h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <div style="width:48px;height:1px;background:#C8B590;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- Body copy -->
          <tr>
            <td align="center" style="padding-bottom:12px;">
              <p style="margin:0;font-size:15px;color:#555555;line-height:1.75;">
                Thank you for your purchase. Your digital edition of<br />
                <em style="color:#111111;">All The Black-Owned, Babee!</em> is ready to download.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <p style="margin:0;font-size:13px;color:#999999;line-height:1.75;">
                Profiles, essays, and the complete archive — all in one place.
              </p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td align="center" style="padding-bottom:36px;">
              <a href="${downloadUrl}"
                 style="display:inline-block;background:#C8B590;color:#111111;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;padding:16px 44px;">
                Download Your Ebook
              </a>
            </td>
          </tr>

          <!-- Fallback link -->
          <tr>
            <td align="center" style="padding-bottom:60px;">
              <p style="margin:0;font-size:11px;color:#bbbbbb;line-height:1.75;">
                Button not working? Copy and paste into your browser:<br />
                <a href="${downloadUrl}" style="color:#C8B590;word-break:break-all;">${downloadUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed")
  }

  const { session_id } = req.body || {}
  if (!session_id) {
    return res.status(400).json({ error: "Missing session_id" })
  }

  // Verify with Stripe that payment actually completed — never trust the URL alone
  let session
  try {
    session = await stripe.checkout.sessions.retrieve(session_id)
  } catch {
    return res.status(400).json({ error: "Invalid session" })
  }

  if (session.payment_status !== "paid") {
    return res.status(402).json({ error: "Payment not completed" })
  }

  const email = session.customer_details?.email
  if (!email) {
    // Payment verified but no email available (guest checkout with no email)
    return res.status(200).json({ ok: true, sent: false, reason: "no-email" })
  }

  if (!process.env.RESEND_API_KEY) {
    // Email sending not configured — log so the owner can see it in Vercel logs
    console.error("[send-download-email] RESEND_API_KEY not set. Skipping email to:", email)
    return res.status(200).json({ ok: true, sent: false, reason: "not-configured" })
  }

  // Build the download URL from the request host so it always matches the live domain
  const protocol = req.headers["x-forwarded-proto"] || "https"
  const host = req.headers["x-forwarded-host"] || req.headers.host
  const downloadUrl = `${protocol}://${host}/ebooks/All%20The%20Black%20Owned%20Babee!.pdf`

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      // IMPORTANT: update the 'from' address to match your verified Resend domain
      from: `All The Black-Owned, Babee! <hello@${host}>`,
      to: email,
      subject: "Your Digital Download — All The Black-Owned, Babee!",
      html: emailHtml(downloadUrl),
    }),
  })

  if (!emailRes.ok) {
    const err = await emailRes.text()
    console.error("[send-download-email] Resend error:", err)
    return res.status(500).json({ error: "Email delivery failed" })
  }

  return res.status(200).json({ ok: true, sent: true, to: email })
}
