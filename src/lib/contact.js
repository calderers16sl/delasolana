// Contact-form integration seam.
//
// TODO(backend): replace the stubbed body with a fetch() POST to the Lambda
// endpoint once it is deployed. The payload shape below is the contract the
// Lambda handler will need to accept.
//
// Expected payload:
//   { nom: string, email: string, organitzacio: string,
//     assumpte: 'inquiry' | 'collaboration' | 'info' | 'other',
//     missatge: string, sentAt: ISO8601 string }
//
// Note: `assumpte` is a stable enum (not the localised label shown in the
// <select>). The form's currently-active locale is implied by the user's
// Accept-Language header and the persisted `lasolana.locale` value.

export async function submitMessage(payload) {
  console.log('[submitMessage stub]', payload)
  await new Promise((r) => setTimeout(r, 650))
  return { ok: true }
}
