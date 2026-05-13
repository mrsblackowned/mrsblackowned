const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "mrsblackowned@gmail.com"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed")
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY not set")
    return res.status(500).json({ error: "Email service not configured" })
  }

  const protocol = req.headers["x-forwarded-proto"] || "https"
  const host = req.headers["x-forwarded-host"] || req.headers.host

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding:40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;">
          <tr>
            <td style="padding-bottom:24px;border-bottom:2px solid #C8B590;">
              <p style="margin:0;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C8B590;">New Message</p>
              <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:24px;font-weight:400;color:#111111;">
                Contact Form Submission
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding-bottom:4px;">From</td>
                  <td style="font-size:14px;color:#111;text-align:right;">${name}</td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;padding:12px 0 4px;">Reply To</td>
                  <td style="font-size:14px;color:#111;text-align:right;padding-top:12px;">
                    <a href="mailto:${email}" style="color:#C8B590;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top:24px;border-top:1px solid #f0f0f0;margin-top:24px;">
              <p style="margin:0 0 8px;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
              <p style="margin:0;font-size:14px;color:#333;line-height:1.75;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:32px;">
              <p style="margin:0;font-size:11px;color:#ccc;letter-spacing:0.1em;text-transform:uppercase;">mrsblackowned.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `Mrs Black Owned <hello@${host}>`,
      to: BUSINESS_EMAIL,
      reply_to: email,
      subject: `New message from ${name} — mrsblackowned.com`,
      html,
    }),
  })

  if (!emailRes.ok) {
    const err = await emailRes.text()
    console.error("[contact] Resend error:", err)
    return res.status(500).json({ error: "Failed to send message" })
  }

  return res.status(200).json({ ok: true })
}
