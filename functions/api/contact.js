// Cloudflare Pages Function — POST /api/contact
// Receives the contact form, validates it, and sends an email via Resend.
//
// Required environment variable (set in Cloudflare Pages → Settings → Variables):
//   RESEND_API_KEY  — your Resend API key (secret)
// Optional:
//   CONTACT_TO      — destination address (default: info@delasolana.com)
//   CONTACT_FROM    — verified sender (default: Formulari web <formulari@delasolana.com>)

const SUBJECTS = {
  inquiry: 'Consulta general',
  collaboration: 'Col·laboració',
  info: 'Sol·licitud d’informació',
  other: 'Altres',
};

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const nom = (body.nom || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const organitzacio = (body.organitzacio || '').toString().trim();
  const assumpte = (body.assumpte || 'inquiry').toString().trim();
  const missatge = (body.missatge || '').toString().trim();
  const honeypot = (body.website || body._gotcha || '').toString().trim();

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (honeypot) return json({ ok: true });

  // Server-side validation (mirrors the client).
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!nom || !emailRe.test(email) || missatge.length < 10) {
    return json({ ok: false, error: 'validation' }, 422);
  }
  if (nom.length > 200 || email.length > 200 || organitzacio.length > 200 || missatge.length > 5000) {
    return json({ ok: false, error: 'too_long' }, 422);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) return json({ ok: false, error: 'not_configured' }, 500);

  const to = env.CONTACT_TO || 'info@delasolana.com';
  const from = env.CONTACT_FROM || 'Formulari web <formulari@delasolana.com>';
  const subjectLabel = SUBJECTS[assumpte] || SUBJECTS.inquiry;

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#1a1a1a;line-height:1.6">
      <h2 style="margin:0 0 16px">Nou missatge del formulari web</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:6px 12px;font-weight:600;width:140px">Nom</td><td style="padding:6px 12px">${escapeHtml(nom)}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:600">Email</td><td style="padding:6px 12px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px;font-weight:600">Organització</td><td style="padding:6px 12px">${escapeHtml(organitzacio) || '—'}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:600">Assumpte</td><td style="padding:6px 12px">${escapeHtml(subjectLabel)}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px">Missatge</h3>
      <div style="white-space:pre-wrap;padding:12px 16px;background:#f6f4f1;border-radius:6px">${escapeHtml(missatge)}</div>
      <p style="margin-top:20px;font-size:12px;color:#888">Enviat el ${escapeHtml(body.sentAt || new Date().toISOString())} des de delasolana.com</p>
    </div>`;

  const text =
    `Nou missatge del formulari web\n\n` +
    `Nom: ${nom}\nEmail: ${email}\nOrganització: ${organitzacio || '—'}\n` +
    `Assumpte: ${subjectLabel}\n\nMissatge:\n${missatge}\n`;

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Web] ${subjectLabel} — ${nom}`,
      html,
      text,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    console.error('Resend error', resp.status, detail);
    return json({ ok: false, error: 'send_failed' }, 502);
  }

  return json({ ok: true });
}

// Reject non-POST methods cleanly.
export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }
  return onRequestPost(context);
}
