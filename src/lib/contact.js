// Contact-form integration.
//
// Posts the form payload to the Cloudflare Pages Function at /api/contact,
// which validates it and sends an email via Resend to info@delasolana.com.
//
// Payload shape:
//   { nom: string, email: string, organitzacio: string,
//     assumpte: 'inquiry' | 'collaboration' | 'info' | 'other',
//     missatge: string, sentAt: ISO8601 string }

export async function submitMessage(payload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data = null
  try {
    data = await res.json()
  } catch {
    // non-JSON response
  }

  return { ok: res.ok && data?.ok === true }
}
