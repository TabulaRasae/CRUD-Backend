const ALLOWED_ORIGIN =
  process.env.NODE_ENV === 'production'
    ? 'https://crud-frontend-k8z13a1vr-markfartushniaks-projects.vercel.app'
    : 'http://localhost:3000';

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function GET() {
  return Response.json({ ok: true }, {
    headers: { 'Access-Control-Allow-Origin': ALLOWED_ORIGIN },
  });
}