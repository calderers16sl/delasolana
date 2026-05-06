// Contact-form integration seam.
//
// TODO(backend): replace the stubbed body with a fetch() POST to the Lambda
// endpoint once it is deployed. The payload shape below is the contract the
// Lambda handler will need to accept.
//
// Expected payload:
//   { nom: string, email: string, organitzacio: string, assumpte: string,
//     missatge: string, sentAt: ISO8601 string }

export async function submitMessage(payload) {
  console.log('[submitMessage stub]', payload)
  await new Promise((r) => setTimeout(r, 650))
  return { ok: true }
}
